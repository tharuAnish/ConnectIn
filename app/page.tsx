import Feed from "@/components/Feed"
import { TrendingSection } from "@/components/News"
import Sidebar from "@/components/Sidebar"
import { currentUser } from "@clerk/nextjs/server"

export default async function Home() {
  const user = await currentUser()

  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-12 gap-5">
        <div className="col-span-3 hidden md:block">
          <Sidebar user={user} />
        </div>
        <div className="col-span-6 ">
          <Feed user={user} />
        </div>
        <div className="col-span-3 hidden md:block">
          <TrendingSection />
        </div>
      </div>
    </div>
  )
}
