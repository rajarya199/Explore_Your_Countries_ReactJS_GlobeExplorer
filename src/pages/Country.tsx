import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  latlng: [number, number];

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
        flags={country.flags}
        name={country.name}
        region={country.region}
        subregion={country.subregion}
        capital={country.capital}
        coatOfArms={country.coatOfArms}
      />

      <main className="container mx-auto px-4 py-12">
<CountryGeography
  capital={country.capital}
    region={country.region}
    latlng={country.latlng}
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
    
    </div>
  );
};

export default Country;
