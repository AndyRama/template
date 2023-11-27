import Hero2 from "./components/Hero2"
import About from "./components/About"
import About1 from "./components/About1"
import Testimonial2 from "./components/Testimonial2"
import RecentBlog from "./components/RecentBlog"
import Subscribe from "./components/Subscribe"
import Pricing from './components/Pricing.js'

import Team from './components/Team'

export default function Home() {
  return (
    <>
      <Hero2 className="pt-32 pb-0 lg-pb:10" />
      {/* <About1 /> */}
      <About className="py-16 lg:py-32 overflow-hidden"/>
      <Pricing className="py-16 lg:py-32" />
      <Team/>
      <Testimonial2 className="py-6 lg:py-32"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-orange-300"/>
    </>
  )
}
