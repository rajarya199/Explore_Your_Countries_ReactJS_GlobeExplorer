import { CalendarIcon,  CheckCircle, HashIcon, LandmarkIcon, XIcon } from 'lucide-react';

interface OfficialProps{
      startOfWeek?: string;
        independent: boolean,
cca3: string;
  ccn3:string;
unMember:boolean,
tld:string[]
}
const GovermentOfficial = ({
    startOfWeek,
    independent,
    cca3,
    ccn3,
    unMember,
    tld
}:OfficialProps) => {
  return (
    <div>
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <LandmarkIcon className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Government & Identity
            </h2>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-lg">
            <div className="bg-green-600 dark:bg-green-700 py-4 px-6">
              <h3 className="text-white text-xl font-semibold">
                Official Status
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center">
                  {independent ? (
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  ) : (
                    <XIcon className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                  )}
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Independent
                    </span>
                    <span className="font-medium">
                      {independent ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  {unMember ? (
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  ) : (
                    <XIcon className="h-6 w-6 text-red-600 dark:text-red-400 mr-3" />
                  )}
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      UN Member
                    </span>
                    <span className="font-medium">
                      {unMember ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Start of Week
                    </span>
                    <span className="font-medium">
                      {startOfWeek
                        ? startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1)
                        : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="flex items-center mb-4">
                  <HashIcon className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <h4 className="text-lg font-semibold">Domain & Codes</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Top-Level Domain
                    </span>
                    <span className="font-medium text-lg">
                      {tld[0]}
                    </span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      CCN3 Code
                    </span>
                    <span className="font-medium text-lg">{ccn3}</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      CCA3 Code
                    </span>
                    <span className="font-medium text-lg">
                      {cca3}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default GovermentOfficial
