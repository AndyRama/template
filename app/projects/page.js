import Link from 'next/link'
import React from 'react'
import Hero from '../components/about/Hero'
import Projects from '../components/projects/Projects'

import Image from 'next/image'
import CTA from '../components/projects/CTA'


export const metadata = {
  title: "Projects - Lemurian by Andy Ramaroson"
}

const page = () => {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects"/>
      <Projects className="pt-0 pb-52" itemsPerPage={4}/>
      <CTA
        className="py-32 lg:py-32 bg-orange-600"
        cta_label="Get in touch"
        cta_link="contact/"
        title="Do you have project in mind ?"
        description="After making these adjustments, try running your tests again.
          If the issues persist, review the Jest documentation and the documentation."
      />
    </>
  )
}

export default page
