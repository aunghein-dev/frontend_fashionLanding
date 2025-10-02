import { useStocks } from "@/api/hooks/useStocks";
//import { ColorRender } from "@/components/ui/ColorRender";
import { ImageSlider } from "@/components/ui/ImageSlider";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import namer from "color-namer";
import { useCurrency } from "@/api/hooks/useCurrency";
import { ProductInfoDetails } from "@/layouts/main/ProdInfoLayout";
import SuggestList from "@/layouts/main/SuggestList";

export default function ProductInfo() {
  const { slug } = useParams();
  const { data: stocks = [], isLoading } = useStocks();
  const { display } = useCurrency();

  const product = stocks.find((prod) => prod.groupName === slug);
  const [selectedHex, setSelectedHex] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = product
    ? [product.groupImage, ...product.items.map((item) => item.itemImage)]
        .filter((image) => image && image.startsWith("https://"))
    : [];


  useEffect(() => {
    if (images.length > 0) setActiveIndex(0);
  }, [product]); 


  useEffect(() => {
    setSelectedHex(null);
  }, [product]); 

  const selectedAvailableQty =
    product?.items.find((item) => item.itemColorHex === selectedHex)
      ?.itemQuantity ?? null;


  if (isLoading) {
    return (
      <div className="flex-1 w-full max-w-[90vw] lg:max-w-6xl mx-auto mt-[120px] sm:mt-[180px] mb-[20px] sm:mb-[20px] grid grid-cols-1 sm:grid-cols-2 gap-10 items-center max-h-[550px]">
        <div className="relative w-full aspect-[4/5] max-w-[450px] overflow-hidden">
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex-1 w-full max-w-[90vw] lg:max-w-6xl mx-auto mt-[120px] sm:mt-[180px] mb-[20px] sm:mb-[20px] max-h-[550px] grid grid-cols-1 sm:grid-cols-2 gap-10 items-center aspect-[4/5] font-josefin px-6">
        Product not found
      </div>
    );
  }

  return (
    <div className="flex-1 w-full mt-[85px] sm:mt-[120px] mb-[20px] sm:mb-[20px] max-w-5xl mx-auto lg:px-0 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-start sm:items-center">
        <div className="flex flex-col w-full">
          <div className="relative w-full aspect-[4/5] max-h-[550px] max-w-[450px] overflow-hidden">
            <img
              key={activeIndex}
              src={images[activeIndex] || "/src/assets/noFound.webp"}
              alt={product.groupName}
              title={product.groupName}
              className="w-full h-full object-cover object-center select-none transition-opacity duration-700 ease-in-out opacity-0 animate-[fadeIn_0.7s_ease-in-out_forwards]"
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

        <ProductInfoDetails
          product={product}
          selectedHex={selectedHex}
          setSelectedHex={setSelectedHex}
          selectedAvailableQty={selectedAvailableQty}
          display={display}
        />
      </div>

      <div>
        <SuggestList groupId={product.groupId} />
      </div>
    </div>
  );
}
