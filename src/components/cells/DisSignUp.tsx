export default function DisSignUp(){
  return (
     <div className="flex flex-col gap-4 w-[310px]">
          <span className="text-2xl">
            Receive an exclusive <span className="text-red-600">20%</span><br/>
            discount code when you<br/>
            singup.
          </span>
          <div className="flex flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-black focus:outline-none 
                          border-b-2 border-gray-400 p-2 
                          text-base placeholder:text-gray-400"
              />
              <button className="text-gray-400 border-b-2 border-gray-400 p-2">
                Subscribe
              </button>
           </div>
      </div>
  )
}