import React from 'react'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'

const Display = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}

export default Display