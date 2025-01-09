import Post from "./Post"
import { IPostDocument } from "@/models/post.model"

const Posts = ({ posts }: { posts: IPostDocument[] }) => {
  return (
    <div className="flex gap-2 flex-col">
      {posts?.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts
