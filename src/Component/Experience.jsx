import React from 'react'
import img1 from '../assets/contributor.png'
import img2 from '../assets/open.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'



import Contact from './Contact'
const experiences = [
  {
    title: 'AI/ML Learner',
    company: 'Self Learning',
    year: '2026 - Started',
    description:
      'Exploring Machine Learning, Data Analysis, and AI-powered applications using Python and modern tools.',
  },
  {
    title: 'Frontend Developer',
    company: 'Personal Projects',
    year: '2024 - Started',
    description:
      'Building responsive and modern web applications using React, Tailwind CSS, and Firebase.',
  },
  {
    title: 'Hackathon Participant',
    company: 'Various Hackathons',
    year: '2025 - Started',
    description:
      'Participated in hackathons and collaborated on innovative projects focused on AI and web technologies.',
  },
  {
    title: 'Open Source Contributor',
    company: 'Gssoc-2026',
    year: '2026 - Started',
    description:
      'Actively contributing to open source projects and communities.',

 


  },
]
const Experience = () => {
  return (
    <>
     <div className="min-h-screen bg-black text-white px-6 md:px-20 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Heading */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">
          My <span className="text-blue-400">Experience</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          My learning journey and development experience in AI/ML and web technologies.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative z-10 mt-20 max-w-5xl mx-auto space-y-10">

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:scale-105 transition duration-300 shadow-xl shadow-blue-500/10"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

              <div>
                <h2 className="text-2xl font-bold text-blue-400">
                  {exp.title}
                </h2>

                <p className="text-gray-300 mt-2">
                  {exp.company}
                </p>
              </div>

              <div>
                <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-gray-300">
                  {exp.year}
                </span>
              </div>

            </div>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              {exp.description}
            </p>
          </div>
        ))}
 
      </div>
   <div className="relative z-10 mt-5 shadow-xl shadow-blue-500/10 max-w-5xl mx-auto">
  <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition duration-300 flex flex-wrap justify-center items-center gap-6">
    <img src={img1} alt="Image 1" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
    <img src={img2} alt="Image 2" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
    <img src={img3} alt="Image 3" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
    <img src={img4} alt="Image 4" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
    <img src={img5} alt="Image 5" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
  </div>
</div>
      
    </div>
  <Contact/>

    </>
  )
}

export default Experience
