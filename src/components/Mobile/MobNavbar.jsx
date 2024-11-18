import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import humburger from '../../assets/humburger.svg';
import error from '../../assets/error.svg';
import { assets_Data } from '../../assets/assests';


const MobNavbar = () => {

    const [showMenu, setShowMenu] = useState(false)
  return (
    <div>
         <div className='flex md:hidden justify-between px-5 py-2'>
           <img onClick={() => setShowMenu(true)} className=' w-6 md:hidden' src={humburger} alt=''/>
           <h1 className='font-normal text-gray2 text-xl'> Sunset Boulevard</h1>
           <img  className='w-6 md:hidden' src={error} alt=''/>
         </div>
              {/* Mobile Menu */}
           <div className={` ${showMenu ? 'fixed w-[250px] h-full ' : 'h-0 w-0'} md:hidden left-0 top-0 z-20 overflow-hidden bg-gray  transition-all`}> 
           <div className='flex items-center justify-between px-5 py-6'>
                {/* <img className='w-36' src={humburger} alt=''/> */}
                {/* <img className='w-6' onClick={() => setShowMenu(false)} src={humburger} alt=''/> */}
            </div>

             <ul className='flex flex-col gap-2 text-md font-medium text-gray2'>
                <NavLink  onClick={() => setShowMenu(false)} to={'/profile'}>
                  <p 
                      className='px-4 py-1 rounded inline-block text-center w-[250px]'>Username</p>
                </NavLink>
                <NavLink className='py-1 rounded inline-block' onClick={() => setShowMenu(false)} to={'/'}>
                  <div className='flex items-center px-6 hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4 fill-current hover:fill-white' src={assets_Data.Home_Icon} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>Home</p>
                  </div>
                </NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/address'}>
                  <div className='flex items-center px-6  hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4' src={assets_Data.Location_icon} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>My Address</p>
                  </div>
                </NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/order'}>
                 <div className='flex items-center px-6  hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4' src={assets_Data.Order_icon} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>My Orders</p>
                  </div>
                </NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/favourites'}>
                 <div className='flex items-center px-6  hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4' src={assets_Data.Heart_icon} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>My Favourites</p>
                  </div>
                </NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/account'}>
                 <div className='flex items-center px-6  hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4' src={assets_Data.Person_icon} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>My Account</p>
                  </div>                </NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/register'}>
                 <div className='flex items-center px-6  hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4' src={assets_Data.register_your_business} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>Resister Your Business</p>
                  </div>                </NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/terms'}>
                 <div className='flex items-center px-6  hover:bg-primary hover:text-gray w-[250px]'>
                    <img className='w-4' src={assets_Data.Terms_icon} alt=''/>
                    <p className=' py-1 rounded mx-3  inline-block'>Terms And Conditions</p>
                  </div>                
                </NavLink>
             </ul>
          </div>
       </div>
  )
}

export default MobNavbar