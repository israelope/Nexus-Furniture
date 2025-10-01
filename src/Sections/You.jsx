import React from 'react'
import HomeImg1 from '../assets/img/HomeImg1.png'
import HomeImg2 from '../assets/img/HomeImg2.png'
import HomeImg3 from '../assets/img/HomeImg3.png'

const You = () => {
  return (
    <main>
      {/* Intro text */}
      <div className="px-5 md:px-20 pb-10 md:pb-15 w-full md:w-3/5 justify-self-end">
        <h1 className="text-xl md:text-[2em] font-bold font-serif">
          Home Decoration
        </h1>
        <p className="font-semibold text-gray-600 text-sm md:text-[0.9em] leading-relaxed">
          Elevate your dining experience with our range of stylish dining tables
          and chairs, designed to make every mealtime gathering a memorable
          occasion. Whether you prefer sleek and minimalist designs or rustic
          and farmhouse-inspired aesthetics, our collection offers a variety of
          options to suit your personal style.
        </p>
      </div>

      {/* Image + content grid */}
      <div className="h-auto md:h-[100vh] flex flex-col md:flex-row md:gap-0 gap-0">
        {/* Left big image */}
        <div
          className="bg-cover bg-center bg-no-repeat w-full md:w-6/9 h-[250px] md:h-auto 
          rounded-none md:rounded-lg"
          style={{ backgroundImage: `url(${HomeImg1})` }}
        >
          <h1 className="p-5 md:p-10 font-medium">Podal Shelf</h1>
        </div>

        {/* Middle section */}
        <div className="w-full md:w-4/8 flex flex-col">
          <div
            className="bg-[#423228] h-auto md:h-1/2 flex items-center 
            rounded-none md:rounded-none mb-0 md:mb-0"
          >
            <h1 className="p-5 md:p-10 text-white font-light">
              Explore our collection of sofas, armchairs, and sectionals,
              designed to provide the perfect balance of style and comfort for
              lounging and entertaining. Whether you prefer classic elegance or
              modern minimalism, our diverse range of designs ensures there's
              something for everyone.
            </h1>
          </div>
          <div
            className="bg-cover bg-center bg-no-repeat h-[200px] md:h-1/2 
            rounded-none md:rounded-br-xl"
            style={{ backgroundImage: `url(${HomeImg2})` }}
          >
            <h1 className="p-5 md:p-10 text-white font-medium">
              Lounge collection
            </h1>
          </div>
        </div>

        {/* Right image */}
        <div
          className="w-full md:w-4/8 h-[200px] md:h-8/10 bg-cover bg-center bg-no-repeat 
          rounded-none md:rounded-none"
          style={{ backgroundImage: `url(${HomeImg3})` }}
        >
          <h1 className="p-5 md:p-10 text-white font-medium">
            Flower Kit Set
          </h1>
        </div>
      </div>
    </main>
  )
}

export default You
