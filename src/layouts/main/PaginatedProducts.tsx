import { useEffect, useRef, useState } from "react";
import PaginationFilter from "@/components/cells/PaginationFilter";
import ProductList from "./ProductList";
import { useStocks } from "@/api/hooks/useStocks";

const ITEMS_PER_PAGE = 8;

interface PaginatedProductsProps {
  scrollToTop: () => void;
  searchQuery: string
}
export default function PaginatedProducts({ scrollToTop, searchQuery }: PaginatedProductsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: stocks = [], isLoading, isError } = useStocks();

  // Filter stocks based on search query
  const filteredStocks = stocks.filter(stock =>
    stock.groupName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Recalculate total pages based on filtered results
  const totalPages = Math.ceil(filteredStocks.length / ITEMS_PER_PAGE);

  // Make sure currentPage is not out of bounds when filtering
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
    }
  }, [searchQuery, totalPages]);

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

  if (isError) return <p>Something went wrong</p>;

  return (
    <div ref={scrollRef}>
      <div className="max-w-5xl mx-auto select-none mt-14 mb-14 ">
        {paginatedItems.length === 0 && !isLoading && <p className="font-josefin text-xl ml-3">No items found for 
          <span className="font-lexend">{" "}{searchQuery}</span></p>}
        <ProductList products={paginatedItems} isLoading={isLoading} />
      </div>

      <PaginationFilter
        currentPage={currentPage}
        totalPages={totalPages}
        onNext={handleNext}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
