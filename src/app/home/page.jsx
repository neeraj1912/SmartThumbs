"use client"
import React from 'react'
import Navbar from "./navbar"
import Hero from "./heroSection"
import AnimatedBeamMultipleOutputDemo from "./content"
import LinkPreviewDemo from "./preview"
import AppleCardsCarouselDemo from "./appleCarousel"
import AnimatedTestimonialsDemo from './testimonials'
import Footer from "./footer"  // Note the capital F

const Home = () => {
  return (
    <div className='bg-black text-white min-h-screen'>
      <Navbar />
      <Hero />
      <AnimatedBeamMultipleOutputDemo/>
      <LinkPreviewDemo/>
      <AppleCardsCarouselDemo />
      <AnimatedTestimonialsDemo/>
      <Footer />  
    </div>
  )
}

export default Home