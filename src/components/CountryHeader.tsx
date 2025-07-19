import React from 'react'
import {
  MapPinIcon,
  GlobeIcon,
  UsersIcon,
  FlagIcon, 
} from 'lucide-react'

interface CountryHeaderProps {
  flag: {
    png: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion?: string;
  capital?: string[];
  population: number;
}

const CountryHeader: React.FC<CountryHeaderProps> = ({
     flag,
  name,
  region,
  subregion,
  capital,
  population,
}) => {
  return (
    <div>
         <section className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
            <div className="relative">
              <img
                src={flag.png}
                alt={flag.alt || `Flag of ${name.common}`}
                className="w-full max-w-xs object-cover rounded-lg shadow-2xl border-4 border-gray-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <FlagIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {name.common}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              {name.official}
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-black">
                <GlobeIcon className="h-5 w-5 mr-2" />
                             <span>{region}{subregion ? `, ${subregion}` : ""}</span>

              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-black">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>
                  Capital: {capital && capital.length > 0 ? capital[0] : "N/A"}
                </span>
              </div>
              <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-black">
                <UsersIcon className="h-5 w-5 mr-2" />
                <span>{population.toLocaleString()} people</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CountryHeader
