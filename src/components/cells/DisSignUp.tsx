export default function DisSignUp(){
  return (
     <div className="flex flex-col gap-4 w-[320px] 
                     tracking-[0.2rem] font-[300] text-gray-white">
          <span className="text-xl">
            Receive an exclusive <span className="text-red-600">20%</span><br/>
            discount code when you<br/>
            singup.
          </span>
          <div className="flex flex-row border-b-[1px] border-gray-white">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent focus:outline-none 
                           py-1 text-gray-white 
                          text-base placeholder:text-gray-400/75"
              />
              <button className="py-2 ml-3">
                Subscribe
              </button>
           </div>
      </div>
  )
}