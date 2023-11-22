import React from 'react'
import Hero from '../components/about/Hero'
import Story from '../components/about/Story'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonial'
import WhyUs from '../components/about/WhyUs'
import Team from '../components/about/Team'


const aboutPage = () => {
  return (
    <>
      <Hero className="pt-52 pb-24" />
      <Story/>
      <WhyUs className="pt-52 pb-0"/>
      <Testimonial className="pt-10 lg:pt-44 pb-10 lg:pb-32"/>
      <Team className="py-10 lg:py-32"/>
      <Subscribe className="py-5 lg:py-32 bg-orange-300"/>
    </>
  )
}

export default aboutPage
