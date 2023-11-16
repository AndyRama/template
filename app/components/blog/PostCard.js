"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ post, index}) => {
  index *= 0.05

  // Crée une constante avec l'URL sans le préfixe "blog"
  const urlWithoutBlog = post.url.slice(4);

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
      <Link href={`/blog/${urlWithoutBlog}`} className="relative block overflow-hidden group">
        <Image
          src={post.image}
          alt={post.title}
          width={1064}
          height={644}
          className='object-cover object-center h-[400px] !max-w-full duration-300
            transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md'
        />
      </Link>

      {/* title - text bottom card */}
      <div className="py-8 px-2 bg-white rounded-md">
        <span className='block mb-1 text-gray-500'>{ post.role }</span>
        <h3 className="mb-4">
          <Link href={`/blog/${urlWithoutBlog}`} className="text-2xl leading-none">
            {post.title}
          </Link>
        </h3>
      </div>
    </motion.div>
  )
}

export default PostCard
