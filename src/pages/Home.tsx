import { HeroSection } from "../components/HeroSection"
import { Hero } from "../components/Hero"
import { StatSection } from "../components/StatSection"
import MyGlobe from "../components/MyGlobe"

const Home = () => {
  return (
    <div>
      <MyGlobe/>
      <Hero/>
      <HeroSection/>
      <StatSection/>
    </div>
  )
}

export default Home
