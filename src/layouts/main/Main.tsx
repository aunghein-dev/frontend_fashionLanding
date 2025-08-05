import FilterNotiShown from "@/components/molecules/FilterNotiShown";
import Selector from "@/components/typography/Selector";
import ProductList from "./ProductList";
import Hero from "@/components/cells/Hero";


export default function Main() {
  return (
    <main className="flex-1 w-full p-0">
      <div className="mt-[160px]">
         <Hero/>
      </div>
     
      <div className="max-w-5xl mx-auto select-none mt-14 mb-14">
        <ProductList/>
      </div>
    </main>
  )

}