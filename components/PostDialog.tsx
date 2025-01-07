import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Image from "next/image"
import { Textarea } from "./ui/textarea"
import { ImageIcon } from "lucide-react"
import { useRef, useState } from "react"
import { readFileAsDataUrl } from "@/lib/utils"
import { createPostAction } from "@/lib/serveractions"

export function PostDialog({
  setOpen,
  open,
  src,
}: {
  setOpen: any
  open: boolean
  src: string
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<string>("")
  const [inputText, setInputText] = useState<string>("")

  const changeHandler = (e: any) => {
    setInputText(e.target.value)
  }

  const fileChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const dataUrl = await readFileAsDataUrl(file)
      setSelectedFile(dataUrl)
    }
  }

  const postActionHndler = async (formData: FormData) => {
    const inputText = formData.get("inputText") as string
    try {
      await createPostAction(inputText, selectedFile)
    } catch (error) {
      console.log("Error occured", error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <div className="flex gap-3 items-center">
            <Image
              src={src ? src : "/banner.png"}
              alt="Profile Image"
              width={60}
              height={60}
              className="rounded-full border-2 "
            />
            <div>
              <DialogTitle>
                <h4>Anish Tharu</h4>
              </DialogTitle>
              <p className="text-xs">Post to anyone</p>
            </div>
          </div>
        </DialogHeader>
        <form action={postActionHndler}>
          <div className="flex flex-col">
            <Textarea
              id="name"
              name="inputText"
              value={inputText}
              onChange={changeHandler}
              className="focus-visible:ring-0"
              placeholder="What do you want to talk about?"
            />
            <div className="my-4">
              {selectedFile && (
                <Image
                  src={selectedFile}
                  alt="Preview Image"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
          <DialogFooter>
            <div className="flex items-center gap-4">
              <input
                ref={inputRef}
                onChange={fileChangeHandler}
                type="file"
                name="Image"
                className="hidden"
                accept="image/*"
              />
              <Button type="submit">Post</Button>
            </div>
          </DialogFooter>
        </form>
        <Button
          className="gap-2"
          onClick={() => inputRef?.current?.click()}
          variant="outline"
        >
          <ImageIcon className="text-blue-500" />
          <p>Media</p>
        </Button>
      </DialogContent>
    </Dialog>
  )
}
