"use server"

import { Post } from "@/models/post.model"
import { IUser } from "@/models/user.model"
import { currentUser } from "@clerk/nextjs/server"
import { v2 as cloudinary } from "cloudinary"
import connectDB from "./db"
import { revalidatePath } from "next/cache"
import { Comment } from "@/models/comment.model"
import mongoose from "mongoose"

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

//Create Post using server action
export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
  await connectDB()
  const user = await currentUser()
  if (!user) throw new Error("User not authenticated")
  if (!inputText) throw new Error("Input field is required")

  const image = selectedFile

  const userDatabase: IUser = {
    firstName: user.firstName || "Anish",
    lastName: user.lastName || "Tharu",
    userId: user.id,
    profilePhoto: user.imageUrl,
  }

  let uploadResponse

  try {
    if (image) {
      //1. create post with image and text
      // Upload the image to Cloudinary
      uploadResponse = await cloudinary.uploader.upload(image)
      await Post.create({
        description: inputText,
        user: userDatabase,
        imageUrl: uploadResponse.secure_url,
      })
    } else {
      //2. create post with text only
      await Post.create({
        description: inputText,
        user: userDatabase,
      })
    }
    revalidatePath("/")
  } catch (error: any) {
    throw new Error(error)
  }
}

//Get all posts using server actions
export const getAllPosts = async () => {
  await connectDB()
  try {
    // fetch the post in created recent order
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate({ path: "comments", options: { sort: { createdAt: -1 } } })
    if (!posts) return []
    return JSON.parse(JSON.stringify(posts))
  } catch (error) {
    console.log(error)
  }
}

//delet post by id
export const deletePostAction = async (postId: string) => {
  await connectDB()
  const user = await currentUser()
  if (!user) throw new Error("User not Authenticated")
  const post = await Post.findById(postId)
  if (!post) throw new Error("Post Not found")

  //user should be able to delete his own post only
  if (post.user.userId !== user.id) {
    throw new Error("You are not an author of this Post")
  }

  try {
    await Post.deleteOne({ _id: postId })
    revalidatePath("/")
  } catch (error: any) {
    throw new Error("An error occured", error)
  }
}

//create comment
export const createCommentAction = async (
  postId: string,
  formData: FormData
) => {
  try {
    const user = await currentUser()
    if (!user) throw new Error("user not authenticated")

    const inputText = formData.get("inputText") as string
    if (!inputText) throw new Error("Input field is required")
    if (!postId) throw new Error("Post id required")

    const userDatabase: IUser = {
      firstName: user.firstName || "Anish",
      lastName: user.lastName || "Tharu",
      userId: user.id,
      profilePhoto: user.imageUrl,
    }
    const post = await Post.findById({ _id: postId })
    if (!post) throw new Error("Post not found")

    const comment = await Comment.create({
      textMessage: inputText,
      user: userDatabase,
    })

    // Explicitly cast _id as ObjectId
    post.comments?.push(comment._id as mongoose.Types.ObjectId)
    await post.save()

    revalidatePath("/")
  } catch (error) {
    throw new Error("An error occured")
  }
}
