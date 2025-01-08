import React from "react"
import PostInput from "./PostInput"
import Posts from "./Posts"
import { getAllPosts } from "@/lib/serveractions"
import { Separator } from "./ui/separator"

const Feed = async ({ user }: { user: any }) => {
  const userData = JSON.parse(JSON.stringify(user))
  const posts = await getAllPosts()
  return (
    <div className="flex-1">
      <PostInput user={userData} />
      <Separator className="my-3 w-[95%] mx-auto bg-gray-300 h-[1px]" />
      <Posts posts={posts!} />
    </div>
  )
}

export default Feed
