import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Link } from 'react-router-dom'
import Globe from './lightswind/globe'
const MyGlobe = () => {
     const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors p-4 py-12 md:py-25">
        <div className='container mx-auto'>
<div className="grid grid-col-1 lg:grid-cols-2 gap-12  items-center">
          <div className="w-full">
      <Globe
  className="mx-auto"
                theta={0.25}
                dark={isDark ? 1 : 0}
                scale={1.15}
                diffuse={isDark ? 1.3 : 1.1}
                mapSamples={isDark ? 45000 : 35000}
                mapBrightness={isDark ? 8 : 11}
                baseColor={isDark ? "#0f172a" : "#e2e8f0"}
                markerColor="#38bdf8"
                                // glowColor={isDark ? "#60a5fa" : "#2563eb"}

                glowColor={isDark ?  "#6B7280" : "#D1D5DB"}
/>
</div>
<div className='items-center'>
  <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
              }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black dark:text-white  leading-tight mb-6"
            >
              Discover Every
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Corner of Our World
              </span>
            </motion.h1>
               <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to='/countries' className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Explore Countries
              </Link>
              <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                Learn More
              </button>
            </div>
</div>
</div>
        </div>

    </div>
  )
}

export default MyGlobe
