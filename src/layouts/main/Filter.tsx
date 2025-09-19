import Selector from "@/components/typography/Selector";

interface FilterProps {
  sortOption: "default" | "lowToHigh" | "highToLow";
  setSortOption: (option: "default" | "lowToHigh" | "highToLow") => void;
}

const Filter = ({ sortOption, setSortOption }: FilterProps) => {
  return (
    <div className="tracking-[0.2rem] flex-wrap gap-4 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-start relative gap-5"> 
        <div className="relative flex flex-row items-center gap-1">
          <Selector
            header="Sort By"
            options={["Default", "Price: Low to High", "Price: High to Low"]}
            value={sortOption === "default" ? "Default" : sortOption === "lowToHigh" ? "Price: Low to High" : "Price: High to Low"} 
            onChange={(value) => {
              if (value === "Price: Low to High") setSortOption("lowToHigh");
              else if (value === "Price: High to Low") setSortOption("highToLow");
              else setSortOption("default");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
