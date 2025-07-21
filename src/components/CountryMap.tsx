import { GlobeIcon, MapIcon } from 'lucide-react';
interface countryProps{
    name:{
        common:string;
    };
    maps:{
            googleMaps: string;
    openStreetMaps: string;
    }
}
const CountryMap = ({
    name,
    maps
}:countryProps) => {
  return (
    <div>
          <section className="mb-16">
          <div className="flex items-center mb-6">
            <MapIcon className="h-8 w-8 text-red-600 dark:text-red-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">Maps</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={maps.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="bg-red-600 p-4 flex items-center">
                <div className="bg-white rounded-full p-2 mr-3">
                  <MapIcon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-white text-xl font-semibold">
                  Google Maps
                </h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <p className="text-gray-600 dark:text-gray-300">
                  View {name.common} on Google Maps
                </p>
                <div className="bg-red-100 dark:bg-red-900 p-2 rounded-full transform group-hover:translate-x-1 transition-transform">
                  <div className="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
              </div>
            </a>
            <a
              href={maps.openStreetMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="bg-blue-600 p-4 flex items-center">
                <div className="bg-white rounded-full p-2 mr-3">
                  <MapIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-white text-xl font-semibold">
                  OpenStreetMap
                </h3>
              </div>
              <div className="p-6 flex items-center justify-between">
                <p className="text-gray-600 dark:text-gray-300">
                  View {name.common} on OpenStreetMap
                </p>
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full transform group-hover:translate-x-1 transition-transform">
                  <GlobeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </a>
          </div>
        </section>
    </div>
  )
}

export default CountryMap
