import React from 'react'

function Eyes() {
    return (
        <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full">
                <div className="bg-zinc-900 w-22 h-22 flex items-center justify-center rounded-full">
                    <div className="line w-full h-8 text-center">
                        <div className="bg-zinc-100 w-4 h-4 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-[12vw] h-[12vw] bg-zinc-100 rounded-full">
                <div className="bg-zinc-900 w-22 h-22 flex items-center justify-center rounded-full">
                    <div className="line w-full h-8 text-center">
                        <div className="bg-zinc-100 w-4 h-4 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes