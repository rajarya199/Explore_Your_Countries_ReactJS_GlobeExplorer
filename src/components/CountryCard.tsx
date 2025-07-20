import { ExternalLinkIcon, BuildingIcon, GlobeIcon, UsersIcon, Globe2Icon, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CountryProps {
  country: {
    name: { common: string; official: string };
    flags: { svg: string };
    capital?: string[];
    region: string;
    population: number;
    continents:string[];
    cca3: string; // Unique country code
  };
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="p-4">
        {/* Country Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {country.name.common}
            </h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
              {country.name.official}
            </p>
          </div>
          <div className="w-18 h-12 overflow-hidden rounded shadow-sm ml-2 flex-shrink-0">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Country Info */}
        <div className="space-y-2 mt-3 text-sm">
          <div className="flex items-center">
            <Hash
              size={16}
              className="mr-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
            />
            <span className="text-gray-600 dark:text-gray-300">CCA3: </span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
              {country.cca3}
            </span>
          </div>
          <div className="flex items-center">
            <BuildingIcon
              size={16}
              className="mr-2 text-blue-500 dark:text-blue-400 flex-shrink-0"
            />
            <span className="text-gray-600 dark:text-gray-300">Capital: </span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
              {country.capital?.[0] || 'N/A'}
            </span>
          </div>
           <div className="flex items-center">
            <GlobeIcon
              size={16}
              className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
            />
            <span className="text-gray-600 dark:text-gray-300">Continents: </span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
                        {country.continents.join(", ")}

            </span>
          </div>
           <div className="flex items-center">
            <UsersIcon
              size={16}
              className="mr-2 text-purple-500 dark:text-purple-400 flex-shrink-0"
            />
            <span className="text-gray-600 dark:text-gray-300">Population: </span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
              {country.population.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center">
            <Globe2Icon
              size={16}
              className="mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
            />
            <span className="text-gray-600 dark:text-gray-300">Region: </span>
            <span className="ml-1 font-medium text-gray-900 dark:text-white">
              {country.region}
            </span>
          </div>
         
        </div>
      </div>

      {/* Link Icon at bottom-right */}
      <Link
        to={`/country/${country.cca3}`}
        className="absolute bottom-2 right-2 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        title="View Details"
      >
        <ExternalLinkIcon size={18} />
      </Link>
    </div>
  );
};

export default CountryCard;
