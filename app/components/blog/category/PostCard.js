"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

const PostCard = (post, index) => {
  return (
    <div className='container px-4 mx-auto'>
      <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {allPosts.map((post, index) => {
        let newCat = [post.categories[0].title]
        let newCat1 = [post.categories[1].title]
        const urlWithoutBlog = post.url.slice(4);

        return (
          <motion.div
            key={post.categories[0].title}
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
            className={`relative overflow-hidden`}>

            {/* Image top card */}
            <Link key={newCat}  href={`/blog/${urlWithoutBlog}`} className="relative block overflow-hidden group">
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
            <div className="py-8 px-2 bg-white rounded-md ">
              <Link key={newCat1} href={`/blog/${urlWithoutBlog}`} className="text-2xl leading-none">
                <span className='block mb-1 text-gray-500'>{post.author}</span>
                <h3 className="mb-4">
                    {newCat}
                </h3>
              </Link>
            </div>
          </motion.div>
        );
      })}
     </div>
      {/* Btn others post */}
      <div className="flex justify-center mt-10">
          <Link href="/blog" className='mb-10 transition-all duration-300 ease-in-out
            text-[11.5px] tracking-[2px] font-bold uupercase bg-orange-600
            hover:text-orange-600 py-4 px-5 text-white hover:bg-white hover:shadown-2xl rounded-md'>
              View All Blog Posts
          </Link>
        </div>
    </div>
  );
}

export default PostCard;
