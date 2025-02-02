import React from 'react'
// import { FaArrowUpLong } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

function Landing() {
    return (
        <>
            <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
                <div className='textstructure pt-16 sm:pt-8 md:pt-16 lg:pt-32 px-8 sm:px-4 md:px-8 lg:px-16 py-20'>
                    {["We Create", "Eye-Opening", "Presentations"].map((items, index) => {
                        return <div className="masker" key={index}>
                            <h1  className='font-[FoundersGrotesk] uppercase text-sm sm:text-[36px] md:text-[100px] lg:text-[130px] leading-25 font-bold'>
                                {items}
                            </h1>
                        </div>
                    })}
                </div>
                <div className="border-t border-zinc-700 flex flex-col md:flex-row md:items-center md:gap-80 font-[NeueMontreal]">
                    <div className="flex flex-col md:flex-row md:gap-70">
                        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                            <p key={index} className='text-md font-light items-center tracking-tight mt-3 px-4 py-2 leading-none'>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="startBtn flex justify-center items-center gap-1 mt-3 md:mt-0">
                        <div className='uppercase mt-3 tracking-wide font-light text-sm px-2 py-1 border border-zinc-500 rounded-full'>
                            start the project
                        </div>
                        <div className="w-8 h-8 mt-3 flex items-center justify-center rounded-full border border-zinc-500">
                            <span>
                                <MdArrowOutward />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Landing