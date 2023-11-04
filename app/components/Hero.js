'use client'

import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform} from "framer-motion"


const heroContent = {
  intro: {
    title: "Creation & développement web par Lemurian Agency",
    subTitle: "Welcome",
    description: "Je suis Andy Ramaroson, un développeur web FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies web modernes. Je suis spécialisés sur le langage  JavaScript, et plus précisément le framework React & NextJs .",
    btn: {
      href:"/projects",
      label: "View Projects"
    }
  }
}
const Hero = ({ className }) => {

  const ref= useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const imgScroll1 = useTransform(scrollYProgress, [0,1], ['20%', '-20%'])
  const imgScroll2 = useTransform(scrollYProgress, [0,1], ['100%', '50%'])

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px] items-center justify-between">
           {/* Content left */}
           <div className="lg:w-4/12 z-[3] relative">
              {heroContent.intro.subTitle && (
                <motion.span
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.1, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className="uppercase tracking-[3px] text-[12.5px]
                    mb-5 inline-block text-gray-500">
                      { heroContent.intro.subTitle }
                </motion.span>
              )}

              {heroContent.intro.title && (
                <motion.h1
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className=" text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8">
                      { heroContent.intro.title }
                </motion.h1>
              )}

              {heroContent.intro.description && (
                <motion.p
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className="leading-relaxed text-gray-500 w-auto lg:w-screen max-w-xl
                    text-base lg:text-lg mb-10 lg:mb-16">
                      { heroContent.intro.description }
                </motion.p>
              )}

              {heroContent.intro.btn.label && (
                <motion.btn
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  >
                  <Link href={heroContent.intro.btn.href}
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                      tracking-[2px] font-bold uppercase bg-orange-600 py-4 px-5
                      rounded text-white inline-block hover:bg-white hover:text-orange-600">
                    {heroContent.intro.btn.label}
                  </Link>
                </motion.btn>
              )}
            </div>
           <div>
            {/* Image right */}
           </div>
         </div>
      </div>
    </section>
  )
}

export default Hero
