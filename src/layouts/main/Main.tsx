import Hero from "@/components/cells/Hero";
import Filter from "./Filter";
import Search from "@/components/atoms/Search";
import PaginatedProducts from "./PaginatedProducts";
import { useRef } from "react";


export default function Main() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="flex-1 w-full p-0">
      <div className="mt-[160px]">
         <Hero/>
      </div>
     
      <div className="pt-8 max-w-5xl mx-auto"
           ref={scrollRef}>
        <Filter/>
        <div className="flex justify-end mt-6">
          <Search/>
        </div>
        
      </div> 

      
      <PaginatedProducts scrollToTop={scrollToTop}/>
    </main>
  )

}