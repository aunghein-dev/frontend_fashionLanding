import ProductList from "./ProductList";
import Hero from "@/components/cells/Hero";
import Filter from "./Filter";
import Search from "@/components/atoms/Search";
import PaginationFilter from "@/components/cells/PaginationFilter";


export default function Main() {
  return (
    <main className="flex-1 w-full p-0">
      <div className="mt-[160px]">
         <Hero/>
      </div>
     
      <div className="mt-8
                      max-w-5xl mx-auto">
        <Filter/>
        <div className="flex justify-end mt-6">
          <Search/>
        </div>
        
      </div> 

      <div className="max-w-5xl mx-auto select-none mt-14 mb-14">
        <ProductList/>
      </div>
      <div>
        <PaginationFilter/>
      </div>
    </main>
  )

}