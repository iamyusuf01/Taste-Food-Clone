import React from 'react'
import { NewRestaurants } from '../../assets/assests'
const OpenNewRestaurants = () => {
  return (
    <div>
             {/* Newly Opend */}
      <div className='mx-4 border-t-2 border-gray my-8 md:hidden '>
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

export default OpenNewRestaurants