import React from 'react'
import Hero from '../components/about/Hero'
import Privacies from '../components/privacy/Privacies'
import Subscribe from '../components/Subscribe'

export const metadata = {
  title: "Privacy - Lemurian by Andy Ramaroson",
}

const page = () => {
  return (
    <>
      <Hero className="pt-52 pb-24" title="Recent Updates" subTitle="My Blog"/>
      <Privacies className="pt-0 pb-52" itemsPerPage={9}/>
      <Subscribe className="py-16 pt-64 lg:py-32 bg-orange-600"/>
    </>

  )
}

export default page
//OK
