import React from 'react'
import search_icon_red from '../assets/search_icon_red.svg'
import filter_icon from '../assets/filter_icon.svg'
import { Articles } from '../assets/assests'
import Cirlce_Slider from '../assets/Cirlce_Slider.svg'

const Blog = () => {
  return (
    <div >
       <div className='text-center p-10  '>
          <h1 className='font-bold text-gray2 text-6xl px-[20%] leading-normal'>Join our
            <span className='text-primary'> community </span> blogs and be a part of 
            <span className='text-primary'> us </span>
          </h1>
           <p className='font-light text-xl px-[25%]  p-8'>Discover new blogs every week, and share your knowledge with the community. Be a part of our everyday blogs within the TasteNow community.</p>
          <button className='border rounded-md bg-primary text-white text-xs  h-10 w-28 hover:scale-110 transition-all duration-300'>Create a blog</button>
       </div>
       {/* Search and Filter  */}
       <div className='flex p-10 gap-4'>
          <div className='flex border-2 border-primary rounded-full h-9 w-[300px] justify-between '>
             {/* Search Bar */}
             <input type='text' className=' p-4 text-sm text-gray2 bg-transparent outline-none w-[240px]  rounded-full' placeholder='Search blog'/>
             <img className='w-5 mx-3'  src={search_icon_red} alt=''/>
          </div>
          {/* Filter */}
          <div className='border-2 border-primary rounded-full h-9 w-12 '>
             <img className='m-auto p-1'  src={filter_icon} alt=''/>
          </div>
       </div>
       {/* Read Blogs */}
       <div className=''>
         <div className='p-10'>
          {
            Articles.map((item, index) => {
              return (
                <div key={index} className='my-8 mt-0 p-10 flex justify-between shadow-md  text-gray2 shadow-zinc-400 rounded-lg '>
                  <div className='w-[70%]'>
                    <h1 className='font-bold text-2xl text-gray2 '>{item.title}  
                     <span className='text-primary'> {item.name}</span> <span>{item.work}</span>
                    </h1>
                      <p className='font-light text-sm py-6'>{item.description}</p>
                      <button  className='border rounded-md bg-primary text-white text-xs h-8 w-28 hover:scale-110 transition-all duration-300'>Read blog</button>
                    </div>
                  <div className='w-[300px]'>
                    <img src={item.image} alt=''/>
                  </div>
                </div>
              )
            })
          }
         </div>
       </div>
    </div>
  )
}

export default Blog