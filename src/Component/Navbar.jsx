import React from 'react'
import {Link} from 'react-router-dom'
import { FaCrown } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='border-b border-gray-600 bg-white/0.5 fixed w-full top-0 left-0 z-20'>
       <nav className="flex items-center justify-between px-8 py-6 relative z-10">
      <h1 className="text-3xl font-bold tracking-wide flex items-center hover:text-blue-400 transition duration-300 cursor-pointer">
  <span className="relative">
    <FaCrown className="absolute -top-2 left-1/8  -translate-x-1/2 text-yellow-400 text-lg" />
    M
  </span>
  yPortfolio
</h1>

        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
       

        <Link to="/">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Home</li>
        </Link>

        <Link to="/about">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">About</li>
        </Link>
         <Link to="/Projects" >
         <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Projects</li>
         </Link>

    
          <Link to="/Contact">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Contact</li>
          </Link>
          <Link to="/Skill">
          <li className="hover:text-blue-400 transition duration-300 cursor-pointer">Skill</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
