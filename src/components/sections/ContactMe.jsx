import React, { useRef, useState } from 'react'
export const ContactMe = () => {
    const form = useRef(null);
    const [sent, setSent] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSent(true)
    }
    return (
        <div className='flex items-center justify-center'>
            <div className="bg-white  shadow-inner shadow-[#454552] rounded-xl">
                <div className='w-full shadow-[#454552] rounded-xl shadow-lg p-4'>
                    <div className='flex justify-center  text-center pb-3 text-white '>
                        <div className='w-fit flex flex-row gap-1 rounded-xl bg-gradient-to-tr to-slate-600 from-[gray] px-2 py-1 align-center '>
                            <div className='bg-white w-1 h-1 rounded-full'></div>
                            <div className='bg-white w-1 h-1 rounded-full'></div>
                            <div className='bg-white w-1 h-1 rounded-full'></div>
                            <div className='bg-white w-1 h-1 rounded-full'></div>
                            <div className='bg-white w-1 h-1 rounded-full'></div>
                        </div>
                    </div>
{
    !sent ? 
                    <form action="" ref={form} className="flex  flex-col gap-4 p-2 bg-gradient-to-tr from-slate-400 bg-[#e4e4ec]">
                        <h2 className="uppercase font-bold  text-center text-black"> Contact Us</h2>
                        <input placeholder="Title" name="title" className="bg-[#ffffff] text-black p-2 rounded-[2px]" type="text" />
                        <input placeholder="Your email" name="email" className="bg-[#ffffff] p-2 text-black rounded-[2px]" type="email" />
                        <textarea placeholder="Type your message" name="message" className="resize-none  bg-[#ffffff] font-mono font-poppings text-black rounded-[2px] p-4" cols={30} rows={10}></textarea>
                        <div className='flex justify-end'>
                            <button onClick={handleSubmit} type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                                Send
                            </button>
                        </div>
                    </form> : 
                  <figure className='w-[325px] h-[521px] mb-2'>
                  <img src="/images/xp.jpg" alt="Shoes" className="object-contain h-full w-full" />
                </figure>
                
}
                    <div className='w-full pt-3  '>
                        <div className="w-12 h-12 mx-auto bg-gray-300 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
