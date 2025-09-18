import { useMemo } from "react";
import namer from "color-namer";
import { ColorRender } from "@/components/ui/ColorRender";
import type { Stock } from "@/api/hooks/useStocks";

interface ProductInfoDetailsProps {
  product: Pick<Stock, "groupName" | "groupUnitPrice" | "items">;
  selectedHex: string | null;
  setSelectedHex: React.Dispatch<React.SetStateAction<string | null>>;
  selectedAvailableQty: number | null;
  display: (price: number) => string;
}

export function ProductInfoDetails({
  product,
  selectedHex,
  setSelectedHex,
  selectedAvailableQty,
  display,
}: ProductInfoDetailsProps) {
  const selectedColorName = useMemo(
    () => (selectedHex ? namer(selectedHex).ntc[0].name : ""),
    [selectedHex]
  );

  return (
    <div className="flex flex-col justify-start gap-y-6 sm:mt-0 px-2 sm:px-0">
      {/* Name */}
      <span className="font-lexend text-[clamp(1.8rem,4vw,2.5rem)] leading-tight text-black-color">
        {product.groupName}
      </span>
      {/* Price */}
      <span className="font-lexend text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#08080880] mb-8">
        {display(product.groupUnitPrice)}
      </span>

      {/* Color selector */}
      <div className="flex flex-col gap-y-3">
        <span className="font-josefin text-gray-400 mb-3">
          Color <span className="font-lexend text-sm text-black-color">{selectedColorName ? ': ' : ''} {selectedColorName}</span>
        </span>
        <ColorRender
          items={product.items}
          setSelectedHex={setSelectedHex}
          selectedHex={selectedHex}
        />
      </div>

      {/* Quantity */}
      <div>
        <span className="font-josefin text-gray-400">Available Quantity </span>
        <span className="font-lexend text-black-color">{selectedAvailableQty ? ': ' : ''}{selectedAvailableQty ?? ""}</span>
      </div>

      {/* Clear button */}

      <div className="min-h-[40px]">
        {selectedHex && (
        <button
          onClick={() => setSelectedHex(null)}
          className="px-2 py-1 rounded-md bg-red-50 text-red-500 text-xs hover:bg-red-100 transition self-start"
        >
          Clear
        </button>
      )}
      </div>
      
    </div>
  );
}
