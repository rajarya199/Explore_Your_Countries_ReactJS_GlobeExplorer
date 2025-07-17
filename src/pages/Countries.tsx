import { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
type Country = {
  cca3: string;
  name: {
    common: string;
    official: string;
  };
  capital?: string[];
  flags: {
    svg: string;
    png: string;
  };
  region: string;
  population: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  area: number;
  borders?: string[];
};


const Countries = () => {
const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      const fields = [
        'name',
        'capital',
        'flags',
        'region',
        'population',
        'languages',
        'timezones',
        'area',
        'cca3' 
      ].join(',');

      try {
        setIsLoading(true);
        const res = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
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

  return (
    <div className="p-6">
      {isLoading ? (
        <p>Loading countries...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Countries;
