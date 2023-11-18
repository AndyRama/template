import Hero from "./components/Hero"
import About from "./components/About"
import HowIWork from "./components/HowIWork"
import Testimonial from "./components/Testimonial"
import RecentBlog from "./components/RecentBlog"
import Subscribe from "./components/Subscribe"
import Stats from './components/Stats'

export default function Home() {
  return (
    <>
      <Hero className="pt-32 pb-0 lg-pb:10" />
      <Stats/>
      <About className="py-16 lg:py-32 overflow-hidden"/>
      <HowIWork className="py-16 !pt-32 lg:py-32"/>
      <Testimonial className="py-6 lg:py-32"/>
      <RecentBlog className="pt-14 pb-15 lg:pb-32"/>
      <Subscribe className="py-16 pt-64 -mt-48 lg:py-32 bg-orange-300"/>
    </>
  )
}
