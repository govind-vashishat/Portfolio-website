import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../constants/index"

const Navbar = () => {
  const [hamBurger, setHamburger] = useState(false);

  const toggleHamburger = () => {
    setHamburger(!hamBurger);
  }

  return (
    <nav className='sticky top-0 z-50 p-5 w-full pt-8 border-b border-neutral-900 backdrop-blur-lg'>
        <div className='flex justify-between items-center'>
            <Link to="/">
            <div className='relative bg-gray-300 text-transparent bg-clip-text font-logo text-3xl md:text-3xl lg:text-4xl lg:left-12 top-1 tracking-tight'> <span className='bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text'>Govind</span> Vashishat</div></Link>                                           
            <div className='relative right-16'>
                <div className='hidden lg:flex space-x-12'>
                {navLinks.map((link, index) => {
                  return(  
                  <a                                             
                   href={link.href} target='_blank'
                   key={index}
                   className='text-gray-300 hover:text-white transition duration-150'
                   >
                    {link.icon}
                   </a> 
                   )
                })}
                </div>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end text-2xl'>
            <button onClick={toggleHamburger}>
            {hamBurger? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
            </div>
        </div>
        {hamBurger && (
            <div className='lg:hidden fixed right-0 w-full flex flex-col justify-center items-center py-2 bg-gradient-to-b from-black to-gray-900 transition duration-150 mt-5'>
                {navLinks.map((link, index) => {
                  return(  
                  <a 
                   href={link.href} target='_blank'
                   key={index}
                   className='text-gray-300 hover:text-white transition duration-150 py-4 mt-2'
                   >
                    {link.icon}
                   </a> 
                   )
                })}
            </div>
        )}
    </nav>
  )
}

export default Navbar