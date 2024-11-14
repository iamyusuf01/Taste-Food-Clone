import React from 'react';
import { assets_Data } from '../../assets/assests';

const FoodOption = () => {
  return (
    <div className='md:hidden grid grid-cols-[160px_minmax(200px,_1fr)] bg-white'>
       {/* Left Side */}
        <div className='rounded-lg flex-wrap bg-gray mx-4 h-[230px] w-36 relative '>
            <h1 className='text-center py-9 font-medium text-gray2'>Restaurants</h1>
            <img className='w-36 fixed rounded-b-lg' src={assets_Data.burger_icon} alt=''/>
        </div>
        {/* Upper Side */}
        <div>
          <div className='flex justify-between relative rounded-lg bg-gray mx-4  h-24'>
             <h1 className='font-medium p-8 text-gray2 '>Nearest Market</h1>
             <img className='h-20  mt-3' src={assets_Data.shopping_bags_1} alt=''/>
           </div>
            {/* Lower Side */}
           <div className='flex flex-nowrap  justify-center mx-4 my-4 gap-4'>
              <div className=' h-28 w-[50%] rounded-lg bg-gray  '>
                <h1 className='font-medium my-4 text-center text-gray2 '>Nearby Restaurants</h1>
                <img className='' src={assets_Data.shopping_bags_2} alt=''/>
              </div>
              <div className=' h-28 w-[50%] relative  rounded-lg bg-gray'>
                <h1 className='font-medium my-4 text-center text-gray2 '>Special Offers</h1>
                <img className='h-14 fixed mx-2 ' src={assets_Data.ice_cream} alt=''/>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default FoodOption