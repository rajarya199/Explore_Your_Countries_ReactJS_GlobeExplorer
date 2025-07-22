import React from 'react'
import { MapIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
export const Hero: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors p-4 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Discover the World's Countries
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-lg">
              Explore detailed information about every country, from population
              and regions to time zones and more. Filter, search, and learn
              about our diverse world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/countries" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center">
                Explore Countries
              </Link>
              <button className="px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors duration-200 flex items-center justify-center">
                <MapIcon size={18} className="mr-2" />
                View Map
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1589519160732-57fc498494f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="World map with markers"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
