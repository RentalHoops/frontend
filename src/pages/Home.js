import React from 'react'
import BannerSection from '../components/home/BannerSection'
import Service01 from '../components/home/Service01'
import ChooseUs from '../components/home/ChooseUs'
import Feature01 from '../components/home/Feature01'
import OurServices from '../components/home/OurServices'
import SearchOut from '../components/home/SearchOut'
import ContactAgent from '../components/home/ContactAgent'

const Home = () => {
  return (
	<div className='relative text-black mt-10'>
    <BannerSection />
    <Service01 />
    <ChooseUs />
    <Feature01 />
    <OurServices />
    <SearchOut />
    <ContactAgent />
  </div>
  )
}

export default Home