import React from 'react'

function Projects() {
    return (
        <div className='w-full py-20 pt-[50px]'>
            <h1 className='font-[NeueMontreal] p-12 mb-1 capitalize text-5xl'>featured projects</h1>
            <div className="w-full border-1 border-zinc-700"></div>
            <div className='px-10 mt-20'>
                <div className="cards w-full flex gap-4 mt-10">
                    <div className="card bg-cover w-1/2 h-[75vh] bg-zinc-700 rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png')]">
                        {/* <img className=' h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" /> */}
                    </div>
                    <div className="card bg-cover w-1/2 h-[75vh] bg-zinc-700 rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png')]">
                        {/* <img className=' h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" /> */}
                    </div>
                </div>
                <div className="cards w-full flex gap-4 mt-10">
                    <div className="card bg-cover w-1/2 h-[75vh] bg-zinc-700 rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png')]">
                        {/* <img className=' h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" /> */}
                    </div>
                    <div className="card border-1 border-zinc-700 bg-cover w-1/2 h-[75vh] bg-zinc-700 rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg')]">
                        {/* <img className=' h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" /> */}
                    </div>
                </div>
                <div className="cards w-full flex gap-4 mt-10">
                    <div className="card bg-cover w-1/2 h-[75vh] bg-zinc-700 rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg')]">
                        {/* <img className=' h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" /> */}
                    </div>
                    <div className="card border-1 border-zinc-600 bg-cover w-1/2 h-[75vh] bg-zinc-700 rounded-lg bg-[url('https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png')]">
                        {/* <img className=' h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects