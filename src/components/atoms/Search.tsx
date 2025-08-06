import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  return (
    <>
      <div className="border border-hero-bg h-10 w-[300px] rounded-[1.5rem] flex flex-row items-center gap-2">
        <IoSearchOutline className="w-5 h-5 ml-2"/>
        <input className="flex-1 h-full bg-transparent
                          font-noto font-[300] focus:outline-none" type="text" placeholder="Search" />
      </div>
    </>
  )
}

export default Search