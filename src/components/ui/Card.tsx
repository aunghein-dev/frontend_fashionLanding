import type { Stock } from "@/api/hooks/useStocks"
import { Link } from "../typography/Link"

export default function Card( card : Stock) {
  
  return (
    <Link className="h-[330px] 
                    w-[190px] 
                    font-noto"
          to={`/home/${card.groupName}`}>
      <div className="relative">
       
        <img
          src={card.groupImage}
          alt={card.groupName}
          className="w-full h-[190px] object-cover object-center rounded-[1.5rem] select-none"
        />
      </div>
      
      <div className="flex flex-row items-center justify-between gap-1 py-2.5
                      border-b-[1px] border-divider-color text-lg">
          <span
           title={card.groupName}
           className="-tracking-[0.05rem] font-[300] truncate">
              {card.groupName}
          </span>
          <span>
            {card.groupUnitPrice}
          </span>
      </div>
      <div className="flex flex-row items-center gap-1 py-3 mb-3">
        {
          card.items.map(item => (
            <div key={item.itemId} className="flex flex-row items-center gap-1">
              <div className="w-5 h-5 rounded-full ring-[0.5px] ring-gray-300" style={{backgroundColor: item.itemColorHex}}></div>
            </div>
          ))
        }
      </div>
      <button className="font-roboto text-[0.65rem] tracking-[0.3rem] p-2.5 bg-hero-bg text-white
                         font-[300] flex flex-row items-center justify-center w-full">ADD TO CART</button>
     
    </Link>
  )
}
