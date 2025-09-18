import { FaLocationDot } from "react-icons/fa6";

export default function StoreLocations() {
  return (
    <div className="flex-1 w-full
                    mt-[80px] sm:mt-[130px] mb-[20px] sm:mb-[20px] max-w-5xl mx-auto
                    sm:px-5 px-3">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mb-10">
        <div className="order-1 sm:order-1 flex flex-col sm:items-end sm:text-right items-center text-center justify-center">
          <div className="flex items-center sm:justify-end mb-0 sm:mb-4 mt-4 sm:mt-0 justify-center text-center">
            <FaLocationDot className="mr-2 text-pink-300 w-7 h-7 sm:w-9 sm:h-9 mb-2" />
            <span className="sm:text-4xl text-2xl font-josefin text-black-color font-[600]">
              Store Location 1
            </span>
          </div>

          <div className="flex-col items-end hidden sm:block">
            <p className="text-xl font-josefin text-black-color mb-2">
              Shan Yoma field along, Johnnie street, Tachileik.
            </p>
            <p className="text-xl font-josefin text-black-color">
              09-965575892, 09-799103451
            </p>
          </div>

        </div>

        <div className="order-2 sm:order-2 w-full sm:h-[500px]">
          <img
            src="/store1.jpg"
            alt="Store 1"
            className="object-cover w-full h-[330px] sm:h-full"
          />
          <div className="flex flex-col sm:hidden items-center justify-center mt-3">
            <p className="text-xl font-josefin text-black-color mb-2 text-center">
              Shan Yoma field along, Johnnie street, Tachileik.
            </p>
            <p className="text-xl font-josefin text-black-color text-center">
              09-965575892, 09-799103451
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-12 mb-12">
        <div className="order-2 sm:order-1 w-full sm:h-[500px]">
          <img
            src="/store2.jpg"
            alt="Store 2"
            className="object-cover w-full h-[330px] sm:h-full"
          />
          <div className="flex flex-col sm:hidden items-center justify-center mt-3">
            <p className="text-xl font-josefin text-black-color mb-2 text-center">
              No. 123, Main Street, Yangon.
            </p>
            <p className="text-xl font-josefin text-black-color text-center">
              09-111111111, 09-222222222
            </p>
          </div>
        </div>
        <div className="order-1 sm:order-2 flex flex-col sm:items-start sm:text-left items-center text-center justify-center">
          <div className="flex items-center justify-start mb-0 sm:mb-4 mt-4 sm:mt-0">
            <FaLocationDot className="mr-2 text-pink-300 w-7 h-7 sm:w-9 sm:h-9 mb-2" />
            <span className="sm:text-4xl text-2xl font-josefin text-black-color font-[600]">
              Store Location 2
            </span>
          </div>
          <div className="flex-col items-start hidden sm:block">
            <p className="text-xl font-josefin text-black-color mb-2">
              No. 123, Main Street, Yangon.
            </p>
            <p className="text-xl font-josefin text-black-color">
              09-111111111, 09-222222222
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
