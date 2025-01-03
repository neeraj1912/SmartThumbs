"use client"
import React from 'react'
import Navbar from "./navbar2"
import Hero from "./heroSection2"
import AnimatedBeamMultipleOutputDemo from "./content2"
import LinkPreviewDemo from "./preview2"
import AppleCardsCarouselDemo from "./appleCarousel2"
import AnimatedTestimonialsDemo from './testimonials2'
import Footer from "./footer2"  // Note the capital F

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