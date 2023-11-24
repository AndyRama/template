import Link from 'next/link'
import React from 'react'
import Hero from '../components/about/Hero'
// import Projects1 from '../components/projects1/Project'
import Projects1 from '../components/projects1/Project'
import desktop from './../../public/images/desktop.jpg';

import Image from 'next/image'
import CTA from '../components/projects/CTA'

export const metadata = {
  title: "Projects - Lemurian by Andy Ramaroson"
}

const page = () => {
  return (
    <>
      {/* Add the Image component for the banner */}
      <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects">
        <div>
          <Image
            src={desktop}
            alt="Banner Image Alt Text"
            layout="responsive"
            width={1240} // Adjust the width and height based on your image dimensions
            height={400}
            className='pb-20 -mt-48'
          />
        </div>
      </Hero>

      <Projects1 className="pt-0 pb-52" itemsPerPage={6}/>
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
