import { LuArrowRight } from "react-icons/lu";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPageChange: (pageIndex: number) => void; 
}


export default function PaginationFilter({
  currentPage,
  totalPages,
  onNext,
  onPageChange,
}: PaginationProps) {
  const active = "bg-black-color text-white-color px-4 py-2 rounded-full cursor-pointer";
  const inactive = "px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-full transition";

  return (
    <div className="flex items-center justify-center py-5 gap-5">
      <ul className="flex flex-row gap-4">
        {[...Array(totalPages)].map((_, index) => (
          <li
            key={index}
            onClick={() => onPageChange(index)}
            className={index === currentPage ? active : inactive}
          >
            {index + 1}
          </li>
        ))}
      </ul>

      <button
        onClick={onNext}
        disabled={currentPage >= totalPages - 1}
        className={`p-2 rounded-full ${
          currentPage >= totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
      >
        <LuArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
}
