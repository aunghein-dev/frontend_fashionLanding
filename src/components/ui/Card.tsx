import { Link } from "../typography/Link"

interface Color {
   id: number,
   hex: string,
   qty: number,
   price: number
}

interface CardProps {
  card: {
    imgUrl: string 
    name: string
    displayPrice: number
    colors: Color[]
  }
}

export default function Card({ card }: CardProps) {
  
  return (
    <Link className="h-[330px] 
                    w-[190px] 
                    font-noto"
          to={`/home/${card.name}`}>
      <div className="relative">
        <span className="h-[190px] w-full bg-hero-bg absolute top-0 left-0 bottom-0 right-0 rounded-[1.5rem]"/>
        <img
          src={card.imgUrl}
          alt={card.name}
          className="w-full h-[190px] object-cover object-center rounded-[1.5rem] select-none opacity-80"
        />
      </div>
      
      <div className="flex flex-row items-center justify-between gap-1 py-2.5
                      border-b-[1px] border-divider-color text-lg">
          <span
           title={card.name}
           className="-tracking-[0.05rem] font-[300] truncate">
              {card.name}
          </span>
          <span>
            {card.displayPrice}
          </span>
      </div>
      <div className="flex flex-row items-center gap-1 py-3 mb-3">
        {
          card.colors.map(color => (
            <div key={color.id} className="flex flex-row items-center gap-1">
              <div className="w-5 h-5 rounded-full ring-[0.5px] ring-gray-300" style={{backgroundColor: color.hex}}></div>
            </div>
          ))
        }
      </div>
      <button className="font-roboto text-[0.65rem] tracking-[0.3rem] p-2.5 bg-hero-bg text-white
                         font-[300] flex flex-row items-center justify-center w-full">ADD TO CART</button>
     
    </Link>
  )
}
