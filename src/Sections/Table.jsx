import React from 'react'
import TableImg1 from '../assets/img/TableImg1.png'
import TableImg2 from '../assets/img/TableImg2.png'
import TableImg3 from '../assets/img/TableImg3.png'
import ArrowRight from '../assets/Icons/ArrowRight.png'

const Table = () => {
  return (
    <main className="p-5 md:p-40 flex flex-col md:flex-row justify-between gap-10 md:gap-0">
      {/* Left text section */}
      <div className="w-full md:w-4/10 pt-5 md:pt-30">
        <h1 className="text-xl md:text-[2em] font-bold font-serif">
          Table Decoration
        </h1>
        <p className="font-semibold text-gray-600 text-sm md:text-[0.9em] py-3 leading-relaxed">
          Create a stunning focal point with our range of centerpiece options,
          from dazzling candle holders and floral arrangements to striking
          decorative bowls and trays. Each piece is designed to capture
          attention and spark conversation, adding a touch of luxury and style
          to your table.
        </p>
        <p className="font-semibold text-gray-600 text-sm md:text-[0.9em] pb-6 md:pb-15 leading-relaxed">
          Enhance your dining experience with our selection of dinnerware,
          including elegant plates, bowls, and serving dishes. Crafted from
          high-quality materials and featuring timeless designs, our dinnerware
          sets are perfect for both everyday use and special occasions, adding a
          touch of refinement to any meal.
        </p>

        {/* Button + arrow */}
        <div className="flex items-center gap-3">
          <h1 className="font-normal text-base md:text-[1.2em]">
            <span className="bg-[#8DEB02] rounded-full px-4 py-2">All</span>{' '}
            collection
          </h1>
          <a href=""><img className="w-6 h-6 md:w-8 md:h-8" src={ArrowRight} alt="" /></a>
        </div>
      </div>

      {/* Right image section */}
      <div className="w-full md:w-5/10">
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5">
          <img
            className="w-full sm:w-1/2 h-[200px] sm:h-auto object-cover rounded-2xl"
            src={TableImg1}
            alt=""
          />
          <img
            className="w-full sm:w-1/2 h-[200px] sm:h-auto object-cover rounded-2xl"
            src={TableImg2}
            alt=""
          />
        </div>

        <img
          className="mt-4 md:pt-5 w-full sm:w-4/6 object-cover rounded-2xl"
          src={TableImg3}
          alt=""
        />
      </div>
    </main>
  )
}

export default Table
