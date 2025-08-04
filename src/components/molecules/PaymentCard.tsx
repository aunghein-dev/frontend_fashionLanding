interface Props {
  name : string
}

export default function PaymentCard(props : Props) {
  return (
    <div className="flex flex-row items-center text-center
                    bg-gray-100/80 text-black
                    px-1 py-2 border-[1px] border-gray-100/10 rounded-[2px] cursor-pointer
                    hover:bg-gray-100 transition-all duration-200 ease-in-out">
      <span className="text-xs">{props.name}</span>
    </div>
  )
}