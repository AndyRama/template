"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'
const PostCard = () => {

  return (
    <div>
      {allPosts.map((post, index) => {
        const urlWithoutBlog = post.url.slice(4);

        return (
          <motion.div
            key={post._id}  // Assurez-vous d'avoir une clé unique pour chaque élément dans le tableau
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index * 0.05,
                duration: 0.5,
              }
            }}
            viewport={{ once: true }}
            className={`relative overflow-hidden`}
          >
            {/* Image top card */}
            <Link key={post._id} href={`/blog/${urlWithoutBlog}`} className="relative block overflow-hidden group">
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
              <span className='block mb-1 text-gray-500'>{post.role}</span>
              <h3 className="mb-4">
                <Link key={post._id} href={`/blog/${urlWithoutBlog}`} className="text-2xl leading-none">
                  {post.title}
                </Link>
              </h3>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default PostCard;
