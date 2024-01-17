import Hero from "./components/Hero"
import Expertise from "./components/Expertise"
import Testimonial2 from "./components/Testimonial2"
import RecentBlog from "./components/RecentBlog"
import Subscribe from "./components/Subscribe"
import HowIWork from "./components/HowIWork"
import WhyUs from "./components/WhyUs"

// import App from "./components/App"
// import Pricing from './components/Pricing.js'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 md:pt-22 pb-0 lg-pb:10" />
      {/* <Expertise/> */}
      <WhyUs />
      {/* <About className="py-16 lg:py-32 overflow-hidden"/> */}
      {/* <Pricing className="py-16 lg:py-32" /> */}
      <HowIWork className="py-6 lg:py-32"/>
      <Testimonial2 className="py-6 lg:py-32"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-orange-300"/>
    </>
  )
}
