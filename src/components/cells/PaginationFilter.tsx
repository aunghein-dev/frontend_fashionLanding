import { LuArrowRight } from "react-icons/lu";

export default function PaginationFilter() {



  return(
    <div className="flex items-center justify-center py-5 gap-5">
      <ul className="flex flex-row gap-4">
        <li className="bg-black-color text-white-color px-4 py-2 rounded-full">1</li>
        <li className="p-2">2</li>
        <li className="p-2">3</li>
        <li className="p-2">4</li>
      </ul>
      <button><LuArrowRight className="h-6 w-6"/></button>
    </div>
  )
} 