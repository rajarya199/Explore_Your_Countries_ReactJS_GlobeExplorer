import React from 'react'
import { AnchorIcon, CompassIcon, Globe2Icon, MapPinIcon, MountainIcon, RulerIcon } from 'lucide-react'
interface GeoProps{
     capital?: string[];
  region: string;
  subregion?: string;
   area: number;
    borders?: string[];
    landlocked: boolean,
      continents: string[];
      latlng: [number, number];

}

function formatCoordinates([lat, lng]: [number, number]): string {
  const latDir = lat >= 0 ? 'N' : 'S';
  const lngDir = lng >= 0 ? 'E' : 'W';
  return `${Math.abs(lat)}° ${latDir}, ${Math.abs(lng)}° ${lngDir}`;
}

const CountryGeography:React.FC<GeoProps> = ({
    capital,
    region,
    latlng,
    area,
    subregion,
    borders,
    landlocked,
    continents
}) => {
  return (
    <div>
       <section className="mb-16">
          <div className="flex items-center mb-6">
            <CompassIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">Geography</h2>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 rounded-xl overflow-hidden">
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-md transform transition-transform hover:scale-105">
                <div className="flex items-center mb-3">
                  <Globe2Icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold">Location</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">
                      Continent
                    </span>
                    <span className="font-medium text-lg">
                        {continents.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">
                      Region
                    </span>
                    <span className="font-medium text-lg">
                      {region}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">
                      Subregion
                    </span>
                    <span className="font-medium text-lg">
                      {subregion}
                    </span>
                  </div>
                   <div>
                    <span className="text-gray-500 dark:text-gray-400 block">
                      Coordinates
                    </span>
                    <span className="font-medium text-lg">
                      {formatCoordinates(latlng)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-md transform transition-transform hover:scale-105">
                <div className="flex items-center mb-3">
                  <MapPinIcon className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold">Capital & Area</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400 block">
                      Capital City
                    </span>
                    <span className="font-medium text-lg">
                      {capital?.[0]}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <RulerIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 block">
                        Area
                      </span>
                      <span className="font-medium text-lg">
                        {area.toLocaleString()} km²
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {landlocked ? (
                      <MountainIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    ) : (
                      <AnchorIcon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    )}
                    <div>
                      <span className="text-gray-500 dark:text-gray-400 block">
                        Landlocked
                      </span>
                      <span className="font-medium text-lg">
                        {landlocked ? 'Yes' : 'No'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow-md transform transition-transform hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                  <h3 className="text-lg font-semibold">Borders</h3>
                </div>
                <div>
                  <span className="text-gray-500 dark:text-gray-400 block">
                    Neighboring Countries
                  </span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {borders?.map((border, index) => (
                      <span
                        key={index}
                        className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {border}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CountryGeography
