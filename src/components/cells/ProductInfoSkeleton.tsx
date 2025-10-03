export default function ProductInfoSkeleton() {
  return (
    <div className="flex-1 w-full max-w-[90vw] lg:max-w-5xl mx-auto mt-[0px] sm:mt-[120px] mb-[20px] grid grid-cols-1 sm:grid-cols-2 gap-10">
      {/* Image side */}
      <div className="flex flex-col gap-3">
        {/* Main Image */}
        <div className="relative w-full aspect-[4/5] max-w-[450px] bg-gray-200 animate-pulse" />

        {/* Thumbnails */}
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-[70px] h-[70px] md:w-16 md:h-16 bg-gray-200 rounded-md animate-pulse"
            />
          ))}
        </div>
      </div>

      {/* Details side */}
      <div className="flex flex-col gap-y-6 justify-center">
        {/* Title */}
        <div className="h-8 w-3/4 bg-gray-200 rounded-md animate-pulse" />
        {/* Price */}
        <div className="h-6 w-1/3 bg-gray-200 rounded-md animate-pulse mb-4" />

        {/* Color selector */}
        <div className="flex flex-col gap-y-3">
          <div className="h-4 w-24 bg-gray-200 rounded-md animate-pulse" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"
              />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="flex gap-2 items-center">
          <div className="h-4 w-32 bg-gray-200 rounded-md animate-pulse" />
        </div>

        {/* Clear button placeholder */}
        <div className="h-8 w-20 bg-gray-200 rounded-md animate-pulse mt-4" />
      </div>
    </div>
  );
}
