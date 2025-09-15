import { useEffect, useRef, useState } from "react";
import PaginationFilter from "@/components/cells/PaginationFilter";
import ProductList from "./ProductList";
import { useStocks } from "@/api/hooks/useStocks";

const ITEMS_PER_PAGE = 8;

interface PaginatedProductsProps {
  scrollToTop: () => void;
}

export default function PaginatedProducts({ scrollToTop }: PaginatedProductsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { data: stocks = [], isLoading, isError } = useStocks();

  const totalPages = Math.ceil(stocks.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedItems = stocks.slice(startIndex, startIndex + ITEMS_PER_PAGE);


  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(()  => {
    console.log(stocks);
    
  },[])

  const handlePageChange = (pageIndex: number) => {
    scrollToTop();
    setCurrentPage(pageIndex);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div ref={scrollRef}>
      <div className="max-w-5xl mx-auto select-none mt-14 mb-14">
        {/* ✅ Pass as props object, not spread */}
        <ProductList products={paginatedItems} />
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
