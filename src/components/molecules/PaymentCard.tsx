interface Props {
  name : string
}

export default function PaymentCard(props : Props) {
  return (
    <div className="flex flex-row items-center text-center
                    text-gray-300/80
                    p-2 border-[1px] border-gray-300/20 rounded-[6px] cursor-pointer">
      <span className="text-xs">{props.name}</span>
    </div>
  )
}