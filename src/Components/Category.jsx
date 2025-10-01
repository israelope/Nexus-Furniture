import React from 'react'
import Chair from '../assets/img/Chair.png'
import Table from '../assets/img/Table.png'
import Bed from '../assets/img/Bed.png'
import ArrowUpBlack from '../assets/Icons/ArrowUpBlack.png'

const Category = () => {
  return (
    <main className="px-6 md:px-12 lg:px-20 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Chair */}
      <div className="bg-[#F6F6F6] rounded-2xl flex justify-between items-center p-6">
        <div className="max-w-xs">
          <h1 className="font-bold pb-3 text-xl md:text-2xl">Chair</h1>
          <p className="font-light pb-5 text-sm md:text-base">
            Sink into comfort with our range of chairs designed for both
            relaxation and functionality just for you.
          </p>
          <a href=""><img className="w-8 h-8 md:w-10 md:h-10" src={ArrowUpBlack} alt="" /></a>
        </div>
        <img className="w-28 h-28 md:w-40 md:h-40 object-contain" src={Chair} alt="Chair" />
      </div>

      {/* Table */}
      <div className="bg-[#F6F6F6] rounded-2xl flex justify-between items-center p-6">
        <div className="max-w-xs">
          <h1 className="font-bold pb-3 text-xl md:text-2xl">Table</h1>
          <p className="font-light pb-5 text-sm md:text-base">
            Sleek dining tables perfect for family gatherings to versatile coffee tables
            that anchor your living room
          </p>
          <a href=""><img className="w-8 h-8 md:w-10 md:h-10" src={ArrowUpBlack} alt="" /></a>
        </div>
        <img className="w-28 h-28 md:w-40 md:h-40 object-contain" src={Table} alt="Table" />
      </div>

      {/* Bed */}
      <div className="bg-[#F6F6F6] rounded-2xl flex justify-between items-center p-6">
        <div className="max-w-xs">
          <h1 className="font-bold pb-3 text-xl md:text-2xl">Bed</h1>
          <p className="font-light pb-5 text-sm md:text-base">
            Transform your bedroom into a sanctuary of rest and relaxation with our
            carefully crafted beds and mattresses.
          </p>
          <a href=""><img className="w-8 h-8 md:w-10 md:h-10" src={ArrowUpBlack} alt="" /></a>
        </div>
        <img className="w-28 h-28 md:w-40 md:h-40 object-contain" src={Bed} alt="Bed" />
      </div>
    </main>
  )
}

export default Category
