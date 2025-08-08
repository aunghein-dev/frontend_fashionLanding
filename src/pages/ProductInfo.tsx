import { useParams } from "react-router-dom";
import Products from "@/data/product.data";



export default function ProductInfo() {
   const { slug } = useParams();
   const product = Products.find(prod => prod.name === slug);
  
   return (
      <div className="flex-1 max-w-5xl mx-auto p-0 mt-[160px]
                      flex py-8 gap-5 font-noto">
         <img src={product?.imgUrl} alt={product?.name} title={product?.name}
              className="w-[380px] h-[460px] object-cover object-center select-none"/>
         <div className="flex flex-col justify-center">
            <span className="text-3xl">{product?.name}</span>
            <span>{product?.displayPrice}</span>
         </div>
      </div>
   )
}