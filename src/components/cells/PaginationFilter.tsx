import { LuArrowRight, LuArrowLeft } from "react-icons/lu";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPageChange: (pageIndex: number) => void;
  onPrev: () => void;
}

export default function PaginationFilter({
  currentPage,
  totalPages,
  onNext,
  onPageChange,
  onPrev,
}: PaginationProps) {
  const active =
    "bg-black-color text-white-color px-4 py-2 rounded-full cursor-pointer";
  const inactive =
    "px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-full transition";

  // Helper to generate page numbers with "..." like Pornhub
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      // Show all if few pages
      for (let i = 0; i < totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage > 2) {
        pages.push(0); // always show first
        if (currentPage > 3) pages.push("…"); // add ellipsis
      }

      const start = Math.max(0, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 3) {
        pages.push("…");
        pages.push(totalPages - 1); // always show last
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center py-5 gap-5">
      {/* Prev button */}
      <button
        onClick={onPrev}
        disabled={currentPage <= 0}
        className={`p-2 rounded-full ${
          currentPage <= 0
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        <LuArrowLeft className="h-6 w-6" />
      </button>

      <ul className="flex flex-row gap-2">
        {getPageNumbers().map((page, idx) =>
          typeof page === "number" ? (
            <li
              key={idx}
              onClick={() => onPageChange(page)}
              className={page === currentPage ? active : inactive}
            >
              {page + 1}
            </li>
          ) : (
            <li key={idx} className="px-2 select-none">
              {page}
            </li>
          )
        )}
      </ul>

      {/* Next button */}
      <button
        onClick={onNext}
        disabled={currentPage >= totalPages - 1}
        className={`p-2 rounded-full ${
          currentPage >= totalPages - 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-200"
        }`}
      >
        <LuArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
