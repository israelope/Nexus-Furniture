import React from 'react'
import Logo from '../assets/Icons/Logo.png'
import Instagram from '../assets/Icons/Instagram.png'
import Facebook from '../assets/Icons/Facebook.png'
import Twitter from '../assets/Icons/Twiitter.png'

const Footer = () => {
    return (
        <main className="h-fit bg-[#000f10] px-6 md:px-25 pt-10 md:pt-15">
            {/* Top row: Logo + Menu */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo */}
                <div>
                    <img className="w-10 h-10" src={Logo} alt="Logo" />
                </div>

                {/* Menu Links */}
                <div>
                    <ul className="flex flex-col md:flex-row md:gap-15 gap-4 text-white font-semibold text-center">
                        <a href=""><li>New arrival</li></a>
                        <a href=""><li>Collection</li></a>
                        <a href=""><li>Table</li></a>
                        <a href=""><li>Bed</li></a>
                        <a href=""><li>Chair</li></a>
                    </ul>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-end gap-5 pt-10 pb-5">
                <a href=""><img className="w-8 h-8" src={Instagram} alt="Facebook" /></a>
                <a href=""><img className="w-8 h-8" src={Facebook} alt="Facebook" /></a>
                <a href=""><img className="w-8 h-8" src={Twitter} alt="Twitter" /></a>
            </div>

            {/* Divider */}
            <hr className="border-gray-700 pb-5" />

            {/* Footer Text */}
            <h1 className="text-white text-center pb-5 text-sm md:text-base">
                Nure Home (2025)
            </h1>
        </main>
    )
}

export default Footer
