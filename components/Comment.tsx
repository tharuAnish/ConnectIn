import { ICommentDocument } from "@/models/comment.model"
import React from "react"
import ProfilePhoto from "./shared/ProfilePhoto"
import ReactTimeAgo from "react-time-ago"
import "@/components/shared/TimeAgo.config"

const Comment = ({ comment }: { comment: ICommentDocument }) => {
  return (
    <div className="flex gap-2 my-4">
      <div className="mt-2 w-9 h-9">
        <ProfilePhoto src={comment?.user?.profilePhoto!} />
      </div>
      <div className="flex flex-1 justify-between p-3 rounded-lg bg-gray-100">
        <div>
          <h1 className="text-sm font-medium">{`${comment?.user?.firstName} ${comment?.user?.lastName}`}</h1>
          <p className="text-xs text-gray-400">@{comment?.user?.firstName}</p>
          <p className="my-2 text-sm text-gray-600">{comment.textMessage}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">
            <ReactTimeAgo date={new Date(comment.createdAt)} locale="en-US" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comment
