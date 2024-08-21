import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill, RiNodejsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const TechStacks = () => {
  return (
    <div className='relative mt-10 lg:mt-20 lg:border-t lg:border-b border-neutral-700 p-10'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='font-logo text-4xl lg:text-5xl'>What i <span className='bg-blue-500 text-transparent bg-clip-text'>work</span> with...</h1> 
            <div className='flex flex-wrap space-x-5 px-1 py-3 gap-5 mt-10'>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 relative left-5 rounded-2xl'>        
            <FaReact size={45} className='text-[#00d8ff]' />
            <h1 className='font-logo font-bold'>React</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 relative left-3 rounded-2xl'>        
            <RiNextjsFill size={45} className='text-[white]' />
            <h1 className='font-logo font-bold'>NextJs</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 rounded-2xl'>        
            <IoLogoJavascript size={40} className='text-[#f7df1e]' />
            <h1 className='font-logo font-bold'>JavaScript</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 rounded-2xl'>        
            <SiTypescript size={34} className='text-[#007ACC]' />
            <h1 className='font-logo font-bold'>TypeScript</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 rounded-2xl'>        
            <RiNodejsFill size={45} className='text-[#3c873a]' />
            <h1 className='font-logo font-bold'>Nodejs</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 rounded-2xl'>        
            <SiExpress size={42} className='text-white' />
            <h1 className='font-logo font-bold'>Express</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 rounded-2xl'>        
            <FaDocker size={45} className='text-[#1D63ED]' />
            <h1 className='font-logo font-bold'>Docker</h1>
            </div>
            <div className='flex justify-center items-center text-gray-300 cursor-pointer gap-3 mb-3 p-2 border border-neutral-700 rounded-2xl'>        
            <FaGitAlt size={45} className='text-[#F1502F]' />
            <h1 className='font-logo font-bold'>Git</h1>
            </div>
            </div> 
        </div>
    </div>
  )
}

export default TechStacks