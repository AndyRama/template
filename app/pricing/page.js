import Link from 'next/link'
import React from 'react'
import Hero from '../components/about/Hero'
import Pricing from '../components/pricing/Pricing'
import CTA from '../components/projects/CTA'

export const metadata = {
  title: "Pricing - Lemurian by Andy Ramaroson"
}

const page = () => {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Pricing" subTitle="Our Pricing"/>
      <Pricing className="pt-0 pb-52" itemsPerPage={6}/>
      <CTA
        className="py-32 lg:py-32 bg-orange-600"
        cta_label="Get in touch"
        cta_link="contact/"
        title="Get ready for the next battle ?"
        description="After making these adjustments, try running your tests again.
          If the issues persist, review the Jest documentation and the documentation."
      />
    </>
  )
}

export default page
