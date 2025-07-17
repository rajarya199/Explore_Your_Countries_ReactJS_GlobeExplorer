interface CountryProps {
  country: {
    name: { common: string; official: string };
    flags: { svg: string };
    capital?: string[];
    region: string;
    population: number;
  };
}

const CountryCard = ({ country }: CountryProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className="relative h-40 overflow-hidden">
        <img
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h2 className="text-xl font-bold text-white">{country.name.common}</h2>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Official Name</p>
          <p className="font-medium text-gray-900 dark:text-white">{country.name.official}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Capital</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {country.capital?.[0] || 'N/A'}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Region</p>
            <p className="font-medium text-gray-900 dark:text-white">{country.region}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm text-gray-500 dark:text-gray-400">Population</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {country.population.toLocaleString()}
            </p>
          </div>
        </div>
        <button className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CountryCard;
