
import React from 'react'
import img from '../assets/pic.png'
import Skill from './Skill'
import { FaPlus } from "react-icons/fa";
import Navbar from './Navbar'
import { Link } from 'react-router-dom'



const About = () => {
  return (
    <>
    <Navbar/>
<div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between gap-10 px-8 md:px-16 pt-24">

  {/* Left Side */}
  <div className="max-w-2xl">

    <h1 className="text-5xl font-bold mb-6">
      About <span className="text-blue-400">Me</span>
    </h1>

    <p className="text-gray-400 leading-relaxed text-lg">
     
     I am a Machine Learning Developer passionate about building intelligent, data-driven solutions that address real-world challenges. My focus lies in transforming raw data into meaningful insights through machine learning, data analysis, and predictive modeling.
    </p>

    <p className="text-gray-400 leading-relaxed text-lg mt-6">
     I specialize in developing, training, and optimizing machine learning models to extract valuable patterns from complex datasets. My experience includes data preprocessing, feature engineering, model evaluation, performance tuning, and deploying scalable ML solutions. I am continuously exploring new technologies in Artificial Intelligence and Data Science to create impactful and innovative applications.
    </p>

 {/* 
 
 
 */}

    {/* Buttons */}
    <div className="mt-10 flex flex-col sm:flex-row gap-4">

      <button className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold shadow-lg shadow-blue-500/30">
        Download Resume
      </button>
<Link to="/Contact">
      <button className="px-8 py-4 rounded-2xl border border-gray-700 bg-white/5 hover:bg-white/10 transition duration-300 font-semibold">
        Contact Me
      </button>
</Link>
     

    </div>
  




  </div>

  {/* Right Side Image */}
  <div className="group">
    <img
      src={img}
      alt="Sidhanta"
      className="w-72 md:w-96 rounded-3xl mr-20 object-cover border-4 border-blue-500 
      transition duration-500 group-hover:scale-105 
      shadow-2xl shadow-blue-500/20"
    />
  </div>



</div>


     {/* Stats Section */}
  
      <Skill/>
   
      

  </>
  
  )
}

export default About
