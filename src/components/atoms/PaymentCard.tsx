interface PaymentCardProps {
  name: string;
  imgUrl: string;
}

export default function PaymentCard({ name, imgUrl }: PaymentCardProps) {
  return (
    <>
      <img 
        src={imgUrl} 
        alt={name} 
        title={name}
        className="w-7 h-7 border-[1px] border-divider object-cover object-center rounded-md grayscale contrast-110
                   hover:grayscale-0 hover:scale-[1.05] cursor-pointer transition-all duration-200 ease-in-out"
      />
    </>
  );
}