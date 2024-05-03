import React from 'react'
import { allPrivacies } from 'contentlayer/generated'
import Hero from '@/app/components/about/Hero'
import Privacies from '@/app/components/privacy/category/Privacies'
import Subscribe from '@/app/components/Subscribe'

const page = ({ params }) => {

  const newTitle = params?.slug.replace("-", " ")
  let itemsTotal = 0, items = null

  if(params?.slug) {
    items = allPrivacies.filter((privacy) => privacy.categories.some((category) =>
    category.title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "") === params.slug
    ))
    itemsTotal = items.length
  }
  return (
    <>
      <Hero className="pt-52 pb-24 capitalize" title={`${newTitle} (${itemsTotal})`} subTitle="Category"/>
      <Privacies className="pt-0 pb-52" archive={true} params={params} itemsPerPage={6}/>
      <Subscribe className="py-16 pt-64 lg:py-32 bg-orange-600"/>
    </>
  )
}

export default page
