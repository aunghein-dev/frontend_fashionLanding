import { useEffect, useRef, useState } from "react";
import PaginationFilter from "@/components/cells/PaginationFilter";
import ProductList from "./ProductList";
import { useStocks } from "@/api/hooks/useStocks";

const ITEMS_PER_PAGE = 8;

interface PaginatedProductsProps {
  scrollToTop: () => void;
  searchQuery: string;
  sortOption: "default" | "lowToHigh" | "highToLow";
}

export default function PaginatedProducts({ scrollToTop, searchQuery, sortOption }: PaginatedProductsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: stocks = [], isLoading, isError } = useStocks();

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };



  let filteredStocks = stocks.filter(stock =>
    stock.groupName.toLowerCase().includes(searchQuery.toLowerCase())
  );


  if (sortOption === "lowToHigh") {
    filteredStocks = filteredStocks.sort((a, b) => a.groupUnitPrice - b.groupUnitPrice);
  } else if (sortOption === "highToLow") {
    filteredStocks = filteredStocks.sort((a, b) => b.groupUnitPrice - a.groupUnitPrice);
  }

  
  const totalPages = Math.ceil(filteredStocks.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (currentPage >= totalPages) setCurrentPage(0);
  }, [searchQuery, sortOption, totalPages]);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedItems = filteredStocks.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const handlePageChange = (pageIndex: number) => {
    scrollToTop();
    setCurrentPage(pageIndex);
  };

  if (isError) return <p className="font-josefin px-5">Something went wrong</p>;

  return (
    <div ref={scrollRef}>
      <div className="max-w-5xl mx-auto select-none mt-14 mb-14 ">
        {paginatedItems.length === 0 && !isLoading && (
          <p className="font-josefin text-xl ml-3">
            No items found for <span className="font-lexend">{" "}{searchQuery}</span>
          </p>
        )}
        <ProductList products={paginatedItems} isLoading={isLoading} />
      </div>

      <PaginationFilter
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPrev={handlePrev}
        onPageChange={handlePageChange}
      />

    </div>
  );
}
