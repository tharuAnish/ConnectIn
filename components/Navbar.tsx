import Image from "next/image"
import SearchInput from "./SearchInput"
import NavItems from "./NavItems"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-50 shadow-sm">
      <div className="flex items-center max-w-6xl justify-between h-14 mx-auto px-3">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={"/Linkedin_icon.png"}
              alt="Logo"
              width={35}
              height={35}
            />
          </Link>
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="md:block hidden">
            <NavItems />
          </div>
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <div className="rounded-full text-sm text-gray-500 border p-[6px] px-4 transition hover:bg-gray-100">
                <SignInButton />
              </div>
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
