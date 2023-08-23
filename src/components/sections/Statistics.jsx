import React from 'react'
import { Stats } from '../Stats'

import SvgForrest from '../SvgForrest'

export const Statistics = () => {
    return (
        <div className='max-w-[1000px] p-5  mt-10  mx-auto'>
            <div className='flex flex-col lg:flex-row h-full items-center space-y-4  lg:space-y-0 lg:space-x-4'>
                <div className=" bg-base-200 justify-center text-center">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/images/dry.jpg" className="max-w-sm  w-[200px] sm:w-fit rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Crisis Mode</h1>
                            <p className="py-6">The Earth's delicate ecosystems are collapsing under the weight of pollution, deforestation, and climate change.</p>
                           <Stats />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
