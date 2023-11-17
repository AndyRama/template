import React from 'react'
import Hero from '../components/about/Hero'
import Posts from '../components/blog/Posts'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: "Blogs - Lemurian by Andy Ramaroson",
}

const page = () => {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Recent Updates" subTitle="My Blog"/>
      <Posts className="pt-0 pb-52" itemsPerPage={6}/>
      <Subscribe className="py-16 pt-64 lg:py-32 bg-orange-600"/>
    </>

  )
}

export default page
//OK
