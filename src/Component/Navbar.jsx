import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCrown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-gray-600 bg-black fixed w-full top-0 left-0 z-20">
      <nav className="flex items-center justify-between px-8 py-6">

        <h1 className="text-3xl font-bold tracking-wide flex items-center text-white">
          <span className="relative">
            <FaCrown className="absolute -top-2 left-1/5 -translate-x-1/2 text-yellow-400 text-lg" />
            M
          </span>
          yPortfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/skill"><li>Skill</li></Link>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-black text-white flex flex-col items-center gap-6 py-6">
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/skill"><li>Skill</li></Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;