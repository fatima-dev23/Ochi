import React from 'react';
import Eyes from './Eyes'; // Import Eyes component

function Ready() {
    return (
        <div className='relative w-full bg-[#CDEA68] flex flex-col items-center justify-center'>
            {/* Text Structure */}
            <div className='textstructure pt-16 py-20 relative z-0'>
                {["ready", "to start", "the project?"].map((items, index) => {
                    return (
                        <div className="masker" key={index}>
                            <h1 className='font-[FoundersGrotesk] uppercase text-[17vw] text-[#212121] text-center leading-38 font-bold'>
                                {items}
                            </h1>
                        </div>
                    );
                })}
            </div>

            <div className="buttons -mt-8">
                <button className='px-6 py-4 border-2 border-zinc-900 bg-[#212121] uppercase rounded-full flex items-center justify-center gap-8 text-sm font-[NeueMontreal]'>start the project
                    <div className="circle w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
                <h2 className='text-black font-[NeueMontreal] uppercase text-center mt-3 mb-3 font-lighter'>or</h2>
                <button className='px-6 py-4 border-1 border-zinc-900 mb-3 uppercase rounded-full flex items-center justify-center gap-8 text-sm text-black font-[NeueMontreal]'>hello@ochi.design
                    <div className="circle w-2 h-2 bg-zinc-900 rounded-full"></div>
                </button>
            </div>

            {/* Eyes Component (Overlapping the Text) */}
            <div className="absolute top-52 left-1/2 -translate-x-[50%] -translate-y-[50%] z-10">
                <Eyes />
            </div>
        </div>
    );
}

export default Ready;
