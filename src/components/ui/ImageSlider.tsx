import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const ImageSlider = ({ images, activeIndex, setActiveIndex }: ImageSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(0);

  // Effect to adjust slider position when activeIndex changes
  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider || !slider.children[activeIndex]) {
      return;
    }

    const thumbnail = slider.children[activeIndex] as HTMLElement;
    const containerRect = container.getBoundingClientRect();
    const thumbnailRect = thumbnail.getBoundingClientRect();

    const isThumbnailVisible =
      thumbnailRect.left >= containerRect.left &&
      thumbnailRect.right <= containerRect.right;

    if (isThumbnailVisible) {
      return;
    }

    const thumbnailCenter = thumbnail.offsetLeft + thumbnail.clientWidth / 2;
    const containerCenter = container.clientWidth / 2;
    let newPosition = containerCenter - thumbnailCenter;

    const maxScroll = 10; 
    const minScroll = container.clientWidth - slider.scrollWidth - 10; 

    if (minScroll < 0) {
      newPosition = Math.max(minScroll, Math.min(maxScroll, newPosition));
    } else {
      newPosition = 0;
    }

    setSliderPosition(newPosition);
  }, [activeIndex]);

  const scrollLeft = () => {
    setSliderPosition((prev) => {
      const newPosition = prev + 250;
      return Math.min(newPosition, 0);
    });
  };

  const scrollRight = () => {
    const container = containerRef.current;
    const slider = sliderRef.current;
    if (!container || !slider) return;

    setSliderPosition((prev) => {
      const newPosition = prev - 150;
      const minScroll = container.clientWidth - slider.scrollWidth;
      return Math.max(newPosition, minScroll > 0 ? 0 : minScroll);
    });
  };

  if(images.length === 0) return <></>

  return (
    <div className="relative sm:mt-3 max-w-[450px] min-h-[80px]">
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-2 px-2 transition-transform duration-1000 ease-in-out  my-2"
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`w-[80px] h-[80px] md:w-16 md:h-16 object-cover cursor-pointer border flex-shrink-0
                         transition-all duration-200 
                         ${activeIndex === index ? "ring-1 ring-black" : "hover:opacity-80"}`}
            />
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2
                   bg-black/60 hover:bg-black/40 text-white rounded-full
                   transition-all duration-200 shadow-md p-1"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2
                   bg-black/60 hover:bg-black/40 text-white rounded-full
                   transition-all duration-200 shadow-md p-1"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
