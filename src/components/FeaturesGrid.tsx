
import { useRef} from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { GlobeIcon, MapIcon, BarChart3Icon, UsersIcon } from 'lucide-react'
const features = [
  {
    icon: GlobeIcon,
    title: 'Geography',
    description:
      'Explore diverse terrain, climate zones, and natural wonders. From towering mountain ranges to vast ocean depths.',
    color: 'from-emerald-500 to-teal-600',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
  },
  {
    icon: UsersIcon,
    title: 'Political Data',
    description:
      'Comprehensive information on government systems, capitals, demographics, and international relations.',
    color: 'from-blue-500 to-indigo-600',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  {
    icon: MapIcon,
    title: 'Interactive Maps',
    description:
      'Detailed cartography with precise borders, regions, and territories. Zoom into any location on Earth.',
    color: 'from-purple-500 to-pink-600',
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
  },
  {
    icon: BarChart3Icon,
    title: 'Statistics',
    description:
      'Population trends, economic indicators, and development metrics. Data-driven insights for every nation.',
    color: 'from-orange-500 to-red-600',
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
  },
]
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
} as const
export function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px',
  })
  return (
  <section id="features" className="relative py-24 bg-white dark:bg-gray-900">
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px]" />
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 bg-clip-text text-transparent mb-4">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 dark:from-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
              Explore Our World
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive data and tools to discover the fascinating details of every country, continent, and culture.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative bg-white/80 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/[0.05] backdrop-blur-md rounded-2xl p-6 hover:bg-white dark:hover:bg-white/[0.06] hover:border-gray-300/50 dark:hover:border-white/[0.1] transition-all duration-300 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-xl"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${feature.iconBg} rounded-xl mb-4 backdrop-blur-sm`}>
                    <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <a
                    href={`#${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center gap-1 mt-4 text-sm font-medium ${feature.iconColor} hover:underline hover:${feature.iconColor.replace('text-', 'bg-')} hover:text-white px-2 py-1 rounded-md transition-colors`}
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
