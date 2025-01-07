"use server"

import { Post } from "@/models/post.model"
import { IUser } from "@/models/user.model"
import { currentUser } from "@clerk/nextjs/server"

export const createPostAction = async (
  inputText: string,
  selectedFile: string
) => {
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

  try {
    if (image) {
      //1. create post with image and text
      await Post.create({
        description: inputText,
        user: userDatabase,
        imageUrl: "image url from cloudinary",
      })
    } else {
      //2. create post with text only
      await Post.create({
        description: inputText,
        user: userDatabase,
      })
    }
  } catch (error: any) {
    throw new Error(error)
  }
}
