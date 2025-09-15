import Search from "@/components/atoms/Search"
import FilterNotiShown from "@/components/molecules/FilterNotiShown"
import Selector from "@/components/typography/Selector"

const Filter = () => {
  return (
    <div className="between tracking-[0.2rem]">
    {/* The fix is in this line: changed justify-between to justify-start */}
    <div className="flex flex-row items-center justify-start relative gap-5"> 
      {/*<FilterNotiShown/>*/}
      <div className="relative flex flex-row items-center gap-1">
       {/*} <Selector header="Categories" options={[
          "Pajamas","Dresses","Trousers","Shoes","Accessories"
        ]} />*/}
        {/*<Selector header="Brand" options={[
          "Sisters","March","GYI","Forever"
        ]} />*/}
         {/*} <Selector header="Price" options={[
          "< 10,000","10,000 - 30,000","30,000 - 50,000","> 50,000"
        ]} />*/}
        <Selector header="Default Sorting" options={[
              "Best Selling","New Arrivals","Price: Low to High","Price: High to Low"
            ]} />
      </div>
    
    </div>
        <div>
            <div className="relative flex flex-row items-center gap-1">
            <Search/>
            </div>
        </div>
    </div>
  )
}

export default Filter