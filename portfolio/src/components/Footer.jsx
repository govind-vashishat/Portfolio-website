import React from 'react'
import { FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='border-t border-neutral-900'>
       <div className='bg-gray-300 text-transparent bg-clip-text font-logo text-3xl md:text-3xl lg:text-4xl mt-5 text-center tracking-tight'> <span className='bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text'>Govind</span> Vashishat</div>

       <div className='relative flex justify-center items-center mt-3 mb-2 gap-1 text-lg font-logo'>
        Mail <span className='text-blue-500'>me</span>
        <a href="mailto:vashishatgovind@gmail.com"><FaEnvelope /></a>
        :
       </div>
       <p className='relative bottom-3 text-center mt-1 text-sm text-neutral-500'>vashishatgovind@gmail.com</p>
    </footer>
  )
}

export default Footer