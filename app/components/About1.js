"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const aboutContent = {
  heading: {
    title: "Team Jeremy",
    subTitle: "Application"
  },
  content: {
    img: "/images/appUnlpng.png",
    title: "Web application",
    description:
      "The instructors in this martial arts course are exceptional. They are knowledgeable, patient, and provide constructive feedback and ensure that each student gets individual attention.",

    btn: {
      href: "/about",
      label: "Download on Store"
    }
  }
};

const About1 = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const img1 = useTransform(scrollYProgress, [0, 1], ["30%", "-20%"]);
  const img2 = useTransform(scrollYProgress, [0, 1], ["100%", "100%"]);

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="text-center lg:max-w-xl mx-auto mb-20 lg:mb-22 relative z-[5] ">
          {/* About - center - Subtitle */}
          {aboutContent.heading.subTitle &&
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2,
                  duration: 0.5
                }
              }}
              viewport={{ once: true }}
              className="uppercase tracking-[3px] text-[12.5px] mb-2 inline-block text-gray-500"
            >
              {aboutContent.heading.subTitle}
            </motion.span>}
          {/* About - center - Title */}
          {aboutContent.heading.title &&
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5
                }
              }}
              viewport={{ once: true }}
              className="text-2xl lg:text-4xl text-white"
            >
              {aboutContent.heading.title}
            </motion.h2>}
        </div>
        {/* About - center - Card Image */}
        <div className="lg: flex justify-center">
          <div className="lg:w-8/12 lg:flex gap-20 items-center">
            <div className="mb-7 lg:mb-0 lg:w-6/12 lg:order-2 relative">
              <motion.div  className="z-[2] relative">
                <Image
                  src="/images/appUnlpng.png"
                  className="object-cover
                  md:!w-[350px] md:!h-[400px] md:px-4 lg:max-w-2xl object-center"
                  width={300}
                  height={400}
                  alt="application web"
                />
              </motion.div>
            </div>
            {/* About - center - title */}
            <div className="lg:w-6/12 mt-10">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="text-4xl mb-7 text-orange-600"
              >
                {aboutContent.content.title}
              </motion.h3>
              {/* About - center - block text */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                    duration: 0.5
                  }
                }}
                viewport={{ once: true }}
                className="leading-relaxed mb-14 text-white "
              >
                {aboutContent.content.description}
              </motion.p>
              <motion.p
                initial = {{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.5,
                    duration:0.5,
                  }
                }}
                viewport={ { once: true}}>
                <Link href="/about" className="transistion-all duration-300
                  ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase
                  bg-orange-600 py-4 px-5 rounded text-white inline-block
                  hover:bg-white hover:text-orange-600 hover:shadow-2xl">
                  {aboutContent.content.btn.label}
                </Link>
              </motion.p>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About1;
