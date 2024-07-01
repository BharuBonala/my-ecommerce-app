import React from 'react'
import Navbar from './Navbar'
import HomeContent from './HomeContent'
import Category from './Category'
import FeaturedProducts from './FeaturedProducts'
import LatestProducts from './LatestProducts'
import OfferSection from './OfferSection'
import TestimonialSection from './TestimonialSection'
import BrandsSection from './BrandsSection'
import FooterSection from './FooterSection'

const HomePage = () => {
  return (
    <>
    <div className='bg-container'>
    <Navbar/>
    <HomeContent/>
    </div>
    <Category/>
    <FeaturedProducts/>
    <LatestProducts/>
    <OfferSection/>
    <TestimonialSection/>
    <BrandsSection/>
    <FooterSection/>
    </>
  )
}

export default HomePage