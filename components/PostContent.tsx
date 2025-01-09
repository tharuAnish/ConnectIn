import { IPost } from "@/models/post.model"
import Image from "next/image"
import React from "react"

const PostContent = ({ post }: { post: IPost }) => {
  return (
    <div className="">
      <p className=" px-4 text-gray-800 text-sm">{post?.description}</p>
      {post?.imageUrl && (
        <Image
          src={post?.imageUrl}
          alt="post-image"
          width={500}
          height={500}
          className="w-full my-2 mx-auto"
        />
      )}
    </div>
  )
}

export default PostContent
