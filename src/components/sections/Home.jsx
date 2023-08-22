import React from 'react'
import ThreeScene from '../ThreeScene'
import { Navbar } from '../Navbar'

export const Home = () => {
    return (
        <div className='relative w-full items-center h-full  '>
            <Navbar />
            <div className=' max-w-[1000px] h-full  mx-auto '>
            <div className='flex    flex-col lg:flex-row h-full items-center space-y-4  lg:space-y-0 lg:space-x-4'>

                <div className="flex relative p-4 flex-col h-full justify-center ">
                    <h2 className="text-4xl font-bold text-white mb-4">Earth!</h2>
                    <p className="text-white">
                    Lost at the edge of the world?  where the world's a disc and laughter echoes endlessl? Don't worry, Join us at the horizon of hilarity, where laughter knows no curvature.
                    </p>
                    <button className="ml-auto   hidden lg:inline-block rounded-lg text-white px-4 py-2 text-lg  bg-gradient-to-r from-black to-gray-800  w-fit">Join us </button >
                </div>
                <div id="threejs"  className="  h-[50%]    w-full max-w-lg">
                 <ThreeScene/>

                </div>
                    <button className=" lg:hidden rounded-lg  text-white px-4 py-2 text-lg  bg-gradient-to-r  from-black to-gray-800  w-fit">Join us </button >
            </div>
        </div>

       
        </div>
    )
}
