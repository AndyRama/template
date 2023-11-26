"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


const BannerContent = {
  intro: {
    title: "DOUDI",
    subTitle: "tt",
  }
}
 const Banner = ( {className}) => {
  return (
    <>
      <section className={` ${className}`}>
        <div className='lg:flex justify-center '>
          <Image  src="/images/hero-img-1-min.jpg" className=" relative object-fit
            !w-[400px] md:!w-full !h-[300px] md:!h-[500px] object-center"
            width={1024} height={500} alt="About Image"
          />
         {/* <h1 className='absolute text-white font-bold text-4xl flex text-center py-48 '>{BannerContent.intro.title} <br/>{BannerContent.intro.subTitle}</h1> */}
         {/* <div className='lg:w-7/12 mb-5 lg:mb-0'> */}
          {BannerContent.intro.subTitle && (
            <motion.span
              initial = {{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                }
              }}
              viewport={ { once: true}}
              className=' absolute uppercase tracking-[3px] text-sm mb-5 inline-block text-white py-40'>
                {BannerContent.intro.subTitle}
            </motion.span>
          )}
          {BannerContent.intro.title && (
            <motion.span
              initial = {{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5,
                }
              }}
              viewport={ { once: true}}
              className=' absolute uppercase text-white font-bold text-4xl text-center tracking-[3px] mb-5 inline-block  py-48'>
                {BannerContent.intro.title}
            </motion.span>
          )}
        </div>
      </section>
    </>
  )
}

export default Banner
