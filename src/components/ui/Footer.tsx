import CustomerCareRoute from "@/data/customerCare.route";
import CompanyFooterColumn from "../cells/CompanyFooterColumn";
import DisSignUp from "../cells/DisSignUp";
import CompanyRoute from "@/data/company.route";
import TermsAndPoliciesRoute from "@/data/termsAndPolicies.route";
import Selector from "../typography/Selector";
import PaymentList from "../cells/PaymentList";

export default function Footer(){
  return (
    <footer className="bg-black-color text-text-color min-h-[340px] pt-10">

       <div className="flex flex-row items-center justify-between max-w-5xl mx-auto pt-8
                      border-t-[1px] border-divider">
          <DisSignUp/>
          <div className="">
            <CompanyFooterColumn header="Company" options={CompanyRoute}/>
          </div>
          <div className="">
            <CompanyFooterColumn header="Customer Care" options={CustomerCareRoute}/>
          </div>
          <div className="">
            <CompanyFooterColumn header="Terms & Policies" options={TermsAndPoliciesRoute}/>
          </div>
          
       </div>

       <div className="mt-10 max-w-5xl mx-auto
                       flex flex-row items-center justify-between py-3">
          <div className="flex flex-row items-center text-center gap-5">
            <span className="font-noto font-[700] text-[1.5rem]">Mo Mo</span>
            <span className="text-gray-white tracking-[0.2rem] text-xs">© 2023 MoMo. All rights reserved</span>
          </div>
          <div className="flex flex-row items-center">

            <div className="mr-6">
              <PaymentList/>
            </div>
            
            
            <div className="relative flex flex-row items-center gap-1 ml-3 min-w-[100px]">
              <Selector header="EN" 
                        options={["EN","MY","CN","JP","TH","VN"]} 
                        className={{
                          holderClass: "text-gray-white tracking-[0.2rem]",
                        }}/>
            </div>

            <div className="relative flex flex-row items-center gap-1 ml-1 min-w-[100px]">
              <Selector header="MMK" 
                        options={["USD","THB","JPY","CNY"]} 
                        className={{
                          holderClass: "text-gray-white tracking-[0.2rem]",
                        }}/>
            </div>
          </div>
       </div>
    
       
    </footer>
  )
}