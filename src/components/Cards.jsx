import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen flex items-center gap-5 px-12'>
            <div className="cardcontainer h-[62vh] w-1/2">
                <div className='card w-full h-full relative bg-[#004d43] rounded-lg flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                    <button className='absolute bottom-8 left-10 px-3 py-1 rounded-full border-2 border-[#CDEA68] font-["NeueMontreal"] font-bold text-sm text-[#CDEA68]'>&copy;2019-2025</button>
                </div>
            </div>
            <div className="cardcontainer w-1/2 h-[62vh] flex gap-5">
                <div className="card w-1/2 h-full relative bg-zinc-300 rounded-lg flex items-center justify-center">
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                    <button className='absolute bottom-8 left-10 px-3 py-1 rounded-full border-2 border-black font-["NeueMontreal"] font-bold text-sm text-black uppercase'>rating 5.0 on clutch</button>
                </div>
                <div className="card w-1/2 h-full relative bg-zinc-300 rounded-lg flex items-center justify-center">
                    <img className='w-32 rounded-full' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                    <button className='absolute bottom-8 left-10 px-2 py-1 rounded-full border-2 border-black font-["NeueMontreal"] font-bold text-sm text-black uppercase justify-center items-center flex'>business bootcamp alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;