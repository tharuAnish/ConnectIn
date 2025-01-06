import { Avatar, AvatarImage } from "../ui/avatar"

const ProfilePhoto = ({ src }: { src: string }) => {
  return (
    <div>
      <Avatar className="cursor-pointer">
        <AvatarImage src={src} alt="Profile Image" />
      </Avatar>
    </div>
  )
}

export default ProfilePhoto
