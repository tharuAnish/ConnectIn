import { Building2, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

interface NavigationItem {
  title: string
  href: string
}

const recentItems: NavigationItem[] = [
  { title: "JavaScript", href: "#" },
  { title: "React Js & React Native ", href: "#" },
  { title: "zerotomastery.io", href: "#" },
  { title: "React Developers - ReactJS ", href: "#" },
  { title: "OxF Institute of Technology", href: "#" },
]

const groupItems: NavigationItem[] = [
  { title: "JavaScript", href: "#" },
  { title: "React Js & React Native Devel...", href: "#" },
  { title: "zerotomastery.io", href: "#" },
]

export default function Recent() {
  return (
    <Card className="w-full">
      <div className="p-4 grid gap-1">
        {/* Recent Section */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xs font-medium ">Recent</h2>
          {recentItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-start py-1 hover:bg-muted rounded   text-xs font-normal text-muted-foreground"
            >
              <Building2 className="h-4 w-4 mr-3" />
              {item.title}
            </div>
          ))}
        </div>

        {/* Groups Section */}
        <div className="mt-3 grid gap-1">
          <Link href="#" className="  text-xs text-blue-600 font-medium">
            Groups
          </Link>
          {groupItems.map((item, index) => (
            <div
              key={index}
              className="w-full flex justify-start py-1 hover:bg-muted rounded    text-xs font-normal text-muted-foreground"
            >
              <Building2 className="h-4 w-4 mr-3" />
              {item.title}
            </div>
          ))}
          <Button
            variant="ghost"
            className="w-full  justify-start h-8   text-xs font-medium"
          >
            Show more
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
        </div>

        {/* Events Section */}
        <div className="mt-3 grid gap-1">
          <div className="  flex items-center justify-between">
            <Link href="#" className="text-xs text-blue-600 font-medium">
              Events
            </Link>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Separator className="my-2" />

        {/* Discover More */}
        <Button
          variant="ghost"
          className="w-full text-gray-800 justify-center h-8 text-sm font-medium"
        >
          Discover more
        </Button>
      </div>
    </Card>
  )
}
