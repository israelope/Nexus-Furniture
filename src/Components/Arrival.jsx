import React from 'react'
import Arrival1 from '../assets/img/Arrival1.png'
import Arrival2 from '../assets/img/Arrival2.png'
import Arrival3 from '../assets/img/Arrival3.png'
import Arrival4 from '../assets/img/Arrival4.png'
import Arrival5 from '../assets/img/Arrival5.png'
import ArrowUpBlack from '../assets/icons/ArrowUpBlack.png'

const Arrival = () => {
  return (
    <main className="h-fit p-6 md:p-25 md:px-40 md:pb-40">
      {/* Title */}
      <div className="pb-8 md:pb-15 text-center">
        <h1 className="text-xl md:text-[2em] text-black font-bold font-serif">
          New Arrival
        </h1>
        <p className="text-sm md:text-[1em] font-semibold text-gray-700 leading-relaxed">
          Discover the perfect pieces to enhance your home with style and
          elegance. With our new arrivals, you can create spaces that reflect
          your unique personality and make a lasting impression on all who enter
        </p>
      </div>

      {/* First row */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-between md:h-[45vh]">
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-5/8 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6"
          style={{ backgroundImage: `url(${Arrival1})` }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-black font-medium text-base md:text-lg">
              Tat coffee set
            </h1>
            <a href=""><img className="w-6 h-6 md:w-8 md:h-8" src={ArrowUpBlack} alt="" /></a>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-3/8 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6"
          style={{ backgroundImage: `url(${Arrival2})` }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-black font-medium text-base md:text-lg">
              Tat coffee set
            </h1>
            <a href=""><img className="w-6 h-6 md:w-8 md:h-8" src={ArrowUpBlack} alt="" /></a>
          </div>
        </div>
      </div>

      {/* Second row */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-between md:h-[45vh] pt-5">
        <div className="relative bg-[#000f10] w-full md:w-3/9 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6">
          <h1 className="text-white font-medium text-sm md:text-xl leading-relaxed">
            Transform your dining area with our exquisite tables and chairs,
            perfect for hosting memorable gatherings with family and friends.
            And don't forget to explore our selection of bedroom furniture,
            where comfort meets elegance in every bed frame and nightstand.
          </h1>
        </div>
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-5/8 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6"
          style={{ backgroundImage: `url(${Arrival3})` }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-black font-medium text-base md:text-lg">
              Duo sitter
            </h1>
            <a href=""><img className="w-6 h-6 md:w-8 md:h-8" src={ArrowUpBlack} alt="" /></a>
          </div>
        </div>
      </div>

      {/* Third row */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-3 justify-between md:h-[45vh] pt-5">
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-3/9 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6"
          style={{ backgroundImage: `url(${Arrival4})` }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-black font-medium text-base md:text-lg">
              Relax Kukun
            </h1>
            <a href=""><img className="w-6 h-6 md:w-8 md:h-8" src={ArrowUpBlack} alt="" /></a>
          </div>
        </div>
        <div
          className="relative bg-cover bg-center bg-no-repeat w-full md:w-3/9 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6"
          style={{ backgroundImage: `url(${Arrival5})` }}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-black font-medium text-base md:text-lg">
              Remix Kano
            </h1>
            <a href=""><img className="w-6 h-6 md:w-8 md:h-8" src={ArrowUpBlack} alt="" /></a>
          </div>
        </div>
        <div className="relative bg-[#000f10] w-full md:w-3/9 h-[200px] md:h-full rounded-xl flex flex-col justify-start p-6">
          <h1 className="text-white font-medium text-sm md:text-lg leading-relaxed">
            Step into style with our latest arrivals! Our newest collection
            boasts a stunning array of furniture and décor pieces designed to
            captivate and inspire. From statement making sofas to eye-catching
            accent chairs, every item has been carefully selected to add a touch
            of luxury to your living space.
          </h1>
        </div>
      </div>
    </main>
  )
}

export default Arrival
