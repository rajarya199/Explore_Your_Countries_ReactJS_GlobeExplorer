import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
import { FilterIcon, SearchIcon } from "lucide-react";

type Country = {
  cca3: string;
  name: { common: string; official: string };
  capital?: string[];
  flags: { svg: string; png: string };
  region: string;
  population: number;
        continents: string[];

  // currencies?: Record<string, { name: string; symbol: string }>;
  area: number;
};

const Countries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      const fields = [
        "name",
        "capital",
        "flags",
        "region",
        "population",
       "continents",
        "area",
        "cca3",
      ].join(",");
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://restcountries.com/v3.1/all?fields=${fields}`
        );
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

 const filterCountries = countries.filter((country) => {
  const matchesSearch =
    country.name.common
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
    country.name.official
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

  const matchesRegion =
    selectedRegion === "" || country.region === selectedRegion;

  return matchesSearch && matchesRegion;
});


  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search countries..."
            className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
        </div>
        <div className="flex items-center space-x-2">
          <button className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700">
            <FilterIcon size={16} className="mr-2" />
            Filter
          </button>
       <select
  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
  value={selectedRegion}
  onChange={(e) => setSelectedRegion(e.target.value)}
>
  <option value="">All Regions</option>
  <option value="Africa">Africa</option>
  <option value="Americas">Americas</option>
  <option value="Asia">Asia</option>
  <option value="Europe">Europe</option>
  <option value="Oceania">Oceania</option>
  <option value="Antarctic">Antarctic</option>
  <option value="Polar">Polar</option>
</select>

        </div>
      </div>
      {isLoading ? (
        <p>Loading countries...</p>
      ) : filterCountries.length === 0 ? (
        <div className="text-center text-lg text-gray-500 py-10">
          Country not found
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filterCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
