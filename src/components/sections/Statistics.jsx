import React from 'react'
import { Stats } from '../Stats'

export const Statistics = () => {
    return (
        <div className=' max-w-[1000px]  mx-auto '>
            <div className='flex    flex-col lg:flex-row h-full items-center space-y-4  lg:space-y-0 lg:space-x-4'>

                <div className="hero bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src="/images/dry.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Box Office News!</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                           <Stats />
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
