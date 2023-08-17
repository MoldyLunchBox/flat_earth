import React from 'react'
import ThreeScene from '../ThreeScene'

export const Home = () => {
    return (
        <div className=' flex w-full bg-white h-[100vh]  '>

            <div className='w-full h-1/2 bg-yellow-300 text-white'> one</div>
            <div id="threejs" className='bg-white w-full '>
 two
                {/* <ThreeScene /> */}
            </div>
        </div>
    )
}
