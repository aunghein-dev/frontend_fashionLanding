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
    <div className="h-[400px] 
                min-w-[200px] 
                w-full rounded-sm">
      <img
        src={card.imgUrl}
        alt={card.name}
        className="w-full h-[300px] object-cover object-center rounded-t-sm"
      />
      <div className="flex flex-col gap-1 mt-2">
         <span>
            {card.name}
          </span>
          <span>
            {card.displayPrice}
          </span>
      </div>
      <div className="flex flex-row items-center gap-1 mt-2">
        {
          card.colors.map(color => (
            <div key={color.id} className="flex flex-row items-center gap-1">
              <div className="w-4 h-4 rounded-full ring-1 ring-gray-200" style={{backgroundColor: color.hex}}></div>
            </div>
          ))
        }
      </div>
     
    </div>
  )
}
