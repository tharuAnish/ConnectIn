import Image from "next/image"

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <div>
      <Image
        src={src ? src : "/banner.png"}
        alt="Profile Image"
        width={60}
        height={60}
        className="rounded-full border-2 "
      />
    </div>
  )
}

export default ProfilePhoto
