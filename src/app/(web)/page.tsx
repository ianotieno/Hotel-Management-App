

import Gallery from '@/Components/Gallery/Gallery'
import HeroSection from '@/Components/HeroSection/HeroSection'
import PageSearch from '@/Components/pageSearch/PageSearch'
import NewsLetter from '@/Components/NewsLetter/NewsLetter'
import React from 'react'
import FeaturedRoom from '@/Components/FeaturedRoom /FeaturedRoom'
import { getFeaturedRoom } from '@/libs/apis'

const Home = async () => {
const featuredRoom =await getFeaturedRoom();


  return (
    <>
    <HeroSection/>
    <PageSearch/>
    <FeaturedRoom featuredRoom ={featuredRoom }/>
    <Gallery/>
    <NewsLetter/>
    </>
  )
}

export default  Home