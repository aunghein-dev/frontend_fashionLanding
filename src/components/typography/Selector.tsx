import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectItem } from "./SelectItem"

type extraClass = {
  holderClass?: string,
  itemClass?: string
}

type SelectorProps = {
  header: string,
  options: string[],
  className?: extraClass
}

export default function Selector({ header, options, className }: SelectorProps) {

  const holderClass = className?.holderClass ? className.holderClass : ""
  const itemClass = className?.itemClass ? className?.itemClass : ""

  return (
    <Select>
      <SelectTrigger className={`w-auto between border-none 
                                shadow-none select-none gap-2 ${holderClass} 
                                focus:outline-none focus:ring-0 `}>
        <SelectValue placeholder={header} />
      </SelectTrigger>

      {/* FIX: Add position="popper" and z-50 */}
      <SelectContent position="popper" className={`border-none z-50 ${itemClass} rounded-[2px]
                                                   bg-white/90`}>
        <SelectGroup className="tracking-[0.2rem]">
          <SelectLabel>{header}</SelectLabel>
          {options.map((option, index) => (
            <SelectItem
              key={option + index}
              value={option}
              className={`text-sm px-2 my-2 font-[300]
                         focus:outline-none cursor-pointer 
                         data-[state=checked]:font-bold ${itemClass}`}
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
