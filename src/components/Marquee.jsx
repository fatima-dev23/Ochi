import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full pt-8 rounded-t-318l bg-[#004D43] rounded-t-2xl'>
      <div className="text border-t-1 border-b-1 border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 18 }} className='font-[FoundersGrotesk] pr-10 text-[28vw] leading-none uppercase font-bold tracking-normal'>we are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 18 }} className='font-[FoundersGrotesk] pr-10 text-[28vw] leading-none uppercase font-bold tracking-normal'>we are ochi</motion.h1>
        <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 18 }} className='font-[FoundersGrotesk] pr-10 text-[28vw] leading-none uppercase font-bold tracking-normal'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee