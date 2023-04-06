
import { useEffect } from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import NavBar from './components/navbar/NavBar'
import ScrollTop from './components/scrollTop/ScrollTop'
import Skills from './components/skills/Skills'
import Work from './components/work/Work'

import VanillaTilt from 'vanilla-tilt';



function App() {

  useEffect(()=> {
    VanillaTilt.init(document.querySelectorAll('.tilt'),{
      max : 10,
    })
  })

  return (
    <>

      <NavBar/>

      <Hero/>

      <About/>

      <Skills/>

      <Education/>

      <Work/>

      <Contact/>

      <Footer/>

      <ScrollTop/>

    </>
  )
}

export default App
