import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search..."
      />
      <button
        type="submit"
        className="btn btn-circle bg-purple-600 text-slate-400"
      >
        <IoSearchSharp className="h-6 w-6 outline-none" />
      </button>
    </form>
  )
}

export default SearchInput
