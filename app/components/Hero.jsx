'use client'

import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform} from "framer-motion"

const heroContent = {
  intro: {
    title: "Création & développement web par Lemurian Agency",
    subTitle: "Bienvenue",
    description: "Je  suis Andy Ramaroson, un développeur web FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies web modernes pour répondre à votre besoins. Je suis spécialisé sur le langage  JavaScript, et plus précisément le framework React & NextJs.",
    btn: {
      href:"/projects",
      label: "les Projets"
    },
    btn1: {
      href:"https://calendly.com/lemurian-agency/30min",
      label: "Me contacter"
    }
  }
}
const Hero = ({ className }) => {

  const ref= useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const imgScroll1 = useTransform(scrollYProgress, [0,1], ['30%', '-10%'])
  const imgScroll2 = useTransform(scrollYProgress, [0,1], ['100%', '50%'])

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex w-full lg:w-12/12 mx-auto h-auto lg:h-screen
          lg:min-h-[700px] items-center justify-between md:-mt-48 md:ml-5">

           {/* Content left - subtitle */}
           <div className="lg:w-3/12 z-[3] relative">
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
                    mb-5 inline-block text-gray-500 md:mt-48">
                      { heroContent.intro.subTitle }
                </motion.span>
              )}

              {/* Content left - title */}

              {heroContent.intro.title && (
                <motion.h1
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  data-testid="hero-title"
                  className=" text-gray-800 text-3xl sm:text-4xl md:text-4xl
                    lg:text-5xl w-auto lg:w-screen max-w-xl mb-4 md:mb-8">
                      { heroContent.intro.title }
                </motion.h1>
              )}

              {/* Content left - description */}

              {heroContent.intro.description && (
                <motion.p
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className="leading-relaxed text-gray-500 w-auto lg:w-screen
                    max-w-lg text-base lg:text-md mb-10 lg:mb-16">
                      { heroContent.intro.description }
                </motion.p>
              )}

              {/* btn1 link */}

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
                      tracking-[2px] font-bold uppercase bg-orange-300 py-4 px-5
                      rounded text-white inline-block hover:bg-white
                      hover:text-orange-600 hover:shadow-2xl mb-5">
                    {heroContent.intro.btn.label}
                  </Link>
                </motion.btn>
              )}

                {/* btn2 link */}

                {heroContent.intro.btn1.label && (
                <motion.btn1
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                >
                  <Link href={heroContent.intro.btn1.href}
                    add target="_blank"
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                      tracking-[2px] font-bold uppercase bg-orange-300 py-4 px-5
                      rounded text-white inline-block hover:bg-white
                      hover:text-orange-600 hover:shadow-2xl mb-5 ml-2">
                    {heroContent.intro.btn1.label}
                  </Link>
                </motion.btn1>
              )}
            </div>

            {/* Image right */}

            <div className="lg:w-12/12 relative lg:-mt-80 mb-8">
              <motion.div
                initial={{ opacity: 0, x:20 }}
                whileInView={{
                  opacity:1,
                  x:0,
                  transition: {
                    delai: 0.4,
                    duration:0.5,
                  }
                }}
                viewport={{ once: true}}
                style={{y: imgScroll1}}
                className="z-[2] relative bg-cover bg-center">
                <Image
                  src="/images/desktop.jpg"
                  width={700}
                  height={985}
                  alt="hero image desktop"

                />
              </motion.div>

              {/* Image2 right */}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{
                  opacity:1,
                  x:0,
                  transition: {
                    delai: 0.4,
                    duration:0.5,
                  }
                }}
                viewport={ { once: true}}
                style={{y: imgScroll2}}
                className="absolute bottom-0 lg:bottom-[100px] -left-[80px] z-[1] invisible md:visible ">
                <Image
                  src="/images/dots.svg"
                  width={200}
                  height={200}
                  alt="Dots orange background image "
                  className="w-64 "/>
              </motion.div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero
