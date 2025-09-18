import BestSellerHero from "@/components/cells/BestSellerHero";
import TopSellersProductsList from "@/layouts/main/TopSellersProductsList";

export default function BestSellers() {
  return (
    <div className="sm:mt-[100px] -mt-[20px]">
      <BestSellerHero />
      <div className="max-w-5xl mx-auto select-none mt-5 mb-14 px-4">
        <TopSellersProductsList />
      </div>
    </div>
  )
}