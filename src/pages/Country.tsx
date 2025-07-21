import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MapIcon } from "lucide-react";
import { Link } from "react-router-dom";
import CountryHeader from "../components/CountryHeader";
import CountryGeography from "../components/CountryGeography";
import Demography from "../components/Demography";
import GovermentOfficial from "../components/GovermentOfficial";
import Economy from "../components/Economy";
import CountryMap from "../components/CountryMap";
import Others from "../components/Others";
type Demonyms = {
  eng: {
    f: string;
    m: string;
  };
};
type Country = {
  name: {
    common: string;
    official: string;
    nativeName?: Record<string, { official: string; common: string }>;
  };
  cca3: string;
  ccn3:string;
  independent: boolean;
  unMember:boolean;
  tld:string[];
  fifa:string;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  capital?: string[];
  region: string;
  subregion?: string;
  population: number;
  area: number;
  languages?: Record<string, string>;
  currencies?: Record<string, { name: string; symbol: string }>;
  borders?: string[];
    coatOfArms?: {
    png?: string;
    svg?: string;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  gini?:{
    [year: string]: number;
  }
  timezones: string[];
  continents: string[];
  startOfWeek?: string;
landlocked: boolean;
  demonyms?: Demonyms;
    car: {
    signs: string[];
    side: 'left' | 'right';
  };


};

const Country: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = await res.json();
        setCountry(data[0]);
      } catch (err) {
        console.error("Failed to fetch country:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCountry();
  }, [code]);

  if (loading) return <p className="text-center mt-10 text-xl">Loading...</p>;
  if (!country) return <p className="text-center mt-10 text-red-500">Country not found.</p>;

  return (
    <div className="mx-auto px-4 py-6">
      <Link to="/" className="text-blue-600 hover:underline flex items-center mb-4">
        {/* <IoIosArrowBack className="mr-1" /> */}
        Back to List
      </Link>
        <CountryHeader
        flag={country.flags}
        name={country.name}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        population={country.population}
      />

      <main className="container mx-auto px-4 py-12">
<CountryGeography
  capital={country.capital}
    region={country.region}
    area={country.area}
    subregion={country.subregion}
    borders={country.borders}
    landlocked={country.landlocked}
    continents={country.continents}

/>
<Demography
  population={country.population}
    languages={country.languages}
    timezones={country.timezones}
    demonyms={country.demonyms}
/>

<GovermentOfficial
  startOfWeek={country.startOfWeek}
    independent={country.independent}
    cca3={country.cca3}
    ccn3={country.ccn3}
    unMember={country.unMember}
    tld={country.tld}
/>
<Economy
currencies={country.currencies}
gini={country.gini}
/>
<CountryMap
name={country.name}
maps={country.maps}
/>
<Others
fifa={country.fifa}
car={country.car}
/>
      </main>
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Flag */}
          <img src={country.flags?.png} alt={country.flags?.alt || "flag"} className="w-full md:w-64 rounded-lg shadow" />

          {/* Info */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold">{country.name?.common}</h1>
            <p className="text-gray-700 italic">{country.name?.official}</p>

            {country.capital && (
              <p>
                <strong>Capital:</strong> {country.capital.join(", ")}
              </p>
            )}
            <p>
              <strong>Region:</strong> {country.region} {country.subregion && `– ${country.subregion}`}
            </p>
            <p>
              <strong>Continent:</strong> {country.continents.join(", ")}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Area:</strong> {country.area.toLocaleString()} km²
            </p>

            {country.languages && (
              <p>
                <strong>Languages:</strong> {Object.values(country.languages).join(", ")}
              </p>
            )}

            {country.currencies && (
              <p>
                <strong>Currencies:</strong>{" "}
                {Object.values(country.currencies)
                  .map((cur) => `${cur.name} (${cur.symbol})`)
                  .join(", ")}
              </p>
            )}

            {country.borders && (
              <p>
                <strong>Borders:</strong> {country.borders.join(", ")}
              </p>
            )}

            {/* Map and Coat of Arms */}
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                <MapIcon /> Google Maps
              </a>
              <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:underline">
                <MapIcon /> OpenStreetMap
              </a>
            </div>

            {country.coatOfArms?.png && (
              <div className="mt-4">
                <p className="font-semibold mb-2">Coat of Arms:</p>
                <img src={country.coatOfArms.png} alt="Coat of Arms" className="w-32 h-auto" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
