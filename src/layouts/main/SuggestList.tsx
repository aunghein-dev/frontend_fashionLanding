import { useSuggestedStocks } from "@/api/hooks/useStocks";
import ProductList from "./ProductList";

interface SuggestListProps {
  groupId: number;
}

export default function SuggestList({ groupId }: SuggestListProps) {
  const { data: stocks = [], isLoading } = useSuggestedStocks(groupId);

  return (
    <div>
      {/* Header */}
      <div className="relative flex items-center sm:mt-[40px] mb-[30px] select-none">
        <div className="flex-grow border-b border-red-300"></div>
        <span className="px-4 text-black-color text-2xl sm:text-3xl font-marcellus">
          Suggest Items
        </span>
        <div className="flex-grow border-b border-red-200"></div>
      </div>

      {/* Loading skeleton */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div
              key={idx}
              className="w-full aspect-[4/5] bg-gray-200 animate-pulse rounded-md"
            />
          ))}
        </div>
      ) : stocks.length === 0 ? (
        <p className="font-josefin text-xl"></p>
      ) : (
        <ProductList products={stocks} />
      )}
    </div>
  );
}
