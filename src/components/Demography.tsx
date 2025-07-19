import { BuildingIcon, ClockIcon, UsersIcon,LanguagesIcon, BadgeIcon } from 'lucide-react'
import React from 'react'

type Demonyms = {
  eng: {
    f: string;
    m: string;
  };
};
interface DemoProps{
      population: number;
  languages?: Record<string, string>;
  timezones: string[];
  demonyms?: Demonyms;

}
const Demography:React.FC<DemoProps> = ({
    population,
    languages,
    timezones,
    demonyms

}) => {
  return (
    <div>
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <UsersIcon className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">Demographics</h2>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-white dark:bg-gray-600 rounded-full p-4 mb-4 shadow-md">
                  <UsersIcon className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Population</h3>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-300">
                  {population.toLocaleString()}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">people</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white dark:bg-gray-600 rounded-full p-4 mb-4 shadow-md">
                  <BadgeIcon  className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Demonym</h3>
                <div className="text-xl font-medium text-purple-700 dark:text-purple-300">
                  <p>{demonyms?.eng.m} (m)</p>
                  <p>{demonyms?.eng.f} (f)</p>
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white dark:bg-gray-600 rounded-full p-4 mb-4 shadow-md">
                  <LanguagesIcon className="h-10 w-10 text-purple-600 dark:text-purple-400" />

                </div>
                <h3 className="text-lg font-semibold mb-1">Languages</h3>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                   {languages
                ? Object.values(languages).map((language, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {language}
                    </span>
                  ))
                : <span className="text-gray-500">No data</span>}
                </div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-white dark:bg-gray-600 rounded-full p-4 mb-4 shadow-md">
                  <ClockIcon className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-1">Timezones</h3>
                <div className="flex flex-col gap-1 mt-2">
                  {timezones.map((timezone, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {timezone}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Demography
