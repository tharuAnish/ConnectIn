"use client"

import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { createCommentAction } from "@/lib/serveractions"
import Image from "next/image"

const CommentInput = ({ postId }: { postId: string }) => {
  const { user } = useUser()
  const [comment, setComment] = useState("")

  // Handle form submission
  const commentActionHandler = async (formData: FormData) => {
    try {
      if (!user) throw new Error("User not authenticated")
      await createCommentAction(postId, formData)
      setComment("") // Reset the input field after successful comment submission
    } catch (error: any) {
      console.error("An error occurred:", error)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault() // Prevent default form submission behavior
        const formData = new FormData()
        formData.append("inputText", comment)
        commentActionHandler(formData)
      }}
    >
      <div className="flex items-center gap-2">
        <div className="flex-shrink-0">
          <Image
            src={user?.imageUrl! || "/profile_placeholder.png"}
            alt="Profile Image"
            width={120}
            height={120}
            loading="lazy"
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>
        <Input
          type="text"
          value={comment}
          name="inputText"
          onChange={handleInputChange} // Update the state as the user types
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
