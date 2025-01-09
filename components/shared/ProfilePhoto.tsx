import Image from "next/image"

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <div>
      <div className="h-12 w-12  rounded-full overflow-hidden  bg-gray-200">
        <Image
          src={src || "/profile_placeholder.png"}
          alt="Profile Image"
          width={120}
          height={120}
          loading="lazy"
          className=""
        />
      </div>
    </div>
  )
}

export default ProfilePhoto
