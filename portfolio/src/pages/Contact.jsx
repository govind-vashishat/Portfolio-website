import React, { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from "react-toastify"

const Contact = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setform({...form, [e.target.name]: e.target.value});
  }

  const resetForm = () => {
    setform({
        name: '',
        email: '',
        message: '',
    });
}; 

  const generateMessage = (err) => {
    toast(err, {
      style: {
        backgroundColor: '#111827',
        color: '#ffffff'
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
                                               
    if(form.email && form.message) {
      try {
        const {data} = await axios.post("http://localhost:8000/api/post", form)
        console.log(data);
        generateMessage(data.msg)
      } catch (error) {
        generateMessage(error);
      } finally {
        resetForm();
      }
    }
  }

  return (
    <>
<section className='max-w-7xl mx-auto py-20'>
  <div className='font-logo bg-gradient-to-r from-gray-300 to-gray-400 text-center text-3xl lg:text-4xl tracking-wide text-transparent bg-clip-text mb-20 lg:mb-10'>
        Connect with 
        <span className='bg-blue-500 text-transparent bg-clip-text ml-2'>me</span>
  </div> 

  <form onSubmit={handleSubmit}> 
<div className='space-y-10'>
<div class="max-w-md mx-auto">
  <div class="mb-5">

    <label 
    for="username-success" 
    class="block mb-2 text-sm font-medium text-white font-logo"
    >
    Your name
    </label>

    <input 
    type="text" 
    id="username-success" 
    name="name" 
    value={form.name} 
    onChange={handleChange}
    class="border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full p-2.5 bg-gray-700" placeholder="your name" />
  </div>
</div>


<div class="max-w-md mx-auto">
  <label 
  for="email-address-icon" 
  class="block mb-2 text-sm font-medium  text-white font-logo"
  >
  Your Email
  </label>

  <div class="relative">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
    </div>
    <input 
    type="text" 
    id="email-address-icon" 
    name="email" 
    value={form.email}
    onChange={handleChange} 
    class="border text-sm rounded-lg focus:ring-blue-900 focus:border-blue-900 block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white" 
    placeholder="name@example.com" />
  </div>
</div>

    <div class="max-w-md mx-auto">
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white font-logo">Your message</label>
      <textarea 
      id="message" 
      name='message' 
      value={form.message}
      onChange={handleChange}
      rows="4" 
      class="block p-2.5 w-full text-sm text-white rounded-lg border focus:ring-blue-900 focus:border-blue-900 bg-gray-700 border-gray-600 placeholder-gray-400" 
      placeholder="Leave a message..."
      ></textarea>
    </div>
  </div> 

    <div className='flex justify-center items-center mt-10'>
    <button type='submit' className=' text-white font-logo px-4 py-2 bg-blue-600 rounded-full'>
      Submit
    </button>
    </div>
  </form>
  <ToastContainer />
</section>
</>
  )
}

export default Contact