import {
  Bell,
  BriefcaseBusiness,
  Home,
  MessageCircleMore,
  Users,
} from "lucide-react"
import Link from "next/link"

interface NAVITEMS {
  src: string
  icon: JSX.Element
  text: string
}

const navItems: NAVITEMS[] = [
  {
    src: "/",
    icon: <Home size={19} />,
    text: "Home",
  },
  {
    src: "/networks",
    icon: <Users size={19} />,
    text: "My Network",
  },
  {
    src: "/job",
    icon: <BriefcaseBusiness size={19} />,
    text: "Jobs",
  },
  {
    src: "/message",
    icon: <MessageCircleMore size={19} />,
    text: "Messaging",
  },
  {
    src: "/notification",
    icon: <Bell size={19} />,
    text: "Notification",
  },
]

const NavItems = () => {
  return (
    <div className="flex gap-8">
      {navItems.map((navItem, index) => {
        return (
          <div
            key={index}
            className="flex flex-col items-center justify-center cursor-pointer text-[#666666] hover:text-black"
          >
            <span>{navItem.icon}</span>
            <Link href={navItem.src} className="text-[11px]">
              {navItem.text}
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default NavItems
