import { HeroSection } from "../components/HeroSection"
import { Hero } from "../components/Hero"
import { StatSection } from "../components/StatSection"
import MyGlobe from "../components/MyGlobe"
import { FeaturesGrid } from "../components/FeaturesGrid"

const Home = () => {
  return (
    <div>
      <MyGlobe/>
      <Hero/>
      <HeroSection/>
      <FeaturesGrid/>
      <StatSection/>
    </div>
  )
}

export default Home
