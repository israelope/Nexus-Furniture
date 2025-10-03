import React, { useState } from 'react'
import Logo from '../assets/Icons/Logo.png'
import Basket from '../assets/Icons/Basket.png'
import { Menu, X } from 'lucide-react' // for hamburger icons

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <main className="py-3 px-6 bg-[#001112] flex justify-between items-center sticky top-0 z-50">
      {/* Logo */}
      <div>
        <img className="w-8 h-8" src={Logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex justify-between w-2/4">
        <ul className="flex justify-around gap-10 text-white font-semibold">
          <a href=""><li>New arrival</li></a>
          <a href=""><li>Collection</li></a>
          <a href=""><li>Table</li></a>
          <a href=""><li>Bed</li></a>
          <a href=""><li>Chair</li></a>
        </ul>
        <div className="flex gap-9 text-white font-semibold list-none">
          <a href=""><li>Login</li></a>
          <img className="w-7 h-7" src={Basket} alt="Basket" />
        </div>
      </div>

      {/* Mobile Menu Button + Basket */}
      <div className="flex items-center gap-5 lg:hidden">
        {/* Basket for mobile */}
        <img className="w-7 h-7" src={Basket} alt="Basket" />
        {/* Hamburger */}
        <button 
          className="text-white" 
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28}/> : <Menu size={28}/> }
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-[#001112] flex flex-col items-left text-2xl gap-6 py-6 px-5 text-white font-semibold lg:hidden">
          <a href="">New arrival</a>
          <a href="">Collection</a>
          <a href="">Table</a>
          <a href="">Bed</a>
          <a href="">Chair</a>
          <a href="">Login</a>
        </div>
      )}
    </main>
  )
}

export default Navbar
