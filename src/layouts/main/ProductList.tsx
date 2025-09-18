import type { Stock } from "@/api/hooks/useStocks";
import Card from "@/components/ui/Card";

interface ProductListProps {
  products: Stock[];
  isLoading?: boolean;
}

export default function ProductList({ products, isLoading = false }: ProductListProps) {
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="grid gap-3 sm:gap-6
                    grid-cols-2
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-4
                    2xl:grid-cols-5
                    px-0 sm:px-0">
      {isLoading
        ? skeletons.map((_, idx) => (
            <div key={idx} className="w-full max-w-[450px] min-w-[175px] flex flex-col animate-pulse">
              {/* Image skeleton */}
              <div className="w-full aspect-[4/5] bg-gray-200 rounded-md" />
              {/* Text skeleton */}
              <div className="p-3 mt-2">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))
        : products.map((prod) => <Card key={prod.groupId} {...prod} />)}
    </div>
  );
}
