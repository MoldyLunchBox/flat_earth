import React from 'react'

export const GetInvolved = () => {
    return (
            <div className='flex  w-full flex-row h-full items-center space-x-4 '>

                <div className='flex space-y-4 flex-col w-full h-1/2  justify-center  text-white '>
                    <div className='text-3xl font-semibold bg-gradient-to-r text-transparent bg-clip-text from-[#4d7c0f] to-[#777777]'>Where's the Edge?</div>

                    <div className='text-xl font-poppings '>Lost at the edge of the world?  where the world's a disc and laughter echoes endlessl? Don't worry, Join us at the horizon of hilarity, where laughter knows no curvature.</div>
                    <button className="ml-auto rounded-lg px-4 py-2 text-lg  bg-gradient-to-r from-black to-gray-800  w-fit">Join us </button >
                </div>
                <div id="threejs" className='h-1/2   text-white w-full '>
                </div>
            </div>
    )
}
