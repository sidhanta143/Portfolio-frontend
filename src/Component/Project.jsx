import React from 'react'
import Experience from './Experience'
import Navbar from './Navbar'

const projects = [
  {
    title: 'AI-Powered-Career-Internship-Platform-for-BPUT-Students',
    description:
      'An AI-powered platform that helps students choose better career paths and improve their skills.',
    tech: ['React', 'Firebase', 'AI', 'Tailwind CSS'],
    github: 'https://github.com/sidhanta143/AI-Powered-Career-Internship-Platform-for-BPUT-Students.git',
    demo: '#',
  },
  {
    title: 'Food-Delivery-Website ',
    description:
      'A food delivery website built with React and Firebase, featuring a modern design and seamless user experience.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/sidhanta143/Food-Delivery-Website.git',
    demo: '#',
  },
  {
    title: 'Task-Management-Web-App',
    description:
      'A task management web app built with React and Firebase, featuring a modern design and seamless user experience.',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    github: 'https://github.com/sidhanta143/FullStack-Web-Development--Intenship-Task-3-TaskManagement-App-in-DB-.git',
    demo: '#',
  },
  {
    title: 'k72yt-website ',
    description:
      'A k72yt-website build with React ,moden design with animated wesite .',
    tech: ['React', 'Tailwind CSS','javascript'],
    github: 'https://github.com/sidhanta143/k72yt-website.git',
    demo: '#',
  },
  {
    title: 'Movie Recommendation System',
    description:
      'A machine learning based recommendation system that suggests movies based on user interests.',
    tech: ['Python', 'Pandas', 'Machine Learning'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Backend development  using mongo-DB',
    description:
      'A backend development project using MongoDB to create a RESTful API for a web application.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    github: '#',
    demo: '#',
  },
]
const Project = () => {
  return (
    <>

  <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20 relative overflow-hidden">
    <Navbar/>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          My <span className="text-blue-400">Projects</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Here are some projects I’ve built while learning AI/ML and Full Stack Development.
        </p>
      </div>

      {/* Project Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl shadow-blue-500/10"
          >
            <h2 className="text-2xl font-bold text-blue-400">
              {project.title}
            </h2>

            <p className="mt-4 text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-6">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <a
                href={project.github}
                className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition duration-300 font-semibold"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                className="px-6 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300 font-semibold"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
      <Experience/>
      
    </div>
    </>
  )
}

export default Project


