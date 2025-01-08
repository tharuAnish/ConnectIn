"use client"

import { Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import PostContent from "./PostContent"
import SocialOptions from "./SocialOptions"
import { IPostDocument } from "@/models/post.model"
import ProfilePhoto from "./shared/ProfilePhoto"
import ReactTimeAgo from "react-time-ago"
import TimeAgo from "javascript-time-ago"
import en from "javascript-time-ago/locale/en.json"
import { deletePostAction } from "@/lib/serveractions"
import { useUser } from "@clerk/nextjs"

const Post = ({ post }: { post: IPostDocument }) => {
  const { user } = useUser()
  const fullName = post?.user?.firstName + " " + post?.user?.lastName
  const loggedInUser = user?.id === post?.user?.userId
  // Register the locale
  TimeAgo.addDefaultLocale(en)

  return (
    <div className="bg-white my-2 rounded-lg border">
      <div className="flex gap-2 p-4">
        <ProfilePhoto src={post.user?.profilePhoto!} />
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-sm font-bold">
              {fullName}
              <Badge variant={"outline"} className="ml-2">
                You
              </Badge>
            </h1>
            <p className="text-xs text-gray-500 lowercase">
              @{post ? `${post?.user?.firstName}` : "no_username"}
            </p>
            <p className="text-xs text-gray-500">
              <ReactTimeAgo date={new Date(post.createdAt)} locale="en-US" />
            </p>
          </div>
        </div>
        <div>
          {loggedInUser && (
            <Button
              onClick={() => {
                const res = deletePostAction(post._id)
              }}
              className="rounded-full  text-gray-500"
              size={"icon"}
              variant={"outline"}
            >
              <Trash2 />
            </Button>
          )}
        </div>
      </div>

      <PostContent post={post} />
      <SocialOptions post={post} />
    </div>
  )
}

export default Post
