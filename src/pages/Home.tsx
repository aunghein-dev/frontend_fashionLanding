import { useRef } from "react";
import Hero from "@/components/cells/Hero";
import Filter from "@/layouts/main/Filter";
import PaginatedProducts from "@/layouts/main/PaginatedProducts";
import BestSellerHero from "@/components/cells/BestSellerHero";
import TopSellersProductsList from "@/layouts/main/TopSellersProductsList";

interface Props {
  searchQuery: string;
  sortOption: "default" | "lowToHigh" | "highToLow";
  setSortOption: (option: "default" | "lowToHigh" | "highToLow") => void;
}

export default function Home({ searchQuery, sortOption, setSortOption }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  // New filter state
  

  return (
    <main className="flex-1 w-full mt-[100px]">
      <Hero />

      <div className="pt-8 max-w-5xl mx-auto lg:px-0 px-6" ref={scrollRef}>
        <Filter sortOption={sortOption} setSortOption={setSortOption} />
      </div>

      <div className="px-4 lg:px-0">
        <PaginatedProducts
          scrollToTop={scrollToTop}
          searchQuery={searchQuery}
          sortOption={sortOption}
        />
      </div>

      <BestSellerHero />

      <div className="max-w-5xl mx-auto select-none mt-5 mb-14 px-4">
        <TopSellersProductsList />
      </div>
    </main>
  );
}
