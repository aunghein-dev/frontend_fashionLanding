import PaginatedProducts from "@/layouts/main/PaginatedProducts";


interface Props {
  scrollToTop: () => void;
  searchQuery: string;
}

export default function NewArrivals({ scrollToTop, searchQuery }: Props) {
  return (
    <div className="flex-1 w-full
                    mt-[120px] sm:mt-[180px] mb-[20px] sm:mb-[20px] max-w-5xl mx-auto
                    lg:px-0 ">

        {/* Center text */}
        <span className="px-4 text-black-color text-2xl sm:text-3xl font-marcellus 
                         flex items-center justify-center h-[200px]">
          New Arrivals
        </span>

       
      <div className="px-4 lg:px-0">
        <PaginatedProducts scrollToTop={scrollToTop} searchQuery={searchQuery} />
      </div>

    </div>
  );
}