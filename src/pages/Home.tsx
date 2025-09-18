import Hero from "@/components/cells/Hero";
import Filter from "@/layouts/main/Filter";
import PaginatedProducts from "@/layouts/main/PaginatedProducts";
import BestSellerHero from "@/components/cells/BestSellerHero";
import TopSellersProductsList from "@/layouts/main/TopSellersProductsList";
import { useRef } from "react";

interface Props {
  searchQuery: string;
}

export default function Home({ searchQuery }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>

      <main className="flex-1 w-full mt-[100px]">
        <Hero />

        <div className="pt-8 max-w-5xl mx-auto lg:px-0 px-6" ref={scrollRef}>
          <Filter />
        </div>

        <div className="px-4 lg:px-0">
          <PaginatedProducts scrollToTop={scrollToTop} searchQuery={searchQuery} />
        </div>

        <BestSellerHero />

        <div className="max-w-5xl mx-auto select-none mt-5 mb-14 px-4">
          <TopSellersProductsList />
        </div>
        
      </main>
    </>
  );
}
