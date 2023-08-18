import React from 'react'
import { navLinks } from './utils/constants/navLinks'

export const Navbar = () => {
  return (
    <div className='w-full absolute bg-gradient-to-r rounded-xl from-black to-gray-800 flex py-6 justify-between items-center '>Navbar
    <ul className='list-none sm:flex flex-row justify-end items-center flex-1'>
    {
        navLinks.map((link, index)=>(
            <li key={link.id} className={`font-poppings font-normal text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} mr-10 text-white cursor-pointer`} >
                <a  href={`#${link.id}`}>
                {link.title}
                </a>
            </li>
        ))
    }
    </ul>
    </div>
  )
}
