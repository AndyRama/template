import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const testimonialContent = {
  heading: {
    title: "Developement web",
    subTitle: "How it work",
    description:"From heartwarning testimonials to glowing reviews, these voices reflect the trust and confiance our customers place in us. Lettheir words speak volumesabout the experiences that await you with",
    cta: {
      cta_href:"#",
      cta_label:"Get Started"
    }
  },
  testimonials: [
    {
      img: "/images/person-3-min.jpg",
      name: "Jeremy Prat",
      titleRole: "Coacth Sportif - Bordeaux",
      testimony:
        "Working with lemurian was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to details and creativity excceeded our expectation. Working with this entreprise was a dream come true. They truly understood our vision for our dream home and turned it into a stunning reality. Their attention to details and creativity excceeded our expectation. ",
    },
    {
      img: "/images/person-1-min.jpg",
      name: "Alexandra Moore",
      titleRole: "Interior Designer",
      quote:
        "I've had the privilege of partnering with lemurian an several projects. Their ability to combine functionnality, esthetics, and sustainability in their designs is truly remarkable.their spaces provide the perfect canvas for interior design excellence. ",
    },
    {
      img: "/images/person-2-min.jpg",
      name: "James Mayer ",
      titleRole: "Landscape Architect",
      quote:
        "Collaborate with lemurian on projects has been rewarding experience. Their ability to seamlessly integrate indoor and outdoor spaces, creating a harmonious flow,has elevated the overall design and user experience. ",
    },
  ],
};
const Testimonial2 = () => {
  return (
    <section className='py-20 bl-light'>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-4/12 lg:pr-24 mb-10 lg:mb-0">
            {testimonialContent.heading.subTitle && (
              <span className="inline-block py-0.5 z-50 pl-3
                text-heading font-semibold relative mb-7 before:content-['']
                before:absolute before:w-2/3 before:bg-yellowLight
                before:left-0 before:top-0 before:bottom-0 before:-z-10">
                  {testimonialContent.heading.subTitle}
              </span>
            )}
            {testimonialContent.heading.title && (
              <h2 className="text-heading text-2xl lg:text-4xl font-bold">
                {testimonialContent.heading.title }
              </h2>
            )}

            {testimonialContent.heading.title && (
              <p className="leading-relaxed mb-10">
                {testimonialContent.heading.description }
              </p>
            )}

            {testimonialContent.heading.cta.cta_label && (
              <p>
                <Link href={testimonialContent.heading.cta.cta_href}
                className='py-4 px-5 bg-orange-400 text-white rounded-md duration-300
                transition-all ease-in-out hover:bg-white hover:shadow-lg inline-block relative top-0'>
                  {testimonialContent.heading.cta.cta_label}
                </Link>
              </p>

            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial2
