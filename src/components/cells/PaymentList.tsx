import PaymentCard from "../atoms/PaymentCard";
import PaymentData from "@/data/payment.data";

export default function PaymentList(){
  return (
    <ul className="flex flex-row gap-3">
      {
        PaymentData.map(item => (
          <li key={item.id}>
            <PaymentCard name={item.name} imgUrl={item.imgUrl} />
          </li>
        ))
      }
    </ul>
  )
}