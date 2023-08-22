import React, { useCallback } from 'react'
import { ParticlesContainer } from '../ParticlesContainer'
export const GetInvolved = () => {


    return (

        <div className='flex max-w-[1000px] mx-auto flex-row h-full items-center space-x-4'>
        <div className="flex relative flex-col justify-center p-8">
                <ParticlesContainer />
                <h2 className="text-4xl font-bold text-white mb-4">Protecting Our Earth</h2>
                <p className="text-white">
                    Let's join hands to preserve the beauty of our planet. Every small step we take matters,
                    from recycling to reducing our carbon footprint. Together, we can make a difference.
                </p>
                <button className="ml-auto rounded-lg text-white px-4 py-2 text-lg  bg-gradient-to-r from-black to-gray-800  w-fit">Join us </button >
            </div>
            <div className="card  bg-base-100 w-full  shadow-xl">
                <figure><img src="/images/tinyTree.jpg" alt="Shoes" /></figure>
                <div className="card-body bg-white">
                    <h2 className="card-title">
                        Shoes!
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
