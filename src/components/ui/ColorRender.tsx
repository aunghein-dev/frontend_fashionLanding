import type { Item } from "@/api/hooks/useStocks";
import { FaCheck } from "react-icons/fa6";

interface ColorRenderProps {
  items: Item[];
  selectedHex: string | null;
  setSelectedHex: React.Dispatch<React.SetStateAction<string | null>>;
}

function getContrastColor(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? "#000000" : "#FFFFFF";
}

export const ColorRender = ({ items, setSelectedHex, selectedHex }: ColorRenderProps) => {
  return (
    <div className="flex gap-2">
      {items?.map((item: Item) => {
        const isSelected = item.itemColorHex === selectedHex;
        return (
          <div
            onClick={() => setSelectedHex(item.itemColorHex)}
            key={item.itemId}
            className={`relative w-7 h-7 rounded-full border border-gray-300
                       cursor-pointer  
                       transition-all transition-ring duration-500 ease-in-out ring-offset-1
                       ${isSelected ? "ring-2 ring-[#080808e1]" : "hover:ring-[3px] hover:ring-[#08080834]"}`}
            style={{ backgroundColor: item.itemColorHex }}
          >
            {isSelected && (
              <FaCheck
                className="absolute inset-0 m-auto w-4 h-4 pointer-events-none"
                style={{
                  color: getContrastColor(item.itemColorHex),
                  strokeWidth: 0,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
