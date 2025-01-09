"use client"

import ProfilePhoto from "./shared/ProfilePhoto"
import { Input } from "./ui/input"
import { PostDialog } from "./PostDialog"
import { useState } from "react"
import { FileText, ImageIcon, Play } from "lucide-react"

const PostInput = ({ user }: { user: any }) => {
  const [open, setOpen] = useState<boolean>(false)
  const inputHandler = () => {
    setOpen(true)
  }

  return (
    <div className="bg-white p-4 pb-2 m-2 md:m-0 border border-gray-300 rounded-lg">
      <div className="flex items-center gap-3">
        <ProfilePhoto
          src={user ? user?.imageUrl : "/profile_placeholder.png"}
        />
        <Input
          type="text"
          placeholder="Create a post ..."
          className="rounded-full hover:bg-gray-100 h-12 cursor-pointer"
          onClick={inputHandler}
        />
        <PostDialog setOpen={setOpen} open={open} src={user?.imageUrl} />
      </div>

      <div className="flex gap-1 mt-3">
        <div
          onClick={inputHandler}
          className="flex-1 space-x-2 flex justify-center rounded py-2 items-center hover:bg-muted cursor-pointer"
        >
          <ImageIcon className="w-5 h-5 text-blue-600" />
          <span className="text-gray-800 text-sm">Photo</span>
        </div>
        <div
          onClick={inputHandler}
          className="flex-1 space-x-2 flex justify-center items-center  rounded py-2 hover:bg-muted cursor-pointer"
        >
          <Play className="w-5 h-5 text-green-600" />
          <span className="text-gray-800 text-sm">Video</span>
        </div>
        <div
          onClick={inputHandler}
          className="flex-1 space-x-2 flex justify-center items-center  rounded py-2 hover:bg-muted cursor-pointer"
        >
          <FileText className="w-5 h-5 text-orange-600" />
          <span className="text-gray-800 text-sm">Write article</span>
        </div>
      </div>
    </div>
  )
}

export default PostInput
