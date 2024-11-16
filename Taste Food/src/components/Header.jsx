import React from 'react'
import food_bg from '../assets/food_bg.png'
const Header = () => {
  return (
    <div className='mb-8 outfit'>
        <div className=" hidden md:flex justify-between m-10 mb-8 ">
           {/* right side */}
          <div className='mt-16 w-[60%] '>
            <h1 className='font-bold text-gray2 text-6xl'> Experience food <span className="text-primary">Delivery</span> like no other   </h1>
            <p className='font-light text-xl  pt-8'>We deliver the food of your choice wherever, whenever. Select your food from only the top restaurants in the area, and get it in a flash. Download the app now to discover more.</p>
         </div>
         {/* left side */}

         <div className='w-[663px]'>
            <img className= ''src={food_bg} alt=''/>
         </div>
       </div>
    </div>
  )
}

export default Header