const Hero = () => {
  return (
    <div className="relative w-full h-[340px] object-cover object-top select-none">
       
        <span className="h-full w-full bg-hero-bg absolute top-0 left-0 bottom-0 right-0"/>
        <img src="src/assets/hero/hero.webp" alt="hero"
           className="w-full h-[340px] object-cover object-bottom select-none opacity-65"/>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-noto font-[300] tracking-[0.2rem] text-white-color bg-white/20 px-6 rounded-sm
          text-[1.4rem] sm:text-[2rem] w-full lg:w-auto">New collection is live now!</span>
    </div>
  )
}

export default Hero