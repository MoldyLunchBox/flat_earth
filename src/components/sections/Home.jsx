import React from 'react'
import ThreeScene from '../ThreeScene'

export const Home = () => {
    return (
        <div className=' flex flex-row w-full items-center space-x-4 h-[100vh]  '>

            <div className='w-full h-1/2 bg-yellow-300 text-white'> one</div>
            <div id="threejs" className='h-1/2 bg-pink-300 text-white w-full '>
 two
            </div>
        </div>
    )
}
