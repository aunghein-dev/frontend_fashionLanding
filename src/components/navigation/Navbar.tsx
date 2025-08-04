import NavbarData from "@/data/navbar.data"
import IconButton from "../typography/IconButton";
import { IoBagHandle } from "react-icons/io5";
import { Link } from "../typography/Link";
import { IoMdContact } from "react-icons/io";
export default function Navbar() {

  return (
    <nav className="bg-base h-[160px] mx-auto px-6 fixed top-0 left-0 right-0 z-[1000]">

      <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
        {/* Left: Logo + Links */}
        <div className="flex flex-row justify-center text-center items-center gap-6">
          {/* Corrected: "font-noto" is now a single class */}
          <span className="font-noto font-[500] text-5xl mr-6 cursor-pointer">Mo Mo</span>
          <ul className="flex gap-1 text-base">
            {NavbarData.map((item) => (
            <li
              key={item.id}
              className="navlink w-full min-w-[95px] select-none text-center"
            >
              <Link
                to={item.path}
                className="relative z-10"
                activeClassName="font-[600]"
              >
                {item.name}
              </Link>
            </li>

            ))}
          </ul>
        </div>

        {/* Right: Icons */}
        <ul className="flex flex-row justify-center text-center items-center gap-5">
          <li><IconButton icon={IoBagHandle} hasNoti /></li>
          <li><IconButton icon={IoMdContact} /></li>
        </ul>
      </div>
    </nav>
  );
}