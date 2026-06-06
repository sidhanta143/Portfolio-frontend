import React from 'react'

import { FaPlus } from "react-icons/fa";
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import Project from './Project'


const Skill = () => {
  return (
    <>
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20 relative overflow-hidden">

<div className="max-w-2xl mx-auto text-center mt-40">
  <h1 className="text-6xl font-bold mb-6">
    My <span className="text-blue-400">Skills</span>
  </h1>

  <h3 className="text-gray-400 text-lg">
    Building skills today to create solutions for tomorrow.
  </h3>
</div>

        <marquee className="mt-15 " behavior="scroll" direction="left">
 
      <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10">
        Machine Learning
      </span>
      
      <span className="px-5 py-2 rounded-full ml-5 bg-white/10 border border-white/10">
        React
      </span>

      <span className="px-5 py-2 rounded-full ml-5 bg-white/10 border border-white/10">
        Tailwind CSS
      </span>

      <span className="px-5 py-2 rounded-full ml-5 bg-white/10 border border-white/10">
        Python
      </span>

      <span className="px-5 py-2 rounded-full ml-5 bg-white/10 border border-white/10">
        Firebase
      </span>

      <span className="px-5 py-2 rounded-full ml-5  bg-white/10 border border-white/10">
        SQL
      </span>
      <span className="px-5 py-2 rounded-full ml-5 bg-white/10 border border-white/10">
      HTML      </span>
      <span className="px-5 py-2 rounded-full ml-5 bg-white/10 border border-white/10">
        CSS 
      </span>
</marquee>

          <section className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-20 max-w-6xl mt-20 mx-auto">

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300">
          <h2 className="text-4xl font-bold text-blue-400">20+</h2>
          <p className="mt-2 text-gray-400">Projects Built</p>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300">
          <h2 className="text-4xl font-bold text-purple-400">3+</h2>
          <p className="mt-2 text-gray-400">Hackathons Participated</p>
        </div>
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300">
          <h2 className="text-4xl font-bold text-purple-400">AI/ML</h2>
          <p className="mt-2 text-gray-400">Focused on AI and Machine Learning</p>
        </div>
       





 <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300">
          <h2 className="text-4xl font-bold text-purple-400">Open Source Contributor</h2>
          <p className="mt-2 text-gray-400">Actively contributing to open source projects and communities</p>
        </div>
 
 
 <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300">
          <h2 className="text-4xl font-bold text-purple-400">Exploring Artificial Intelligence </h2>
          <p className="mt-2 text-gray-400"> Exploring Artificial Intelligence through machine learning, innovation, and real-world solutions. </p>
        </div>



    <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6
hover:scale-105 transition duration-300 flex items-center gap-4">

<FaPlus  className="ml-10 w-16 h-16 align-middle" /><h1 className="text-4xl font-bold text-white">More</h1>
 
 </div>

      </section>

   
    </div>
     <Project/>
    </>
  )
}

export default Skill
