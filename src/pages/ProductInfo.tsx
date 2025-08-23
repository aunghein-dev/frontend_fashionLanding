import { useStocks } from "@/api/hooks/useStocks";
import { useParams } from "react-router-dom";

export default function ProductInfo() {
   const { slug } = useParams();

  const { data: stocks = [] } = useStocks();
   const product = stocks.find(prod => prod.groupName === slug);
  
   return (
      <div className="flex-1 max-w-5xl mx-auto p-0 mt-[160px]
                      flex py-8 gap-5 font-noto">
         <img src={product?.groupImage} alt={product?.groupName} title={product?.groupName}
              className="w-[380px] h-[460px] object-cover object-center select-none"/>
         <div className="flex flex-col justify-center">
            <span className="text-3xl">{product?.groupName}</span>
            <span>{product?.groupUnitPrice}</span>
         </div>
      </div>
   )
}