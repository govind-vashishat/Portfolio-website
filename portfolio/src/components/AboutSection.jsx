import React from 'react'
import profile from "../assets/profile.jpg";

const AboutSection = () => {
  return (
    <div className='lg:mt-20 mt-10'>
        <div className='flex flex-wrap items-center'>
          <div className='flex flex-col justify-center items-center lg:items-start w-full lg:w-1/2 p-5'>
          <h1 className='font-logo text-4xl text-gray-200 md:text-5xl lg:text-6xl py-3'>Hey there,</h1>
          <h1 className='py-1 pb-5 text-3xl md:text-4xl lg:text-5xl bg-blue-500 text-transparent bg-clip-text'>Full stack developer</h1>
          <p>I am a 20 year old Full stack developer based in India, with a strong focus on creating high-quality applications that prioritize user experience. With a deep understanding of both front-end and back-end technologies.</p>
          </div>
          <div className="flex justify-center w-full lg:w-1/2 p-5">
          <img src={profile} alt="profile" className='border border-blue-500 rounded-full' />
          </div>
        </div>
        </div>
  )
}

export default AboutSection