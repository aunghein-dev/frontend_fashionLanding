import type { Stock } from "@/api/hooks/useStocks";
import Card from "@/components/ui/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TopSellersProductsList() {
  const skeletons = Array.from({ length: 4 });
  const BIZID = import.meta.env.VITE_BUSINESS_ID;
  const API = import.meta.env.VITE_API;
  const [products, setProducts] = useState<Stock[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTopSellers = async () => {
      try {
        const res = await axios.get(`${API}/public/mo/v1/top-sellers/${BIZID}`);
        if (Array.isArray(res.data)) {
          setProducts(res.data as Stock[]);
        } else {
          setProducts([]);
        }
      } catch (err) {
        console.error("Top sellers fetch error:", err);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTopSellers();
  }, [API, BIZID]);

  return (
    <div className="grid gap-3 sm:gap-6
                    grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-4
                    2xl:grid-cols-5
                    px-0 sm:px-0">
      {isLoading ? (
        skeletons.map((_, idx) => (
          <div key={idx} className="w-full max-w-[450px] min-w-[175px] flex flex-col animate-pulse">
            <div className="w-full aspect-[4/5] bg-gray-200 rounded-md" />
            <div className="p-3 mt-2">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        ))
      ) : products.length > 0 ? (
        products.map((prod) => <Card key={prod.groupId} {...prod} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No top sellers yet</p>
      )}
    </div>
  );
}
