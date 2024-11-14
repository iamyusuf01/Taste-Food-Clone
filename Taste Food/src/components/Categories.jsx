import React from 'react'
import { pizza } from '../assets/assests'
import Arrow_Left from '../assets/Arrow_Left.svg'
import Arrow_Right from '../assets/Arrow_Right.svg'
import dot from '../assets/dot.svg'
import { useNavigate } from 'react-router-dom'

const Categories = () => {

  const navigate = useNavigate();
  return (
    <div className='text-gray2 hidden md:block'>
        <h1 className='text-center font-bold text-4xl'> Our Popular <span className='text-primary'>Categories</span></h1>
        {/* Buttons */}
        <div className=' flex justify-center gap-4 m-10 text-primary'>
          <div className='flex'>
            {/* <img className= 'bg-black' src={assets_Data.pizza_logo} alt=''/> */}
            <button className=' shadow-md rounded-lg hover:bg-primary hover:text-white text-xl h-12 w-[280px] hover:scale-110 transition-all duration-300'>Pizza</button>
          </div>
          <div  className='flex'>
            {/* <img src={assets_Data.burger_logo} alt=''/> */}
            <button className='shadow-md rounded-lg hover:bg-primary hover:text-white text-xl h-12 w-[280px] hover:scale-110 transition-all duration-300'>Burgers</button>
          </div>
          <div  className='flex'>
           {/*  <img className='' src={assets_Data.salad_logo} alt=''/> */}
            <button className='shadow-md rounded-lg hover:bg-primary hover:text-white text-xl h-12 w-[280px] hover:scale-110 transition-all duration-300'>Salads</button>
          </div>
          <div  className='flex'>
            {/* <img src={assets_Data.combo_logo} alt=''/> */}
            <button className='shadow-lg rounded-lg hover:bg-primary hover:text-white text-xl h-12 w-[280px] hover:scale-110 transition-all duration-300'>Combo</button>
          </div>
        </div>
          
        <div className=' flex gap-4 justify-center  '>
                {/* Cards */}
            {
              pizza.map((item, index) => {
                return (
                    <div key={index} className='shadow-lg bg-gray text-gray2 shadow-zinc-400 rounded-lg text-center w-[280px] h-[295px] p-6  hover:scale-95 transition-all duration-300 cursor-pointer'>
                      <img className='w-[200px] m-auto ' src={item.image} alt=''/>
                      <h2 className='text-xl font-medium text-center p-1'>{item.name}</h2>
                      <p className='font-light text-xs text-center p-1'>{item.description}</p>
                      <p className=' font-mediumtext-[16px] text-center p-1'>{item.price}</p>
                      <button  className='border rounded-lg bg-primary text-white text-xs h-8 w-28 hover:scale-110 transition-all duration-300'>Add to card</button>
                    </div>
  
                )
              })
            }
        </div>
        <div className='flex justify-center gap-4 m-10'>
          {/* Left Arrow */}
           <img className='w-3 hover:scale-110 transition-all duration-300 cursor-pointer' src={Arrow_Left} alt=''/>
           <div className='flex gap-2'>
              <img className='w-2' src={dot} alt=''/>
              <img className='w-2' src={dot} alt=''/>
              <img className='w-2' src={dot} alt=''/>
              <img className='w-2' src={dot} alt=''/>
           </div>
            {/* Right Arrow */}
           <img className='w-3 hover:scale-110 transition-all duration-300 cursor-pointer' src={Arrow_Right} alt=''/>
        </div>
        
    </div>
  )
}

export default Categories