import Hero from "@/components/cells/Hero";
import Search from "@/components/atoms/Search";
import { useRef } from "react";
import Filter from "@/layouts/main/Filter";
import PaginatedProducts from "@/layouts/main/PaginatedProducts";


export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="flex-1 w-full">
      <div className="sm:mt-[160px] mt-[100px]">
         <Hero/>
      </div>
     
      <div className="pt-8 max-w-5xl mx-auto bg-green-400 lg:px-0 px-6"
           ref={scrollRef}>
        <Filter/>
        <div className="flex justify-end mt-6">
          <Search/>
        </div>
        
      </div> 

      <div className="lg:px-0 px-6">
        <PaginatedProducts scrollToTop={scrollToTop}/>
      </div>
      
    </main>
  )
}