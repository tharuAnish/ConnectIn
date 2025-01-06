import Image from "next/image"
import React from "react"
import ProfilePhoto from "./shared/ProfilePhoto"

const Sidebar = ({ user }: { user: any }) => {
  return (
    <div className="hidden md:block w-[20%] border  bg-white rounded">
      <div className="flex relative flex-col items-center">
        <div className="w-full h-16 overflow-hidden">
          {user && (
            <Image
              src={"/banner.png"}
              alt="Banner"
              width={200}
              height={200}
              className="w-full h-full rounded-t"
            />
          )}
        </div>

        <div className="my-1 absolute top-10 ">
          <ProfilePhoto src={user ? user?.imageUrl : "/banner.png"} />
        </div>
        <div className="border-b">
          <div className="p-2 mt-5 text-center">
            <h1 className="font-bold hover:underline cursor-pointer">
              {user ? `${user?.firstName} ${user?.lastName}` : "No Name"}
            </h1>
            <p className="text-xs">
              @{user ? `${user?.username}` : "no_username"}
            </p>
          </div>
        </div>
      </div>
      <div className="text-xs">
        <div className="w-full flex gap-2 justify-between items-center px-3 py-2 hover:bg-gray-200  cursor-pointer">
          <p>Post Impression</p>
          <p className="text-blue-500 font-bold">88</p>
        </div>
        <div className="w-full flex gap-2 justify-between items-center px-3 py-2 hover:bg-gray-200  cursor-pointer">
          <p>Post </p>
          <p className="text-blue-500 font-bold">0</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
