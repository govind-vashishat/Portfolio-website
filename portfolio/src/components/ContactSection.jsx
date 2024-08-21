import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <div className='flex flex-col justify-center items-center py-5'>
        <div className='font-logo bg-gradient-to-r from-gray-300 to-gray-400 text-center text-3xl lg:text-4xl tracking-wide text-transparent bg-clip-text'>
        Get in touch with <span className='bg-blue-500 text-transparent bg-clip-text'>me</span>
        </div> 
        <Link to="/contact">
        <button className='mt-5 text-white font-logo px-4 py-2 bg-blue-600 rounded-full'>
          Contact Me
        </button>
        </Link>
        </div>
  )
}

export default ContactSection