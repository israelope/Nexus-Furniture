import React from 'react'
import HeroBg2 from '../assets/img/HeroBg2.png'

const Hero = () => {
  return (
    <main
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-between"
      style={{
        backgroundImage: `url(${HeroBg2})`,
      }}
    >
      {/* Text Section */}
      <div className="px-6 md:px-12 lg:px-20 py-16 lg:py-28 max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-[3em] text-white font-normal font-serif leading-snug">
          Make your Interior more
          <span className="italic font-light"> Minimalist</span> and
          <span className="italic font-light"> Modern</span>
        </h1>

        <h2 className="text-lg md:text-xl lg:text-[1.5em] text-white font-light pt-4 pb-6">
          Transform Your Space: Embrace Minimalism and
          <br className="hidden md:block" />
           Modern Elegance
        </h2>

        <button className="bg-[#8DEB02] cursor-pointer py-3 px-6 rounded-xl border font-semibold text-lg md:text-xl">
          View collection
        </button>
      </div>

      {/* Promo Bar */}
      <div className="bg-[#487800] w-full flex flex-row md:flex-row gap-4 md:gap-7 justify-center py-4 items-center text-center">
        <h1 className="text-base md:text-lg lg:text-xl text-white font-light">
          Enjoy 20% Off on Our Previous Collection
        </h1>
        <button className="bg-[#001014] cursor-pointer px-5 py-2 rounded-3xl font-light text-white text-sm md:text-base">
          View
        </button>
      </div>
    </main>
  )
}

export default Hero
