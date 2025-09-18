//import Search from "@/components/atoms/Search"
//import FilterNotiShown from "@/components/molecules/FilterNotiShown"
import Selector from "@/components/typography/Selector"

const Filter = () => {
  return (
    <div className="tracking-[0.2rem] flex-wrap gap-4 flex flex-row items-center justify-between">
    <div className="flex flex-row items-center justify-start relative gap-5"> 
      <div className="relative flex flex-row items-center gap-1">
        <Selector header="Default Sorting" options={[
              "Best Selling","New Arrivals","Price: Low to High","Price: High to Low"
            ]} />
      </div>
    </div>
    </div>
  )
}

export default Filter