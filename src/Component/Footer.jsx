import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
       <div className="w-full mt-40">

<footer className="footer footer-horizontal footer-center  text-base-content rounded p-10">
  <nav className="grid grid-flow-col gap-4">
      <a href='/' className="link link-hover">Home</a>
    <a href='/About' className="link link-hover">About us</a>
    <a href='/Contact' className="link link-hover">Contact</a>
    <a href='/Projects' className="link link-hover">Project</a>
    <a href='/Skill' className="link link-hover">Skill</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/sidhanta143" target="_blank" rel="noopener noreferrer">
    <a href="https://www.linkedin.com/in/g-sidhanta-dora-b4ba2432a"></a>
      <FaGithub className="w-6 h-6" />
    </a>
    <a href="https://www.linkedin.com/in/g-sidhanta-dora-b4ba2432a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">
      <FaLinkedin className="  md:w-6  md:h-6" />
    </a>
    </div>
  </nav>
 <h1>
  Made By- <span className='text-blue-300 text-2xl font-bold'>G Sidhanta Dora</span>
 </h1>
</footer>
</div>
  )
}

export default Footer
