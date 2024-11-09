import React from 'react'
import Coffeebean from '../assets/Coffeebean.svg'
import Team_Work from '../assets/Team_Work.svg'
import Coffee_Cup from '../assets/Coffee_Cup.svg'

const About = () => {
  return (
    <div>
       <div className='flex justify-between items-center pl-10'>
         <div>
          <h1 className=' font-bold text-4xl w-[40%] text-gray2'>We deliver <br/>for you to <span className='text-primary'>enjoy</span></h1>
          <p className='font-light text-sm w-[63%] pt-8'>We deliver the food of your choice wherever, whenever. 
             Select your food from only the top restaurants in the area, and get it in a flash. 
             Download the app now to discover more.</p>
         </div>
          <div className='flex items-center relative'>
            <img className=' ' src={Coffeebean} alt='Coffee bean'/>
            <img className='absolute right-[20%] rotate-180' src={Coffeebean} alt='Coffee bean'/>
            <img className='w-[220px] left-[18%] absolute' src={Coffee_Cup} alt='Coffee cup'/>
          </div>
       </div>
       <div>
          <h1 className='font-bold text-4xl w-[40%] text-gray2 pl-10'>Get to know <span className='text-primary'>us</span></h1>
          <div className='flex justify-between items-center p-10'>
             <img className='w-[400px] ' src={Team_Work} alt=''/>
             <div className='w-[40%]'>
               <h2 className='font-bold text-4xl w-[80%] text-gray2'><span className='text-primary'>Teamwork </span>is the key to our sucess</h2>
               <p className='font-light text-sm w-[83%] pt-8'>At TasteNow we make sure that every decision is determined by a team of us. Everyone´s opinion matters, and as group, we are stronger. We firmly belive that team work, makes the dream work.</p>
             </div>
          </div>
          <div className='p-10'>
            <h1 className='font-bold text-4xl w-[40%] text-gray2'>We are all in for the <span className='text-primary'>enviroment</span></h1>
            <p className='font-light text-sm w-[35%] pt-8'>TasteNow donates $1 penny for every purchase made from the app to an organization that takes care of our enviromet. We belive that with everyone´s help, we can make a better world. </p>
          </div>
       </div>
    </div>
  )
}

export default About