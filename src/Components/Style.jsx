import React from 'react'
import Style1 from '../assets/img/Style1.png'
import Style2 from '../assets/img/Style2.png'
import Style3 from '../assets/img/Style3.png'
import Style4 from '../assets/img/Style4.png'
import ArrowUpWhite from '../assets/Icons/ArrowUpWhite.png'

const Style = () => {
  return (
    <main className="h-min p-6 md:p-25 bg-[#060606]">
      {/* Text Section */}
      <div className="w-full md:w-2/4 mb-8 md:mb-0">
        <h1 className="text-xl md:text-[2em] text-white font-bold font-serif">
          Style and Finishing
        </h1>
        <p className="font-light text-white text-sm md:text-[0.9em] leading-relaxed mt-3">
          Transform your living spaces with our range of stylish accessories,
          including decorative vases, sculptures, and wall art. Each piece is
          carefully chosen to add visual interest and personality to your home,
          creating a welcoming and inviting atmosphere for you and your guests
          to enjoy.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-2 pt-10 md:pt-20">
        {/* Card 1 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-6/9 h-[250px] md:h-[60vh] rounded-xl flex flex-col justify-end p-6"
          style={{ backgroundImage: `url(${Style1})` }}
        >
          <a href=""><img
            className="w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4"
            src={ArrowUpWhite}
            alt=""
          /></a>
          <h1 className="text-white font-medium text-base md:text-lg">
            Franto Finishing
          </h1>
        </div>

        {/* Card 2 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-6/9 h-[250px] md:h-[60vh] rounded-xl flex flex-col justify-end p-6"
          style={{ backgroundImage: `url(${Style2})` }}
        >
          <a href=""><img
            className="w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4"
            src={ArrowUpWhite}
            alt=""
          /></a>
          <h1 className="text-white font-medium text-base md:text-lg">
            Kamoro Finishing
          </h1>
        </div>

        {/* Card 3 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-6/9 h-[250px] md:h-[60vh] rounded-xl flex flex-col justify-end p-6"
          style={{ backgroundImage: `url(${Style3})` }}
        >
          <a href=""><img
            className="w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4"
            src={ArrowUpWhite}
            alt=""
          /></a>
          <h1 className="text-white font-medium text-base md:text-lg">
            Toro Finishing
          </h1>
        </div>

        {/* Card 4 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-6/9 h-[250px] md:h-[60vh] rounded-xl flex flex-col justify-end p-6"
          style={{ backgroundImage: `url(${Style4})` }}
        >
          <a href=""><img
            className="w-8 h-8 md:w-10 md:h-10 absolute top-4 right-4"
            src={ArrowUpWhite}
            alt=""
          /></a>
          <h1 className="text-white font-medium text-base md:text-lg">
            Roso Finishing
          </h1>
        </div>
      </div>
    </main>
  )
}

export default Style
