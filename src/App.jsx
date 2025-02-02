import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Play from './components/Play'
import Projects from './components/Projects'
import Cards from './components/Cards'
import Ready from './components/Ready'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    
    <div className='bg-zinc-900 w-full min-h-screen text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Play />
      <Projects />
      <Cards />
      <Ready />
      <Footer />
    </div>
  )
}

export default App;