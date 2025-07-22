import React from 'react'
import {
  MapPinIcon,
  GlobeIcon,
  
  FlagIcon,
  ShieldIcon, 
} from 'lucide-react'

interface CountryHeaderProps {
  flags: {
    png: string;
    alt?: string;
  };
   coatOfArms?: {
    png?: string;
    svg?: string;
  };
  name: {
    common: string;
    official: string;
  };
  region: string;
  subregion?: string;
  capital?: string[];
}

const CountryHeader: React.FC<CountryHeaderProps> = ({
     flags,
  name,
  region,
  subregion,
  capital,
  coatOfArms
}) => {
  return (
    <div>
       <section className="relative w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            {/* Flag */}
               <div className="relative">
              <img
                src={flags.png}
                alt={flags.alt || `Flag of ${name.common}`}
                className="w-full max-w-2xs object-cover rounded-lg shadow-2xl border-4 border-gray-200"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg">
                <FlagIcon className="h-8 w-8 text-blue-600" />
              </div>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-12 flex flex-col">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-2 text-black">
                {name.common}
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-4 text-black">
                {name.official}
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 text-black">
                  <GlobeIcon className="h-5 w-5 mr-2" />
                  <span>
                    {region}, {subregion}
                  </span>
                </div>
                <div className="flex items-center bg-white text-black bg-opacity-20 rounded-full px-4 py-2">
                  <MapPinIcon className="h-5 w-5 mr-2" />
                  <span>
                                      Capital: {capital && capital.length > 0 ? capital[0] : "N/A"}

                  </span>
                </div>
              
               
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-xl">
                  <img
                    src={coatOfArms?.svg}
                    alt={`Coat of Arms of ${name.common}`}
                    className="w-full max-w-[140px] h-[140px] object-contain rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg">
                  <ShieldIcon className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold mb-1">Coat of Arms</h3>
                <p className="opacity-80">
                  Official emblem of {name.common}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CountryHeader
