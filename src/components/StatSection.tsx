import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { GlobeIcon, MapPinIcon, ClockIcon, LanguagesIcon } from 'lucide-react'
type StatItem = {
  icon: typeof GlobeIcon
  value: number
  suffix: string
  label: string
  color: string
}
const stats: StatItem[] = [
  {
    icon: GlobeIcon,
    value: 195,
    suffix: '',
    label: 'Countries',
    color: 'text-cyan-400',
  },
  {
    icon: MapPinIcon,
    value: 7,
    suffix: '',
    label: 'Continents',
    color: 'text-emerald-400',
  },
  {
    icon: ClockIcon,
    value: 24,
    suffix: '',
    label: 'Time Zones',
    color: 'text-purple-400',
  },
  {
    icon: LanguagesIcon,
    value: 7000,
    suffix: '+',
    label: 'Languages',
    color: 'text-orange-400',
  },
]
function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-50px',
  })
  const [displayValue, setDisplayValue] = useState(0)
  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
  })
  const rounded = useTransform(spring, (latest) => Math.round(latest))
  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])
  useEffect(() => {
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    return unsubscribe
  }, [rounded])
  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
export function StatSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
    <section className="relative py-20 bg-white dark:bg-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 sm:p-12 backdrop-blur-sm border border-gray-100 dark:border-gray-700 mt-4 shadow-2xl transition-all duration-300"        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-white/[0.05] rounded-2xl mb-4">
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
