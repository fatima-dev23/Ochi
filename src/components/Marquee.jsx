import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div className='w-full pt-8 rounded-t-3xl bg-[#004D43]'>
        <div className="text border-t-1 border-b-1 border-zinc-500 flex gap-20 whitespace-nowrap overflow-hidden">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='font-[FoundersGrotesk] text-[28vw] leading-none uppercase font-bold tracking-normal'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='font-[FoundersGrotesk] text-[28vw] leading-none uppercase font-bold tracking-normal'>we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='font-[FoundersGrotesk] text-[28vw] leading-none uppercase font-bold tracking-normal'>we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee