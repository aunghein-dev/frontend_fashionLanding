import { useState } from "react";
import Search from "../atoms/Search";
import { Link } from "../typography/Link";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDoubleLeft } from "react-icons/fa";
import NavbarData from "@/data/navbar.data";

interface NavbarProps {
  query: string;
  setQuery: (q: string) => void;
}

export default function Navbar({ query, setQuery }: NavbarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="bg-base h-[60px] sm:h-[100px] fixed top-0 left-0 right-0 z-[1000] border-b border-gray-300/30 shadow-sm">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto px-4 lg:px-0 relative">
        {/* Left: Hamburger */}
        <button
          className="flex flex-row items-center gap-1"
          onClick={() => setSidebarOpen(true)}
        >
          <RxHamburgerMenu className="w-6 h-6 text-gray-800" />
        </button>

        {/* Center: Always Centered Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link to={`/`}>
            <span className="font-noto font-[700] text-[1.2rem] sm:text-[1.7rem] cursor-pointer text-gray-800 hover:text-gray-700 transition-colors duration-200">
              Swe Trendy Hub
            </span>
          </Link>
        </div>

        {/* Right: Search */}
        <div className="flex flex-row items-center gap-1">
          <Search query={query} setQuery={setQuery} />
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[998] transition-opacity duration-300 ease-in-out ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-[300px] bg-white z-[999] pt-[80px] pl-10 
                    transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-10 left-10"
        >
          <FaAngleDoubleLeft className="w-6 h-6 text-gray-800 hover:text-gray-600 transition-colors duration-200" />
        </button>

        <div className="ml-4 ">
          {NavbarData.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`block pr-4 py-2 
                        text-md tracking-wider mt-1
                        font-josefin font-[700] 
                        transition-all duration-150 ease-in-out
                        ${item.name === "Best Sellers"? "text-pink-300 border-b border-pink-300 max-w-[130px]" : "text-gray-700 hover:text-gray-600" }  `}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </div>
       
      </div>
    </nav>
  );
}
