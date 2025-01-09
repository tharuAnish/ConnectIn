import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getAllPosts } from "@/lib/serveractions"
import Image from "next/image"

const Sidebar = async ({ user }: { user: any }) => {
  const posts = await getAllPosts()

  return (
    <div className="hidden md:block  overflow-hidden bg-white rounded-xl border">
      <div className="relative">
        {/* Banner Image */}
        <div className="h-20 bg-gradient-to-r from-zinc-950 to-zinc-800">
          <Image
            src="/banner.png"
            alt="Profile banner"
            width={320}
            height={96}
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Profile Image */}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-12">
          <div className="rounded-full border-2 border-white overflow-hidden">
            <Image
              src={user?.imageUrl ?? "/profile_placeholder.png"}
              alt="Profile picture"
              width={96}
              height={96}
              className="w-20 h-20 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-14 pb-4 px-6 text-center">
        <h2 className="font-semibold text-lg hover:underline cursor-pointer">
          {user ? `${user.firstName} ${user.lastName}` : "No Name"}
        </h2>
        <p className="text-xs text-muted-foreground mt-0.5">
          @{user?.username ?? "no_username"}
        </p>
        <p className="text-xs mt-2 text-muted-foreground">
          Software Engineer | Full-Stack Developer | Expert in Next.js,
          Typescript, Javascript, React.js
        </p>
      </div>

      <Separator />

      {/* Stats */}
      <div className="px-4 py-4 ">
        <div className="flex text-xs cursor-pointer hover:bg-muted  p-2 py-1 items-center justify-between">
          <span className=" text-muted-foreground">Profile viewers</span>
          <span className="font-medium">{27}</span>
        </div>
        <div className="flex text-xs cursor-pointer hover:bg-muted  p-2 py-1 items-center justify-between">
          <span className="text-muted-foreground">Totl Post</span>
          <span className="font-medium">{posts.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
