'use client'

import React, {useRef} from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform} from "framer-motion"


const heroContent = {
  intro: {
    title: "Creation & développement web par Lemur Agency",
    subTitle: "Welcome",
    description: "Je  suis Andy Ramaroson, un développeur web FullStack JS basée sur Bordeaux (N. Aquitaine, 33) et je réalise tous types de logiciels et d'applications sur mesure en me basant sur des technologies web modernes. Je suis spécialisés sur le langage  JavaScript, et plus précisément le framework React & NextJs .",
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
        <div className="lg:flex w-full lg:w-10/12 mx-auto h-auto lg:h-screen lg:min-h-[700px]
         items-center justify-between">
           <div className="lg:w-4/12 z-[3] relative"></div>
             {/* Content left */}
           <div>
            {/* Image right */}
           </div>
         </div>
      </div>
    </section>
  )
}

export default Hero
