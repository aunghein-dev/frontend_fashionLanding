import { useStocks } from "@/api/hooks/useStocks";
import { ColorRender } from "@/components/ui/ColorRender";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import namer from "color-namer";
import { useCurrency } from "@/api/hooks/useCurrency";

export default function ProductInfo() {
  const { slug } = useParams();
  const { data: stocks = [], isLoading } = useStocks();
  const product = stocks.find((prod) => prod.groupName === slug);
  const [selectedHex, setSelectedHex] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { display } = useCurrency();  

  const images = product
    ? [product.groupImage, ...product.items.map((item) => item.itemImage)]
        .filter(image => image && image.startsWith('https://'))
    : [];
  
  useEffect(() => {
    if (images.length > 0) setActiveIndex(0);
  }, [product]);

  if (!product) return <div className="flex-1 w-full max-w-[90vw] lg:max-w-6xl mx-auto 
                           mt-[120px] sm:mt-[180px] mb-[20px] sm:mb-[20px] max-h-[550px]
                           grid grid-cols-1 sm:grid-cols-2 gap-10 items-cente aspect-[4/5]">Product not found</div>;

  const selectedAvailableQty = product.items.find(
    (item) => item.itemColorHex === selectedHex
  )?.itemQuantity;


  if(isLoading) {
    return <div className="flex-1 w-full max-w-[90vw] lg:max-w-6xl mx-auto 
                           mt-[120px] sm:mt-[180px] mb-[20px] sm:mb-[20px]
                           grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-h-[550px]">
                <div className="relative w-full aspect-[4/5] max-w-[450px] overflow-hidden">
                 <span>Loading...</span>
                </div>
           </div>
  }

  return (
    <div className="flex-1 w-full
                    mt-[120px] sm:mt-[180px] mb-[20px] sm:mb-[20px] max-w-5xl mx-auto
                    lg:px-0 px-6">
      
      {/* Responsive grid: image + info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start sm:items-center">
        
        {/* Image + slider */}
        <div className="flex flex-col w-full">
          <div className="relative w-full aspect-[4/5] max-h-[550px] max-w-[450px] overflow-hidden">
            <img
              key={activeIndex}
              src={images[activeIndex] || "/src/assets/noFound.webp"}
              alt={product.groupName}
              title={product.groupName}
              className="w-full h-full object-cover object-center select-none
                         transition-opacity duration-700 ease-in-out opacity-0
                         animate-[fadeIn_0.7s_ease-in-out_forwards]"
            />
          </div>
          <div className="mt-2">
            <ImageSlider 
              images={images} 
              activeIndex={activeIndex} 
              setActiveIndex={setActiveIndex} 
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-start gap-y-6 sm:mt-0 px-2 sm:px-0">
          <span className="font-lexend text-[clamp(1.8rem,4vw,2.5rem)] leading-tight">
            {product.groupName}
          </span>
          <span className="font-lexend text-[clamp(1.2rem,2.5vw,1.8rem)] text-[#08080880]">
            {display(product.groupUnitPrice)}
          </span>

          {/* Color selector */}
          <div className="flex flex-col gap-y-3">
            <span>
              <span className="font-josefin">Color </span>
              <span className="font-lexend text-sm">
                : {selectedHex ? namer(selectedHex).ntc[0].name : ""}
              </span>
            </span>
            <ColorRender 
              items={product.items} 
              setSelectedHex={setSelectedHex} 
              selectedHex={selectedHex}
            />
          </div>

          {/* Quantity */}
          <div className="">
            <span className="font-josefin">Available Quantity </span>
            <span className="font-lexend">: {selectedAvailableQty ?? "-"}</span>
          </div>

          {/* Clear button */}
          <div className="min-h-[40px]">
            {selectedHex && (
              <button 
                onClick={() => setSelectedHex(null)}
                className="text-red-500 text-xs hover:text-gray-600 transition-colors"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
