import { Input } from "./ui/input"

const SearchInput = () => {
  return (
    <div>
      <Input
        type="textx"
        placeholder="search"
        className="bg-[#EDF3F8] focus-visible:ring-0 w-80 rounded-lg border-none"
      />
    </div>
  )
}

export default SearchInput
