import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SelectItem } from "./SelectItem"

type SelectorProps = {
  header: string,
  options: string[]
}

export default function Selector({ header, options }: SelectorProps) {
  return (
    <Select>
      <SelectTrigger className="w-auto between border-none shadow-none select-none gap-2">
        <SelectValue placeholder={header} />
      </SelectTrigger>

      {/* FIX: Add position="popper" and z-50 */}
      <SelectContent position="popper" className="border-none z-50">
        <SelectGroup>
          <SelectLabel>{header}</SelectLabel>
          {options.map((option, index) => (
            <SelectItem
              key={option + index}
              value={option}
              className="text-sm px-2 mt-1 
                         focus:outline-none cursor-pointer 
                         data-[state=checked]:font-bold"
            >
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
