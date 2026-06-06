import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import axios from 'axios';
// const { useNavigate } = require('react-router-dom');
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Contact = () => {
  // const navigate=useNavigate()

const handlesubmit = async (e) => {
    e.preventDefault();
    
   

    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
    };

    try {
        const res = await axios.post(
            "http://localhost:3000/create-post",
            data
            // navigate("/About");
        );
     
        alert("your message has been sent successfully");
        console.log(res.data);
    } catch (err) {
        console.log(err);
    }
};

  return (
    <>
      <Navbar />

    <div className="bg-black text-white px-6 md:px-20 py-20">
  <h1 className="text-4xl md:text-5xl font-bold mb-12">
    Contact <span className="text-blue-400">Me</span>
  </h1>

  <div className="grid md:grid-cols-2 gap-10 items-start">

   
   
   
    {/* Left Side */}
    <div className="flex flex-col gap-3">

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition duration-300">
        <h2 className="text-xl font-bold text-blue-400">📩Email</h2>
        <p className="text-gray-300 mt-2">sidhantadora143@gmail.com</p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition duration-300">
        <h2 className="text-xl font-bold text-blue-400">📱 Phone</h2>
        <p className="text-gray-300 mt-2">+91 7684809313</p>
      </div>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:scale-105 transition duration-300">
        <h2 className="text-xl font-bold text-blue-400">📍Location</h2>
        <p className="text-gray-300 mt-2">Berhampur, Odisha</p>
      </div>




  {/* icons sections */}

<div className="flex gap-6 mt-15 ">
  <a href="https://github.com/sidhanta143" target="_blank"rel="noopener noreferrer"
  >
    <FaGithub className="w-10 h-10 hover:text-blue-400 duration-300" />
  </a>

  <a
    href="https://www.linkedin.com/in/g-sidhanta-dora-b4ba2432a"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="w-10 h-10 hover:text-blue-400 duration-300" />
  </a>
</div>
    </div>

  


 {/* Right Side Form */}
    <form
      onSubmit={handlesubmit}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl shadow-blue-500/10"
    >
      <h1 className='text-3xl text-center text-blue-400 mb-10 font-bold'>Send Message</h1>
      <div className="flex flex-col gap-6">
        <input type="text"name="name" placeholder="Your Name"className="border h-12 border-white/15 rounded-full px-4"
        />

        <input type="email" name="email"placeholder="Your Email"
          className="border h-12 border-white/15 rounded-full px-4"
        />

        <textarea name="message" rows="5" placeholder="Write your message"
          className="border rounded-xl p-4"
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-full"
        >
          Send Message
        </button>
      </div>
      
    </form>
  
  </div>
</div>

      <Footer />
    </>
  );
};

export default Contact;