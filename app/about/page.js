import React from 'react'
import Hero from '../components/about/Hero'
import Story from '../components/about/Story'
import Subscribe from '../components/Subscribe'
import Testimonial from '../components/Testimonial'


const page = () => {
  return (
    <section>
      <Hero className="pt-52 pb-24" />
      <Story/>
      <Testimonial className="py-6 lg:py-32"/>
      <Subscribe className="py-16 pt-24  lg:py-32 bg-orange-300"/>
    </section>
  )
}

export default page
