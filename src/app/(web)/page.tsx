

import Gallery from '@/Components/Gallery/Gallery'
import HeroSection from '@/Components/HeroSection/HeroSection'
import PageSearch from '@/Components/pageSearch/PageSearch'
import NewsLetter from '@/Components/NewsLetter/NewsLetter'
import React from 'react'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <PageSearch/>
    <Gallery/>
    <NewsLetter/>
    </>
  )
}

export default  Home