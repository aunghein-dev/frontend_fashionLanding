import NavbarData from "@/data/navbar.data"
import { Link } from "../typography/Link";

export default function Navbar() {

  return (
    <nav className="bg-base h-[100px] sm:h-[160px] sm:mx-auto px-6 fixed top-0 left-0 right-0 z-[1000] border-b-[1px] border-gray-300/30 -mx-1">
      <div className="flex items-center justify-between h-full max-w-5xl mx-auto ">
          <span className="font-noto font-[700] text-[1.1rem] sm:text-[2rem] cursor-pointer
                           min-w-[105px] hidden sm:block">Swe Trendy Hub</span>
          <img src="src/assets/onlylogo.png" alt="" 
            className="h-12 w-12 sm:h-16 sm:w-16 block sm:hidden"
          />
          <ul className="flex gap-1 sm:text-base sm:text-sm text-xs">
            {NavbarData.map((item) => (
            <li
              key={item.id}
              className="navlink w-full sm:min-w-[95px] min-w-[70px]  select-none text-center"
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