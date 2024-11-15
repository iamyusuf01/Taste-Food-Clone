import React from 'react';
import { assets_Data, NewRestaurants } from '../../assets/assests';

const FoodOption = () => {
  return (
    <div className='md:hidden bg-white '>
      <div className='grid grid-cols-[160px_minmax(200px,_1fr)]'>
       {/* Left Side */}
        <div className='rounded-lg  bg-gray mx-4 h-[229px] w-36  '>
            <h1 className='text-center py-10 font-medium text-sm text-gray2'>Restaurants</h1>
            <img className='w-36 absolute rounded-b-lg' src={assets_Data.burger_icon} alt=''/>
        </div>
        {/* Upper Side */}
        <div>
          <div className='flex justify-between  relative rounded-lg bg-gray mx-4  h-24'>
             <h1 className='font-medium p-8 text-gray2 text-sm '>Nearest Market</h1>
             <img className='h-[78px] absolute right-0 my-[18px] rounded-lg' src={assets_Data.shopping_bags_1} alt=''/>
           </div>
            {/* Lower Side */}
           <div className='flex flex-nowrap  justify-center mx-4 my-4 gap-4'>
              <div className=' h-28 w-[50%] rounded-lg bg-gray relative  '>
                <h1 className='font-medium my-4 text-center text-sm text-gray2 '>Nearby Restaurants</h1>
                <img className='absolute rounded-lg my-1 ' src={assets_Data.shopping_bags_2} alt=''/>
              </div>
              <div className=' h-28 w-[50%] relative  rounded-lg bg-gray'>
                <h1 className='font-medium my-4 text-center text-sm text-gray2 '>Special Offers</h1>
                <img className='h-14 absolute right-0 my-1 ' src={assets_Data.ice_cream} alt=''/>
              </div>
          </div>
        </div>
      </div>
      <div className='mx-4 border-t-2 border-gray my-8'>
            <h1 className=' font-bold text-gray2 text-2xl my-6'>Newly Opened</h1>
           <div className='flex flex-nowrap justify-center items-center gap-4 my-8'>
                {
                  NewRestaurants.map((item, index) => {
                    return (
                      <div key={index} className='flex-wrap w-[200px]  text-gray2  '>
                        <img className='w-full' src={item.image} alt=''/>
                        <h2 className=' font-medium text-sm mx-2 mt-4 '>{item.name}</h2>
                        <p className='font-normal text-sm mx-2 '>{item.mintues}</p>
                      </div>
                    )
                  })
                }
           </div>
        </div>
    </div>
  )
}

export default FoodOption