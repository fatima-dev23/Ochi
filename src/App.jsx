import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Play from './components/Play'

function App() {
  return (
    <div className='bg-zinc-900 w-full min-h-screen text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Play />
    </div>
  )
}

export default App;