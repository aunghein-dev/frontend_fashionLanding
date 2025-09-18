import { useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchProps {
  query: string;
  setQuery: (q: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const shouldExpand = focused || query.length > 0;

  return (
    <div
      className={`
        flex items-center rounded-full border border-gray-300
        transition-all duration-300 ease-in-out
         overflow-hidden
        ${shouldExpand ? "w-[120px] sm:w-[200px] px-2" : "w-10 h-10 justify-center"}
        ${focused ? "border-gray-300 shadow-sm" : ""}
        cursor-pointer
      `}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Search Icon */}
      <IoSearchOutline
        className={`transition-colors duration-200 
        ${focused ? "text-gray-500 ml-0" : "text-gray-500 ml-2"}`}
        size={18}
      />

      {/* Input (only expands when focused or has value) */}
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`
          ml-2 bg-transparent text-xs font-[400] sm:text-sm 
          focus:outline-none transition-all duration-300 py-2 cursor-pointer font-noto
          text-black-color
          ${shouldExpand ? "opacity-100 w-full" : "opacity-0 w-0"}
        `}
      />
    </div>
  );
};

export default Search;
