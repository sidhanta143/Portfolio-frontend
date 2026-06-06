import React from 'react'
import Navbar from './Navbar'
import img from '../assets/sidhu.png'
import resume from '../assets/CV.png'
import About from './About'
import { Link } from 'react-router-dom'
import Project from './Project'

const Home = () => {
  
  return (
  
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <Navbar/>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-20 gap-12">

   {/* Left Content */}
 <div className="group">
          <img
            src={img}
            alt="Sidhanta"
            className="w-72 md:w-96 rounded-3xl mt-20 object-cover border-4 border-blue-500 
            transition duration-500 group-hover:scale-105
            shadow-2xl shadow-blue-500/20"
          />
        </div>
       {/* Right Image */}
        <div className="max-w-2xl text-center md:text-left">

          <h1 className="text-5xl md:text-7xl  font-extrabold leading-tight hover:text-blue-300 transition duration-300">
            Hii ,  I'm
            <span className=" text-blue-400 mr- -10 hover:text-blue-200 "> Sidhanta</span>
          </h1>

          <h3 className="text-2xl md:text-3xl font-bold mt-4 text-blue-400">
           AI/ML Engineer
          </h3>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
          Aspiring Data Scientist and AI/ML Engineer with hands-on experience in data analysis, machine learning, and model deployment. skilled in Python, machine learning, data analysis, and model deployment. Passionate about transforming data into actionable insights and developing intelligent solutions for real-world problems.
          and also I enjoy building modern websites, real-world projects, and learning new technologies.


          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

        <Link to="/Projects">
          <button className="px-8 py-4 rounded-2xl bg-blue-500  hover:bg-blue-600 transition duration-300 font-semibold shadow-lg shadow-blue-500/30">
           
              View Projects
            
            </button>
          </Link>

            <button className="px-8 py-4 rounded-2xl border border-gray-700 bg-white/5 hover:bg-white/10 transition duration-300 font-semibold">
              <a href={resume} download>
                Download Resume
            
            </a></button>

          </div>
        </div>

      
       

      </section>

   

      <About/>
    </div>
  )
}

export default Home