import type { Stock } from "@/api/hooks/useStocks";
import { Link } from "../typography/Link";
import { useCurrency } from "@/api/hooks/useCurrency";

export default function Card(card: Stock) {

  const { display } = useCurrency();
  return (
    <Link
        to={`/home/${card.groupName}`}
        className="group w-full max-w-[450px] min-w-[175px]
                  overflow-hidden
                  transition-transform duration-300 ease-in-out
                  hover:scale-104 
                  flex flex-col"
      >
        {/* Image */}
        <div className="w-full aspect-[4/5] overflow-hidden"> 
          <img
            src={card.groupImage || "/src/assets/noFound.webp"}
            alt={card.groupName}
            className="w-full h-full object-cover object-center
                      transition-transform duration-300 ease-in-out
                      group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="p-3 mt-auto">
          <h2 className="text-lg font-josefin text-gray-700">{card.groupName}</h2>
          <span className="text-md font-josefin text-gray-700">{display(card.groupUnitPrice)}</span>
        </div>
    </Link>
  );
}
