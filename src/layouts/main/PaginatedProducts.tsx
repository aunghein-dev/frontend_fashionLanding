import { useRef, useState } from "react";
import Products from "@/data/product.data";
import PaginationFilter from "@/components/cells/PaginationFilter";
import ProductList from "./ProductList";

const ITEMS_PER_PAGE = 8;

interface PaginatedProductsProps {
  scrollToTop: () => void;
}

export default function PaginatedProducts({ scrollToTop }: PaginatedProductsProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(Products.length / ITEMS_PER_PAGE);
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const paginatedItems = Products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePageChange = (pageIndex: number) => {
    scrollToTop();
    setCurrentPage(pageIndex);
  };

  return (
    <div ref={scrollRef}>
      <div className="max-w-5xl mx-auto select-none mt-14 mb-14">
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
