import React from 'react'
import { Offers } from '../../assets/assests'
import { AppContext } from '../../Context/AppContext'
import { useContext } from 'react'
const TopOffers = () => {

    const {currencySymbol} = useContext(AppContext);
  return (
    <div className='md:hidden'>
        <h1 className='font-bold text-gray2 text-2xl mx-4'>Top Offers</h1>
        <div className=''>
            {
                Offers.slice(0,3).map((item, index) => {
                    return (
                        <div key={index} className='grid grid-cols-3  mx-4 my-6 gap-6 rounded-lg shadow-md shadow-zinc-300 relative  '>
                            <img className=' w-32 mx-4 my-6' src={item.image} alt='' />
                            <div className='text-center items-center '>
                              <h2 className='font-bold mt-5 text-gray2'>{item.name}</h2>
                              <p className='font-light my-1'>{item.desc}</p>
                              <h3 className='font-medium'>{currencySymbol}{item.price}</h3>
                            </div>
                            <img className='absolute right-20' src={item.rating} alt='' />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TopOffers