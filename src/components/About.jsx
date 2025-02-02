import React from 'react'
import aboutImg from '../assets/our-approach-ochi.jpg'

function About() {
  return (
    <div className='w-full py-20 bg-[#CDEA68] rounded-t-3xl'>
      <h1 style={{ fontFamily: 'NeueMontreal, sans-serif' }} className='text-black tracking-wide leading-12 text-[4vw] px-12 mb-18'>Ochi is a strategic presentation agency for forward-thinking businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>, <u>ex­plain com­plex ideas</u>, and <u>hire great peo­ple</u>.</h1>
      <div className='w-full border border-[#bed275]'></div>
      <div className="w-full grid grid-cols-12 gap-4">
        <div className="col-span-6 mt-2 px-12">
          <h1 className='text-black text-[4vw] font-[NeueMontreal]'>Our approach:</h1>
          <button className='flex gap-12 items-center uppercase mt-2 bg-[#121111] text-white text-[14px] rounded-full px-4 py-4 font-[NeueMontreal]'>read more
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
          </button>
        </div>
        <div style={{backgroundImage: `url(${aboutImg})`}} className="col-span-6 items-center mx-7 mt-3 h-[70vh] rounded-lg bg-cover bg-[url('./src/assets/our-approach-ochi.jpg')]">
          {/* <img className='rounded-xl' src="src\assets\our-approach-ochi.jpg" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default About