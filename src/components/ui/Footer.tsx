import Selector from "../typography/Selector";
import PaymentList from "../cells/PaymentList";
import { FaLocationDot } from "react-icons/fa6";
import { useBusiness } from "@/api/hooks/useBusiness";
import { BiSolidPhoneCall } from "react-icons/bi";
import CurrencySelector from "../atoms/CurrencySelector";
import { Link } from "../typography/Link";

export default function Footer(){

  const {data : business} = useBusiness();
 
  return (
    <footer className="bg-black-color text-text-color min-h-[130px] pt-10 pl-5 lg:pl-0 ">

      {/* Footer 
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
       </div>*/}

   <div className="mx-auto text-gray-white min-h-[20px] font-josefin 
                max-w-[550px] grid grid-cols-1 sm:grid-cols-[1fr_1px_1fr] gap-4 items-stretch ">
        {/* Left Column */}
        <div className="flex flex-col justify-center h-full max-w-[390px] sm:w-full
                        border-r-[1px] border-divider sm:border-none">
          {/* Address */}
          <div className="flex flex-col items-start mb-2">
            <div className="flex items-center">
              <FaLocationDot className="mr-2 text-pink-300 w-5 h-5" />
              <span>Shan Yoma field along,</span>
            </div>
            <span className="ml-7">Johnnie street, Tachileik.</span>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <BiSolidPhoneCall className="mr-2 text-pink-300 w-5 h-5" />
            <span>09451922223</span>
            <span>, 09758113774</span>
          </div>
        </div>

        <div className="border-l-[1px] border-divider"></div>

        {/* Right Column with left border */}
        <div className="flex flex-col justify-center h-full">
          {/* Address */}
          <div className="flex flex-col items-start mb-2 ">
            <div className="flex items-center">
              <FaLocationDot className="mr-2 text-pink-300 w-5 h-5" />
              <span>Nitchin Pagoda, Wunmaing Rd,</span>
            </div>
            <span className="ml-7">San Saing, Tachileik.</span>
          </div>

          {/* Phone */}
          <div className="flex items-center">
            <BiSolidPhoneCall className="mr-2 text-pink-300 w-5 h-5" />
            <span>09451922223</span>
            <span>, 09758113774</span>
          </div>
        </div>
      </div>


       
       <div className="max-w-5xl mx-auto
                       flex flex-col items-center 
                       justify-center text-gray-white min-h-[50px] font-josefin
                       space-y-2 mt-2">
         <Link
           to="/termsAndConditions"
          >Terms & Conditions</Link>
       </div>
       <div className="mt-7 max-w-5xl mx-auto
                       flex flex-row items-center justify-between pb-2">           
          <div className="flex flex-row items-center text-center gap-5 mb-0">
            <span className="font-roboto text-gray-white tracking-[0.2rem] text-sm">
              {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex flex-row items-center">

            {/*<div className="mr-6">
              <PaymentList/>
            </div>*}
            
            {/*
            <div className="relative flex flex-row items-center gap-1 ml-3 min-w-[100px]">
              <Selector header="EN" 
                        options={["EN","MY"]} 
                        className={{
                          holderClass: "text-gray-white tracking-[0.2rem]",
                        }}/>
            </div>*/}

            <div className="relative flex flex-row items-center gap-1 ml-1 min-w-[100px]">
              <CurrencySelector/>
            </div>
          </div>
       </div>
    
       
    </footer>
  )
}