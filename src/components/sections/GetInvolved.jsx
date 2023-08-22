import React, { useCallback } from 'react'
import { ParticlesContainer } from '../ParticlesContainer'
export const GetInvolved = () => {


    return (

        <div className=' max-w-[1000px]  mx-auto '>
            <div className='flex    flex-col lg:flex-row h-full items-center space-y-4  lg:space-y-0 lg:space-x-4'>

                <div className="flex relative p-4 flex-col h-full justify-center ">
                    <ParticlesContainer />
                    <h2 className="text-4xl font-bold text-white mb-4">Protecting Our Earth</h2>
                    <p className="text-white">
                        Let's join hands to preserve the beauty of our planet. Every small step we take matters,
                        from recycling to reducing our carbon footprint. Together, we can make a difference.
                    </p>
                    <button className="ml-auto   hidden lg:inline-block rounded-lg text-white px-4 py-2 text-lg  bg-gradient-to-r from-black to-gray-800  w-fit">Join us </button >
                </div>
                <div className="card  bg-base-100   w-[60%] max-w-lg  shadow-xl">
                    <figure><img src="/images/tinyTree.jpg" alt="Shoes" /></figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title">
                            Earth!
                            <div className="badge bg-[green]">2.0</div>
                        </h2>
                        <p>Every small effort towards preserving our planet today ensures a greener and healthier tomorrow</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Learn more</div>
                            <div className="badge badge-outline">Donate</div>
                        </div>
                    </div>

                </div>
                    <button className=" lg:hidden rounded-lg text-white px-4 py-2 text-lg  bg-gradient-to-r  from-black to-gray-800  w-fit">Join us </button >
            </div>
        </div>
    )
}
