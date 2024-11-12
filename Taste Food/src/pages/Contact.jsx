import React from 'react'
import screen_shot from '../assets/screen_shot.svg'
import show_tv from '../assets/show_tv.svg'

const Contact = () => {
  return (
    <div>
      <div className='flex p-10 justify-between items-center'>
        <div>
         <h1 className='font-bold text-4xl w-[40%] text-gray2'>How can we <span className='text-primary'>help</span></h1>
         <p className='font-light text-sm w-[45%] pt-8'>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
        </div>
        <div className=''>
         {/*  <img className=' relative -rotate-180 rotate w-[400px]' src={show_tv} alt=''/> */}
         {/*  <img className='' src={screen_shot} alt=''/> */}
        </div>
      </div>
      <div className='p-10 flex justify-center gap-8 '>
        {/* first cards */}
        <div className='shadow-lg rounded-xl shadow-zinc-400 w-[300px] h-[360px]'>
          <div className='h-4 bg-yellow-600 rounded-t-xl'/>
          <h1 className='font-bold text-2xl text-gray2 pl-10 pt-10'>Press</h1>
          <p className='font-light text-sm w-[80%] px-10 py-8'>Are you interested in our latest news or working on a TasteNow story and need to get in touch?</p>
          <p className='p-1.5 mx-16 my-16 border rounded-lg bg-yellow-500 text-center text-white font-light text-xs h-8 w-40 hover:scale-110 transition-all duration-300'>Visit Press Page</p>
        </div>
        {/* second cards */}
        <div className='shadow-lg rounded-xl shadow-zinc-400 w-[300px]'>
          <div className='h-4 bg-primary rounded-t-xl'/>
          <h1 className='font-bold text-2xl text-gray2 p-10'>Help & Support</h1>
          <p className='font-light text-sm w-[80%] pl-10'>Our support team is spread across the globe to give you answers fast. Ask about anything, at anytime and we’ll be there for you.</p>
          <p className='p-1.5 mx-16 mt-10 border rounded-lg bg-primary text-center text-white font-light text-xs h-8 w-40 hover:scale-110 transition-all duration-300'>Visit Support Page</p>
          <h2 className='text-primary text-center mt-4 '>Submit a request</h2>
        </div>
        {/* third cards */}
        <div className='shadow-lg rounded-xl shadow-zinc-400 w-[300px]'>
          <div className='h-4 bg-yellow-600 rounded-t-xl'/>
          <h1 className='font-bold text-2xl text-gray2 p-10'>Sales</h1>
          <p className='font-light text-sm w-[80%] pl-10'>Get in touch with our sales team to see how we can work together. TasteNow is always searching for great candidates to become a part of our family, contact us!</p>
          <p className=' p-1.5 mx-16 my-10 border rounded-lg bg-yellow-500 text-center text-white font-light text-xs h-8 w-40 hover:scale-110 transition-all duration-300'>Contact Sales</p>
        </div>
      </div>
    </div>
  )
}

export default Contact