import CustomerCareRoute from "@/data/customerCare.route";
import CompanyFooterColumn from "../cells/CompanyFooterColumn";
import DisSignUp from "../cells/DisSignUp";
import CompanyRoute from "@/data/company.route";
import TermsAndPoliciesRoute from "@/data/termsAndPolicies.route";
import FollowUsRoute from "@/data/followUs.route";
import Payment from "@/data/payment.data";
import PaymentCard from "../molecules/PaymentCard";

export default function Footer(){
  return (
    <footer className="bg-black text-gray-50 min-h-[340px]">

       <div className="flex flex-row items-center justify-between max-w-5xl mx-auto pt-8">
          <DisSignUp/>
          <div className="ml-2 border-l-[2px] py-4
                       border-gray-300/20 px-4 min-w-[130px]">
            <CompanyFooterColumn header="Company" options={CompanyRoute}/>
          </div>
          <div className="ml-2 border-l-[2px] py-4
                       border-gray-300/20 px-4">
            <CompanyFooterColumn header="Customer Care" options={CustomerCareRoute}/>
          </div>
          <div className="ml-2 border-l-[2px] py-4
                       border-gray-300/20 px-4">
            <CompanyFooterColumn header="Terms & Policies" options={TermsAndPoliciesRoute}/>
          </div>
          <div className="ml-2 border-l-[2px] py-4
                       border-gray-300/20 px-4">
            <CompanyFooterColumn header="Follow us" options={FollowUsRoute}/>
          </div>
       </div>

       <div className="border-t-[1px] border-gray-300/20 mt-10 max-w-5xl mx-auto
                       flex flex-row items-center justify-between py-8">
          <div className="flex flex-row items-center text-center gap-5">
            <span className="text-3xl font-extrabold">Mo Mo</span>
            <span className="text-gray-300/80">© 2023 MoMo. All rights reserved</span>
          </div>
          <div>
            <ul className="flex flex-row items-center gap-2">
              {
                Payment.map(item => (
                  <li>
                    <PaymentCard name={item.name}/>
                  </li>
                ))
              }
            </ul>
          </div>
       </div>
    
       
    </footer>
  )
}