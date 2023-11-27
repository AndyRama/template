'use client'

import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform} from "framer-motion"

const hero2Content = {
  intro: {
    title: "Personal",
    author:"Coach Jeremy",
    subTitle: "50 +",
    subTitle1: "Students",
    subTitle2: "10 +",
    subTitle3: "Years Exp",
    description: "Je suis Andy Ramaroson, un développeur web FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies web modernes. Je suis spécialisé sur le langage  JavaScript avec le framework React & NextJs.",
    btn: {
      href:"/projects",
      label: "les programmes"
    },
    btn1: {
      href:"/blog",
      label: " Mes articles"
    },
    images: {
      img1:'/images/hero-img-1.png',
      img1:'/images/hero-img-2.png',
      img1:'/images/hero-img-3.png',
      img1:'/images/hero-img-4.png',
      img1:'/images/hero-img-5.png',
    }
  }
}
const Hero3 = () => {

  // const ref= useRef(null)
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ['start end', 'end start']
  // })

  // const imgScroll1 = useTransform(scrollYProgress, [0,1], ['20%', '-20%'])
  // const imgScroll2 = useTransform(scrollYProgress, [0,1], ['100%', '50%'])

  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="lg:flex items-center justify-between">
           {/* Content left - subtitle */}
           <div className=" lg:w-5/12 mb-5 lg:md-0 text-2xl mt-15">
              {hero2Content.intro.subTitle && (
                <motion.span
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.1, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className=" inline-block py-0.5 pl-3 text-heading
                    font-semibold relative mb-5 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight
                    before:left-0 before:top-0 before:bottom-0 before:z-[-1] text-white max-[600px]:hidden">
                      { hero2Content.intro.subTitle }<br/>
                      <span className="text-orange-600 max-[600px]:hidden">{ hero2Content.intro.subTitle1 }</span>
                </motion.span>
              )}

              {/* <div className="lg:w-5/12 mb-10 lg:md-0"> */}
                {hero2Content.intro.subTitle2 && (
                  <motion.span
                    initial={{opacity: 0, y:20}}
                    whileInView ={ {
                      opacity:1,
                      y:0,
                      transition: { delay: 0.1, duration: 0.5 }
                    }}
                    viewport={{ once: true}}
                    className="inline-block py-0.5 pl-3 text-heading
                      font-semibold relative mb-7 before:content-[''] before:absolute before:w-2/3 before:bg-yellowLight
                      before:left-0 before:top-0 before:bottom-0 before:z-[-1] text-white max-[600px]:hidden">
                        { hero2Content.intro.subTitle2 } <br/>
                        <span className="text-orange-600 max-[600px]:hidden">{ hero2Content.intro.subTitle3 }</span>
                  </motion.span>
                )}
              {/* </div> */}


              {/* Content left - title */}

              {hero2Content.intro.title && (
                <motion.h1
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  data-testid="hero-title"
                  className="text-4xl lg:text-5xl font-bold mb-7 text-white max-[600px]:mt-10">
                    { hero2Content.intro.title } <br/>
                    <span className="text-orange-600">{ hero2Content.intro.author } </span>
                </motion.h1>
              )}

              {/* Content left - description */}

              {hero2Content.intro.description && (
                <motion.p
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className="leading-relaxed text-white w-auto lg:w-screen max-w-xl
                    text-base lg:text-lg mb-10 lg:mb-16">
                      { hero2Content.intro.description }
                </motion.p>
              )}

              {/* btn link */}

              {hero2Content.intro.btn.label && (
                <motion.btn
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                >
                  <Link href={hero2Content.intro.btn.href}
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                      tracking-[2px] font-bold uppercase bg-orange-600 py-3 px-3
                      rounded text-white inline-block hover:bg-white hover:text-orange-600 hover:shadow-2xl mb-5 mr-4">
                    {hero2Content.intro.btn.label}
                  </Link>
                </motion.btn>


              )}

              {hero2Content.intro.btn.label && (
                <motion.btn
                  initial={{opacity: 0, y:20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.2, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                >
                  <Link href={hero2Content.intro.btn.href}
                    className="transistion-all duration-300 ease-in-out text-[11.5px]
                      tracking-[2px] font-bold uppercase bg-orange-600 py-3 px-3
                      rounded text-white inline-block hover:bg-white hover:text-orange-600 hover:shadow-2xl mb-5">
                    {hero2Content.intro.btn1.label}
                  </Link>
                </motion.btn>


              )}
            </div>

            {/* Image right */}

            <div className="lg:w-7/12 relative">
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
                viewport={ { once: true}}
                // style={{y: imgScroll1}}
                className="z-[2] relative bg-cover bg-center justify-end mb-20 mt-10">
                <Image src="/images/coach1.jpg" width={700} height={800} alt="hero image"/>
              </motion.div>
              {/* <motion.div
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
                // style={{y: imgScroll2}}
                className="absolute bottom-0 lg:bottom-[100px] -left-[80px] z-[1]">
                <Image src="/images/dots.svg" width={200} height={200} alt="Dots background image" className="w-64"/>
              </motion.div> */}
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}

export default Hero3
