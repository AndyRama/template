import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

const statContent = {
  stats: [
    {
      number:"75.9%",
      label: "Good Solutions"
    },
    {
      number:"10",
      label: "Happy Customers"
    },
    {
      number:"3.5",
      label: "Rating Reviews"
    },
    {
      number:"3",
      label: "Exp"
    },
  ],
  getStarted: {
    heading: 'Get started with our service?',
    description:"We undestand that protecting your loved ones is of ut most importance",
    image : "/images/next-blog-article.jpg",
    cta: {
      cta_href:"/projects",
      cta_label:'learn more'
    }
  }
}

const Stats = () => {
  return (
    <section className='pt-10 pb-10 bg-white'>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-between items-center  space-x-0 ">
          <div className="w-full lg:w-8/12 mb-20 lg:mb-0">
            <div className="grid grid-cols-4">
              {statContent.stats.map((stat, index) => (
                 <div className="text-center lg:text-left" key={stat.label}>
                  <strong className='text-primary text-4xl xl:text-[52px] font-bold
                  leading-tight'>
                    { stat.number }
                </strong>
                <br/>
                <span>{stat.label}</span>
              </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <div className="bg-light py-10 px-7 lg:px-10 !pr-28 md:!pr-32
              lg:!pr-40 rounded-lg relative">
                {/* {statContent.getStarted.image && (
                  <Image
                    src={statContent.getStarted.image}
                    width={600}
                    height={900}
                    alt="andyramaroson.com"
                    className='absolute right-0 lg:right-6 -top-14 w-24'
                  />
                )} */}

                {statContent.getStarted.heading && (
                  <h3 className='text-heading font-bold text-xl mb-3'>
                    {statContent.getStarted.heading}
                  </h3>
                )}

                {statContent.getStarted.description && (
                  <p className='text-md mb-5'>
                    {statContent.getStarted.description}
                  </p>
                )}

                {statContent.getStarted.cta.cta_label && (
                  // <Link href={statContent.getStarted.cta.cta_href}
                  //   className='flex space-x-2 outline-none items-center
                  //   fontse-semibold text-primary'>
                  //     <span>{ statContent.getStarted.cta.cta_label}</span>
                  //     <span className='w-6 h-6 rounded-full bg-primary text-white
                  //      inline-flex items-center justify-center'>
                  //       <BiChevronRight className='text-lg'/>
                  //      </span>
                  //   {statContent.getStarted.cta.cta_href}
                  // </Link>


                <Link href={statContent.getStarted.cta.cta_href} className="block text-center text-[11.5px]
                  tracking-2[2px] font-bold uppercase bg-orange-600 py-4 px-5 text-white rounded-md">
                  <span>{ statContent.getStarted.cta.cta_label}</span>
                </Link>
                )}

              </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Stats
