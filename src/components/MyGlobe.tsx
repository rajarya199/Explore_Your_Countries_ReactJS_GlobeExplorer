import { motion } from 'framer-motion'

import Globe from './lightswind/globe'
const MyGlobe = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors p-4 py-12 md:py-25">
        <div className='container mx-auto px-4 py-8 md:py-12'>
<div className="grid grid-col-1 lg:grid-cols-2 gap-12  items-center">
          <div className="w-full">
      <Globe
  theta={0.2}
  dark={1}
  scale={1.2}
  diffuse={1.5}
  baseColor="#1a1a1a"
  markerColor="#ff0000"
  glowColor="#444444"
/>
</div>
<div className=''>
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
</div>
</div>
        </div>

    </div>
  )
}

export default MyGlobe
