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

const Post = ({ post }: { post: IPostDocument }) => {
  const fullName = post?.user?.firstName + " " + post?.user?.lastName
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
            <p className="text-xs text-gray-500">@username</p>
            <p className="text-xs text-gray-500">
              <ReactTimeAgo date={new Date(post.createdAt)} locale="en-US" />
            </p>
          </div>
        </div>
        <div>
          <Button
            className="rounded-full  text-gray-500"
            size={"icon"}
            variant={"outline"}
          >
            <Trash2 />
          </Button>
        </div>
      </div>

      <PostContent post={post} />
      <SocialOptions />
    </div>
  )
}

export default Post
