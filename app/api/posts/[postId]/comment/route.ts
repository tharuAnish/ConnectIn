// http://localhost:3000/api/posts/1/comment

import connectDB from "@/lib/db"
import { Post } from "@/models/post.model"
import { NextRequest, NextResponse } from "next/server"

// fetch all comments
export const GET = async (
  req: NextRequest,
  { params }: { params: { postId: string } }
) => {
  try {
    await connectDB()
    const post = await Post.findById({ _id: params.postId })
    if (!post) return NextResponse.json({ error: "Post not found." })

    const comment = await post.populate({
      path: "comments",
      options: { sort: { createAt: -1 } },
    })
    return NextResponse.json({ message: "Post comment successfully." })
  } catch (error: any) {
    return NextResponse.json({ error: "An error occurred." })
  }
}
