import FilterNotiShown from "@/components/molecules/FilterNotiShown";
import Selector from "@/components/typography/Selector";
import ProductList from "./ProductList";


export default function Main() {
  return (
    <main className="flex-1 w-full p-0 overflow-auto">
      <img src="src/assets/hero/hero.jpg" alt="hero"
           className="w-full h-[460px] object-cover object-top select-none" />
      <section>
        <div className="mt-8
                        max-w-5xl mx-auto px-4
                        between">
            <div className="flex flex-row items-center justify-between relative gap-4">
              <FilterNotiShown/>
              <div className="relative flex flex-row items-center gap-1">
                <Selector header="Categories" options={[
                  "Pajamas","Dresses","Trousers","Shoes","Accessories"
                ]} />
                <Selector header="Color" options={[
                  "Blue","Grey","Red","Yellow"
                ]} />
                <Selector header="Brand" options={[
                  "Sisters","March","GYI","Forever"
                ]} />
                 <Selector header="Price" options={[
                  "$0 - $50","$50 - $100","$100 - $150","$150 - $200"
                ]} />
              </div>
           
            </div>
            <div>
               <div className="relative flex flex-row items-center gap-1">
                <Selector header="Default Sorting" options={[
                  "Best Selling","New Arrivals","Price: Low to High","Price: High to Low"
                ]} />
                </div>
            </div>
        </div>
        <div className="max-w-5xl mx-auto mt-6 select-none mb-10">
          <ProductList/>
        </div>
      </section>
    </main>
  )

}