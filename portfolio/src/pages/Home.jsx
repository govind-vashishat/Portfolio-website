import React from 'react'
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import TechStacks from '../components/TechStacks';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <>
    <section className='max-w-7xl mx-auto py-20'>
      <ContactSection />
      <AboutSection />
      <TechStacks />
      <Projects />
    </section>
    </>
  )
}

export default Home