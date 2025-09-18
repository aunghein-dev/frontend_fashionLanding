import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "../typography/Link";

const BestSellerHero = () => {
  const BIZID = import.meta.env.VITE_BUSINESS_ID;
  const API = import.meta.env.VITE_API;

  const [images, setImages] = useState<string[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeroImages = async () => {
      try {
        const res = await axios.get(`${API}/public/mo/v1/top-hero-images/${BIZID}`, {
          withCredentials: true,
        });
        const data = res.data as string[];
        if (Array.isArray(data) && data.length) setImages(data);
      } catch (err) {
        console.error("Hero images fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHeroImages();
  }, [API, BIZID]);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[450px] overflow-hidden select-none mt-[80px] mb-10">
      {loading && <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>}
      {!loading && images.length > 0 && (
        <div className="absolute inset-0 w-full h-full">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`hero-${idx}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${idx === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />
          ))}
          <div className="absolute inset-0 bg-black/20 z-20 pointer-events-none"></div>
        </div>
      )}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 w-[180px] sm:w-[200px] z-30">
        <span className="font-noto font-[300] tracking-[0.2rem] text-white text-center py-2 text-[1.4rem] sm:text-[1.6rem] w-full">
          Best Sellers
        </span>
      </div>
    </div>
  );
};

export default BestSellerHero;
