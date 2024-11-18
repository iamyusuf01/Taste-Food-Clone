import React from 'react'
import search_icon from '../../assets/search_icon.svg';
const Search = () => {
  return (
    <div>
         {/* Search Bar */}
         <div className='flex justify-center flex-nowrap md:hidden my-6'>
                  <div className='flex mx-12  border-[1.5px] border-zinc-300 rounded-full h-9 w-full justify-between'>
                    <input className=' p-2 text-sm bg-transparent outline-none w-[240px]  rounded-full' type='text' placeholder='Search Restaurants' />
                      <div className='bg-primary rounded-full w-11 mx-1 my-0.5 '>
                      <img className=' m-auto p-1.5 '  src={search_icon} alt=''/>
                      </div>
                  </div>
           </div>
    </div>
  )
}

export default Search