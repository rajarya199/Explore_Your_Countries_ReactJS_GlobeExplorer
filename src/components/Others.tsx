import { BoxIcon, CarIcon } from 'lucide-react'
interface OtherProps{
       car: {
    signs: string[];
    side: 'left' | 'right';
  };
    fifa:string;
}
const Others = ({car,fifa}:OtherProps) => {
  return (
    <section>
         <div className="flex items-center mb-6">
            <BoxIcon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-2xl md:text-3xl font-bold">Others</h2>
          </div>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      FIFA Code
                    </span>
                    <span className="font-medium text-lg">{fifa}</span>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                    <span className="text-sm text-gray-500 dark:text-gray-400 block">
                      Car Sign
                    </span>
                    <span className="font-medium text-lg">
                      {car.signs[0]}
                    </span>
                  </div>
                 <div>
                    <h4 className="text-lg font-medium mb-2">Driving Side</h4>
                    <div className="flex items-center">
                      <CarIcon className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mr-2" />
                      <div>
                        <span className="font-medium">
                          {car.side.charAt(0).toUpperCase() +
                            car.side.slice(1)}{' '}
                          side of the road
                        </span>
                      </div>
                    </div>
                  </div>
                                <div className="flex flex-col items-center text-center">
</div>
</div>
       
                  </div>
    </section>
  )
}

export default Others
