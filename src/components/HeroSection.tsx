import React from 'react'
import earth from"../assets/earth.jpg"
import earth1 from "../assets/earth1.mp4"
import {

  GlobeIcon,
  InfoIcon,
  UsersIcon,
} from 'lucide-react'
export const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 transition-colors p-4">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full ">
           
            <div className="rounded-xl overflow-hidden shadow-xl">
              {/* <img
              src={earth}
                alt="World map with markers"
                className="w-full"
              /> */}
                <video
      src={earth1}
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-auto max-h-[400px] object-cover" // Adjust max-h as needed for your design
    />
            </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-lg p-4 backdrop-blur-sm border border-gray-100 dark:border-gray-700 mt-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Global Quick Stats
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full">
                    <GlobeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Countries
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      195+
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full">
                    <UsersIcon className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Population
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      7.9 Billion
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full">
                    <div className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Languages
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      7,000+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
           
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg  mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <GlobeIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Featured Regions
                  </h3>
                </div>
                <InfoIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div className="space-y-4">
                {['Europe', 'Asia', 'Africa', 'Americas', 'Oceania'].map(
                  (region) => (
                    <div
                      key={region}
                      className="flex items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <span className="text-gray-800 dark:text-gray-200">
                        {region}
                      </span>
                      <span className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                        {getCountryCount(region)}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="absolute -z-10 top-10 -right-10 w-64 h-64 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
// Helper function to get approximate country counts per region
function getCountryCount(region: string): string {
  const counts: Record<string, string> = {
    Europe: '44 countries',
    Asia: '48 countries',
    Africa: '54 countries',
    Americas: '35 countries',
    Oceania: '14 countries',
  }
  return counts[region] || 'Multiple countries'
}
