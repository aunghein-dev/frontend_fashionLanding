import FilterNotiShown from "@/components/molecules/FilterNotiShown"
import Selector from "@/components/typography/Selector"

const Filter = () => {
  return (
    <div className="mt-8
                        max-w-5xl mx-auto px-4
                        between">
    {/* The fix is in this line: changed justify-between to justify-start */}
    <div className="flex flex-row items-center justify-start relative gap-4"> 
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
  )
}