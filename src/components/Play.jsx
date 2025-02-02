import React from 'react'

function Play() {
    return (
        <div className='play w-full h-screen overflow-hidden'>
            <div className="relative w-full h-full bg-[url('./src/assets/play-bg.jpg')] bg-cover bg-center">
                <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="bg-zinc-900 w-28 h-28 flex items-center justify-center rounded-full">
                            <div className="line w-full h-10 text-center">Play
                                <div className="bg-zinc-100 w-4 h-4 rounded-full"></div>
                            </div>
                            {/* <h1 className="text-white uppercase">play</h1> */}
                        </div>
                    </div>
                    <div className="flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full">
                        <div className="bg-zinc-900 w-28 h-28 flex items-center justify-center rounded-full">
                            <div className="line w-full h-10 text-center">Play
                                <div className="bg-zinc-100 w-4 h-4 rounded-full"></div>
                            </div>
                            {/* <h1 className="text-white uppercase">play</h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Play