import NavbarData from "@/data/navbar.data"
import { Link } from "../typography/Link";

export default function Navbar() {

  return (
    <nav className="bg-base h-[100px] sm:h-[160px] mx-auto px-6 fixed top-0 left-0 right-0 z-[1000] border-b-[1px] border-gray-300/30">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto">
        {/* Left: Logo + Links */}
        
          {/* Corrected: "font-noto" is now a single class */}
          <span className="font-noto font-[700] text-[2.2rem] sm:text-[3rem] sm:mr-6 mr-2 cursor-pointer pb-2
                           min-w-[105px]">Mo Mo</span>
          <ul className="flex gap-1 sm:text-base text-sm">
            {NavbarData.map((item) => (
            <li
              key={item.id}
              className="navlink w-full sm:min-w-[95px] min-w-[70px] select-none text-center"
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


        {/* Right: Icons 
        <ul className="flex flex-row justify-center text-center items-center gap-4">
          <li><IconButton icon={IoBagHandle} hasNoti /></li>
          <li className="pt-1"><IconButton icon={IoMdContact} /></li>
        </ul>
        */}
      </div>
    </nav>
  );
}