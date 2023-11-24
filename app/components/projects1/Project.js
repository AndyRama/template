"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { allProjects } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns';
// import ReactPaginate from 'react-paginate'

import { motion } from 'framer-motion'

const Items = ({ currentItems }) => {
  return (
    <>
      { currentItems &&
        currentItems.map((project, index) => {
          index *= 0.05
          return (
            <motion.div
            initial = {{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: index,
                duration: 0.3
                }
              }}
              viewport={ { once: true}}
              className='bg-white relative overflow-hidden group rounded-md'
              key={project.title}>
              <Link href={`/${project.url}`} className='relative block overflow-hidden'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1064}
                  height={644}
                  className='object-cover object-center h-[200px] duration-300
                    transition-all ease-in-out group-hover:scale-[1.05] rounded-t-md'/>
                <div className="p-8">
                  <p className='text-gray-500 mb-3 uppercase text-[12px] tracking-[1px]'>
                    { format(parseISO(project.date), "LLL d, yyyy")} • { project.author}
                  </p>

                  <h3 className="mb-4">
                    <Link href={project.url} className='text-lg leading-none'>
                      { project.description }
                    </Link>
                  </h3>
                  <p>
                    <Link
                      href={project.url}
                      className={`text-[12px] tracking-[2px] uppercase
                        pb-2 inline-block  duration-300 transistion-all bg-white-600
                        ease-in-out relative before:content-['']
                        before:absolute before:bottom-0 before:left-0 before:w-full
                        before:h-[2px] before:bg-orange-600 before:origin-[100%, 50%]
                        before:transistion-all before:duration-300 before:ease-in-out
                        before:scale-x-0 before:scale-y-[1] before:scale-z[1]
                        before:wil-change-transform hover:before:origin-[100%, 0%]
                        hover:before:scale-x-[1] hover:before:scale-y-[1]
                        hover:before:scale-z-[1]`}>
                          Read More
                    </Link>
                  </p>

                </div>
              </Link>
            </motion.div>
          )
        })
      }
    </>
  )
}
const Project = ({ className, itemsPerPage, archive= false, params }) => {

  const [currentItems, setCurrentItems] = useState(null)
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)
  const [clickPaginate, setClickPaginate] = useState(false)
  const ref = useRef(null)

  let items = null

  if(archive === false) {
    items = allProjects.sort((a,b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    )
  } else {
    if(params?.slug) {
      items = allProjects.filter((project) =>
        project.categories.some(
          (category) =>
            category.title
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, "") === params.slug
        )
      )
    }
  }

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(items.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(items.length / itemsPerPage))

    if(clickPaginate === true) {
      setTimeout(function () {
        ref.current?.scrollIntoView({ block: "start", behavior: "smooth"})
      }, 300)
      setClickPaginate(false)
    }
  }, [setCurrentItems, setPageCount, setClickPaginate, itemOffset, itemsPerPage, clickPaginate, ref, items])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setClickPaginate(true)
    setItemOffset(newOffset)
  }

  if(!items) return null

  return (
    <section className={`${className}`} ref={ref}>
      <div className="container px-4 mx-auto">
        <div className="lg:w-10/12 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 gap-10 ">
            <Items currentItems={currentItems} />
        </div>

        {/* <div className="lg:w-10/12 mx-auto flex flex-wrap">
          <ReactPaginate
              nextLabel="Next"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="Previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
        </div> */}
      </div>
    </section>
  )
}

export default Project
//ok
