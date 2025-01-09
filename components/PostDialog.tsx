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
import { toast } from "sonner"
import { ScrollArea } from "./ui/scroll-area"

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
      setInputText("")
      setSelectedFile("")
      setOpen(false)
    } catch (error) {
      console.error("Error occurred while creating the post:", error)
      alert("Failed to create post. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent
        onInteractOutside={() => setOpen(false)}
        className="sm:max-w-[425px] lg:max-w-[620px]  max-h-screen "
      >
        <ScrollArea className="max-h-screen">
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
                <DialogTitle>Anish Tharu</DialogTitle>
                <p className="text-xs text-muted-foreground">Post to anyone</p>
              </div>
            </div>
          </DialogHeader>
          <form
            action={(formData) => {
              const promise = postActionHndler(formData)
              toast.promise(promise, {
                loading: "Creating post...",
                success: "Post Created",
                error: "Failed to create post",
              })
            }}
          >
            <div className="flex flex-col">
              <Textarea
                id="name"
                name="inputText"
                value={inputText}
                onChange={changeHandler}
                className="focus-visible:ring-0 border-none h-40"
                placeholder="What do you want to talk about ?"
              />

              <div className="my-4">
                {selectedFile && (
                  <Image
                    src={selectedFile}
                    alt="Preview Image"
                    width={400}
                    height={400}
                    className="max-h-40 w-auto"
                  />
                )}
              </div>
            </div>
            <div
              className=" flex gap-2 items-center hover:bg-muted cursor-pointer w-fit px-2 py-1 rounded"
              onClick={() => inputRef?.current?.click()}
            >
              <ImageIcon size={20} className="text-blue-500" />
              <p className="text-xs text-gray-500 hover:text-gray-800 ">
                Add a photo
              </p>
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
                <Button
                  variant={"secondary"}
                  type="submit"
                  className="rounded-full text-gray-600 text-sm"
                >
                  Post
                </Button>
              </div>
            </DialogFooter>
          </form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
