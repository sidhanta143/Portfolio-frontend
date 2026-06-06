import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Projects from './Component/Project'
import Skill from './Component/Skill'

const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
     <Route path="/Projects" element={<Projects/>}></Route>
    <Route path="/Contact" element={<Contact/>}></Route>
    <Route path="/skill" element={<Skill/>}></Route>
   

   </Routes>
   
   
   </BrowserRouter>
  )
}

export default App