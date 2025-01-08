"use client"

import { useUser } from "@clerk/nextjs"
import ProfilePhoto from "./shared/ProfilePhoto"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { createCommentAction } from "@/lib/serveractions"

const CommentInput = ({ postId }: { postId: string }) => {
  const { user } = useUser()

  const commentActionHandler = async (formData: FormData) => {
    try {
      if (!user) throw new Error("User not authenticated")
      await createCommentAction(postId, formData)
    } catch (error: any) {
      throw new Error("An error occured", error)
    }
  }

  return (
    <form action={(formData) => commentActionHandler(formData)}>
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 flex-shrink-0 ">
          <ProfilePhoto src={user?.imageUrl!} />
        </div>
        <Input
          type="textx"
          name="inputText"
          placeholder="Add a comment"
          className="rounded-full"
        />
        <Button type="submit" variant={"outline"} className="rounded-full">
          Add
        </Button>
      </div>
    </form>
  )
}

export default CommentInput
