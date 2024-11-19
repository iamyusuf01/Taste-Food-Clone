import React, { useState } from 'react'
import screen_shot from '../assets/screen_shot.svg'
import show_tv from '../assets/show_tv.svg'
import Arrow_Right from '../assets/Arrow_Right.svg'
import About_img from '../assets/About_img.svg'
import { assets_Data } from '../assets/assests'
import { department } from '../assets/assests'

const Contact = () => {

  
  return (
    <div className='hidden md:block'>
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
      <div className='mx-10 flex flex-wrap justify-center gap-8 '>
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
      {/* Contact US */}
      <div className=' bg-primary my-10 pb-8'>
        <h1 className='font-bold text-4xl text-white w-[40%] p-10'>Contact Us</h1>
        <form className='mx-10 ' >
         <div className='flex justify-evenly pt-4 gap-4 '>
            <div className='flex rounded-md bg-primary1 w-[280px] h-8 items-center '>
                <img className='h-4 pl-2' src={assets_Data.Person_icon} alt=''/>
                <input className='bg-transparent  outline-none  text-white ml-4 mr-2 w-full' type='text' placeholder='Your Name'/>
            </div>
            <div className='flex rounded-md  bg-primary1 w-[280px] h-8 items-center '>
                <img className='h-4 pl-2'  src={assets_Data.phone_icon} alt=''/>
                <input className='bg-transparent outline-none text-white ml-4 mr-2 w-full' type='digit' placeholder='Phone Number'/>
            </div>
            <div className='flex rounded-md  bg-primary1 w-[280px] h-8 items-center '>
                <img className='h-4 pl-2'  src={assets_Data.email_icon} alt=''/>
                <input  className='bg-transparent  outline-none text-white  ml-4 mr-2 w-full' type='email' placeholder='Your Email'/>
            </div>
          </div>
           <div className='flex  rounded-md  bg-primary1  h-44 mx-24 mt-12 w-[84%] pl-2 '>
              <img className='h-5 pl-3 my-4'  src={assets_Data.text_icon} alt=''/>
              <input className='bg-transparent outline-none text-white pb-[12%] mx-3 w-full' type='text' placeholder='Enter Your Message'/>
            </div>
              <button className='border rounded-md bg-white  mt-6 text-primary text-sm mx-[83%] h-8 w-28 hover:scale-110 transition-all duration-300'>Send</button>
        </form>
      </div>
       {/* About Foot */}
       <div>
         <h1 className='font-bold text-5xl text-gray2 text-center p-10  '>Work with us, <br/> <span className='text-primary'>make a difference</span></h1>
         <div className='flex p-10 gap-4 pb-16'>
          {
            department.map((item, index) => (
              <div key={index} className='shadow-lg  text-gray2 shadow-zinc-400 rounded-lg  hover:scale-95 transition-all duration-300 cursor-pointer'>
                <img className='object-cover' src={item.image} alt=''/>
                <div className='flex gap-3 p-1 items-center text-center'>
                  <p className='text-primary pl-4 '>{item.title}</p>
                  <img className='w-2 pt-1 hover:scale-110 transition-all duration-300 cursor-pointer' src={Arrow_Right} alt=''/>
                </div>
              </div>
              
            ))
          }
         </div>
       </div>
    </div>
  )
}

export default Contact