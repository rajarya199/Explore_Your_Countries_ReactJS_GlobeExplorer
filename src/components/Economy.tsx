import {
  Banknote,
  CoinsIcon,
  DollarSignIcon,
  TrendingUpIcon,
} from 'lucide-react';

interface EconomyProps {
  currencies?: Record<string, { name: string; symbol: string }>;
  gini?: {
    [year: string]: number;
  };
}

const Economy = ({ currencies, gini }: EconomyProps) => {
  const giniKeys = Object.keys(gini || {});
  const latestGini =
    giniKeys.length > 0
      ? `${gini?.[giniKeys[0]]} (${giniKeys[0]})`
      : 'N/A';

  return (
    <div>
      <section className="mb-16">
        <div className="flex items-center mb-6">
          <DollarSignIcon className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mr-3" />
          <h2 className="text-2xl md:text-3xl font-bold">Economy</h2>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50	 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Currencies Section */}
            <div>
              <div className="flex items-center mb-4">
                <CoinsIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-2" />
                <h3 className="text-xl font-semibold">Currencies</h3>
              </div>
              <div className="space-y-4">
                {currencies &&
                  Object.entries(currencies).map(
                    ([code, { name, symbol }]) => (
                      <div
                        key={code}
                        className="bg-white dark:bg-gray-600 rounded-lg p-4 shadow-md flex items-center"
                      >
                        <div className="bg-yellow-100 dark:bg-yellow-900 rounded-full p-3 mr-4">
                          <Banknote className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <span className="font-bold text-lg mr-2">
                              {code}
                            </span>
                            <span className="text-2xl font-medium text-yellow-600 dark:text-yellow-400">
                              {symbol}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300">
                            {name}
                          </p>
                        </div>
                      </div>
                    )
                  )}
              </div>
            </div>

            {/* Gini Section */}
            <div>
              <div className="flex items-center mb-4">
                <TrendingUpIcon className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-2" />
                <h3 className="text-xl font-semibold">Economic Indicators</h3>
              </div>
              <div className="bg-white dark:bg-gray-600 rounded-lg p-6 shadow-md">
                <div className="mb-6">
                  <h4 className="text-lg font-medium mb-2">Gini Index</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mr-4">
                      <div
                        className="bg-yellow-500 h-4 rounded-full"
                        style={{
                          width: `${
                            gini ? gini[giniKeys[0]] ?? 0 : 0
                          }%`,
                        }}
                      ></div>
                    </div>
                    <span className="text-lg font-bold">{latestGini}</span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    The Gini coefficient measures income inequality (0 =
                    perfect equality, 100 = perfect inequality).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Economy;
