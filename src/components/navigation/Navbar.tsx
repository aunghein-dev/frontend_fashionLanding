import NavbarData from "@/data/navbar.data"
import { LuSearch, LuHeart } from "react-icons/lu";
import { RiContactsLine, RiShoppingBag4Line } from "react-icons/ri";
import IconButton from "../typography/IconButton";

export default function Navbar() {
  return (
    <nav className="bg-white/20 backdrop-blur-md h-16  mx-auto px-6 fixed top-0 left-0 right-0">

      <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
        {/* Left: Logo + Links */}
        <div className="flex items-center gap-6">
          <span className=" font-bold text-3xl">Mo Mo</span>
          <ul className="flex gap-4 text-base">
            {NavbarData.map((item) => (
            <li
              key={item.id}
              className="relative px-2 py-1 text-sm font-medium  transition-all duration-200 ease-in-out hover:text-tertiary-txt hover:scale-[1.05] cursor-pointer group"
            >
              <a href={item.path} className="relative z-10">
                {item.name}
              </a>
            </li>

            ))}
          </ul>
        </div>

        {/* Right: Icons */}
        <ul className="flex items-center gap-3 ">
          <li><IconButton icon={LuSearch} /></li>
          <li><IconButton icon={RiContactsLine} /></li>
          <li><IconButton icon={LuHeart} hasNoti /></li>
          <li><IconButton icon={RiShoppingBag4Line} hasNoti /></li>
        </ul>
      </div>
    </nav>
  );
}
