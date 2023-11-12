"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { RxTwitterLogo } from "react-icons/rx"
import { SlSocialLinkedin } from "react-icons/sl"

const teamContent = {
  heading: {
    title:"Introducing Our Exceptional Team",
    subTitle: "Meet our Team",
    description: "At Lemurian we're dedicated to sharing a knowledge to build a  beautifule experiences users",
  },

  team: [
    {
      images:"/images/person-1-min.jpg",
      name:"Jane Cooper",
      role:"Product owner",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },    {
      images:"/images/person-2-min.jpg",
      name:"Alexandra Moore",
      role:"Web designer",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      images:"/images/person-3-min.jpg",
      name:"James Mayer",
      role:"developer fullstack senior",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      images:"/images/person-4-min.jpg",
      name:"Robert Fox",
      role:"developer fullstack senior",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      images:"/images/person-5-min.jpg",
      name:"Sarah Brown",
      role:"Web designer",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
    {
      images:"/images/person-6-min.jpg",
      name:"Mickael Williams",
      role:"developer fullstack jr",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  ]
}

const Team = ({ className }) => {
  return (
    <section className={`${ className }`}>
      <div className="container px-4 mx-auto">
        <div className="lg:flex justify-center mb-20 lg:mb-36">
          <div className="w-full lg:w-8/12 lg:flex gap-7 items-center">
            <div className="lg:w-7/12 mb-5 lg:mb-0">
              { teamContent.heading.subTitle && (
                <motion.span
                  initial={{opacity: 0, y: 20}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.3, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className='uppercase tracking-[3px] text-sm mb-5 inline-block text-gray-500'>
                    { teamContent.heading.subTitle }
                </motion.span>
              )}

              { teamContent.heading.title && (
                <motion.h2
                  initial={{opacity: 0, y: 10}}
                  whileInView ={ {
                    opacity:1,
                    y:0,
                    transition: { delay: 0.5, duration: 0.3 }
                  }}
                  viewport={{ once: true}}
                  className='text-2xl lg:text-4xl'>
                    { teamContent.heading.title }
                </motion.h2>
              )}
            </div>
            <div className="lg:w-5/12 self-end">
              { teamContent.heading.description && (
                <motion.p
                  initial={{opacity: 0, y: 10}}
                  whileInView ={ {
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6, duration: 0.5 }
                  }}
                  viewport={{ once: true}}
                  className='text-gray-500'>
                    { teamContent.heading.description }
                </motion.p>
              )}
            </div>


          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:w-10/12 mx-auto ">
          { teamContent.team.map((person, index) => {
            index *= 0.2
            return (
              <motion.div
                key={person.name}
                className='bg-white relative overflow-hidden border rounded-md'
                initial={{opacity: 0, y: 20}}
                whileInView ={ {
                  opacity: 1,
                  y:  0,
                  transition: { delay: index, duration: 0.3 }
                }}
                viewport={{ once: true}}
                >
                  <Link href="#">
                    <Image
                      src={person.images}
                      width={400}
                      height={400}
                      className='object-cover object-top w-full !max-h-72 !max-w-full'
                      alt='image portrait colaborateur'
                    />
                  </Link>
                  <div className="p-8">
                    <h3 className='mb-0.5'>{person.name}</h3>
                    <p className='text-gray-500 uppercase text-[12px] tracking-[1px] mb-4'>
                      { person.role}
                    </p>

                    <div className="mt-5 flex space-x-5 items-center">
                      { person.twitter && (
                        <Link
                          href={person.twitter}
                          className='duration-300 transition-all ease-in-out hover:opacity-30'>
                            <RxTwitterLogo className='text-lg'/>
                        </Link>
                      )}

                      { person.linkedin && (
                        <Link
                          href={person.linkedin}
                          className='duration-300 transition-all ease-in-out hover:opacity-30'>
                            <SlSocialLinkedin className='text-lg'/>
                        </Link>
                      )}
                    </div>
                  </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
