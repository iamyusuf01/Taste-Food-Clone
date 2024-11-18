import React from 'react';
import { assets_Data, } from '../../assets/assests';
import { useNavigate } from 'react-router';

const FoodOption = () => {
  const navigate = useNavigate();
  return (
    <div className='md:hidden bg-white '>
      <div className='grid grid-cols-[160px_minmax(200px,_1fr)]'>
       {/* Left Side */}
        <div  onClick={() => navigate('/restaurants') } className='rounded-lg  bg-gray mx-4 h-[229px] w-36  '>
            <h1 className='text-center py-10 font-medium text-sm text-gray2'>Restaurants</h1>
            <img className='w-36 absolute rounded-b-lg' src={assets_Data.burger_icon} alt=''/>
        </div>
        {/* Upper Side */}
        <div>
          <div className='flex justify-between  relative rounded-lg bg-gray mx-4  h-24'>
             <h1 className='font-medium p-8 text-gray2 text-sm '>Nearest Market</h1>
             <img className='h-[78px] absolute right-0 my-[18px] rounded-lg' src={assets_Data.shopping_bag1} alt=''/>
           </div>
            {/* Lower Side */}
           <div className='flex flex-nowrap  justify-center mx-4 my-4 gap-4'>
              <div className=' h-28 w-[50%] rounded-lg bg-gray relative  '>
                <h1 className='font-medium my-4 text-center text-sm text-gray2 '>Nearby Restaurants</h1>
                <img className='absolute rounded-lg my-1 ' src={assets_Data.shopping_bag2} alt=''/>
              </div>
              <div className=' h-28 w-[50%] relative  rounded-lg bg-gray'>
                <h1 className='font-medium my-4 text-center text-sm text-gray2 '>Special Offers</h1>
                <img className='h-14 absolute right-0 my-1 ' src={assets_Data.ice_cream} alt=''/>
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default FoodOption