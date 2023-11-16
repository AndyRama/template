"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ project, index}) => {
  index *= 0.05

  return (
    <motion.div
      initial = {{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: index,
          duration: 0.5,
        }
      }}
      viewport={ { once: true}}
      className={`relative overflow-hidden`}>
      {/* Image top card */}
      <Link href={project.url} className="relative block overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          width={1064}
          height={644}
          className='object-cover object-center h-[400px] !max-w-full duration-300
            transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md'
        />
      </Link>

      {/* title - text bottom card */}
      <div className="py-8 px-2 bg-white rounded-md">
        <span className='block mb-1 text-gray-500'>{ project.role }</span>
        <h3 className="mb-4">
          <Link href={project.url} className="text-2xl leading-none">
            {project.title}
          </Link>
        </h3>
      </div>
    </motion.div>
  )
}

export default PostCard
