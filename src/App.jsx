import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/hero'
import About from './Components/Abouts'
import Project from './Components/Project'
import Skills from './Components/Skills'
import Qualification from './Components/Qualification'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ChatBox from './Components/Chatbox'  



const App = () => {
  return (
    <>
      <Navbar/>
       <Hero/>
        <About/>
        <Project/>
        <Skills/>
        <Qualification/>
        <Contact/>
        <Footer/>
        <ChatBox/>
       
    
    </>
  )
}

export default App