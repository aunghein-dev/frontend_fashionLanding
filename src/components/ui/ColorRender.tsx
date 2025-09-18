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
    <div className="flex gap-3">
      {items?.map((item: Item) => {
        const isSelected = item.itemColorHex === selectedHex;
        const isOutOfStock = item.itemQuantity === 0;

        return (
          <div key={item.itemId} className="relative group">
            <div
              onClick={() => !isOutOfStock && setSelectedHex(item.itemColorHex)}
              role="button"
              aria-label={
                isOutOfStock
                  ? `${item.itemColorHex} (Out of Stock)`
                  : `${item.itemColorHex} (In Stock)`
              }
              className={`
                relative w-8 h-8 rounded-full border border-gray-300
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                ${!isOutOfStock ? "cursor-pointer hover:ring-2 hover:ring-offset-1 hover:ring-gray-400 hover:scale-110" : "cursor-not-allowed opacity-50"}
                ${isSelected && !isOutOfStock ? "ring-2 ring-offset-2 ring-[#080808e1] shadow-lg" : ""}
              `}
              style={{ backgroundColor: item.itemColorHex }}
            >
              {isSelected && !isOutOfStock && (
                <FaCheck
                  className="w-4 h-4 pointer-events-none"
                  style={{ color: getContrastColor(item.itemColorHex) }}
                />
              )}

              {isOutOfStock && (
                <div className="absolute inset-0 rounded-full pointer-events-none">
                  <span className="absolute top-1/2 left-0 w-full h-[2px] bg-white rotate-45 opacity-70" />
                </div>
              )}
            </div>

            {isOutOfStock && (
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 
                               px-2 py-1 text-xs rounded bg-black/60 text-white opacity-0 
                               w-[90px] text-center
                               group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Out of Stock
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};
