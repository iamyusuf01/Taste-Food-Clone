import React, { useContext } from 'react'
import Arrow_left from '../assets/Arrow_left.svg';
import search_icon from '../assets/search_icon.svg'
import { assets_Data, Offers } from '../assets/assests';
import stars_icons from '../assets/stars_icons.svg'
import Heart_Icon from "../assets/Heart_Icon.png";
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
const Product = () => {

    const {currencySymbol} = useContext(AppContext)

  return (
    <div className='md:hidden'>
        <div className='bg-primary rounded-b-3xl py-6 '>
            <div className='grid grid-cols-2 items-center relative mx-5 py-4'>
               <ul>
                    <NavLink to={'/'}>
                       <li> <img className='w-3' src={Arrow_left} alt=''/> </li>
                    </NavLink>
                    <li> <img className=' fixed right-4 top-10 ' src={search_icon} alt=''/></li>
               </ul>
            </div>
            <div className=''>
                <img className='m-auto w-[300px] ' src={assets_Data.pizza_img1} alt=''/>
                <div className='grid grid-cols-2 items-center relative mx-4'>
                    <div className='text-white mx-6 my-4'>
                    <h2 className='font-medium  text-2xl'>Di Napoles</h2>
                    <img className='my-2' src={stars_icons} alt=''/>
                    <p className='font-light text-xs'>Italian, pastas, pizzas, calzone,
                    sea food</p>
                    </div>
                    <div className=' fixed right-12 bg-white rounded-full w-12 h-12 '>
                      <img className='m-auto py-4' src={Heart_Icon} alt=''/>
                    </div>
                </div>
            </div>
        </div>
        {/* Created Pizzas & Calzone */}
        <div>
            <h1 className='font-bold text-2xl text-gray2 mx-4 my-6'>Pizzas & Calzone</h1>
            <div>
                {Offers.slice(0, 3).map((item, index) => {
                return (
                <div
                    key={index}
                    className="grid grid-cols-3  mx-4 my-6  rounded-lg shadow-md shadow-zinc-300 relative h-28  "
                >
                    <img className="w-36 mx-2 my-6 " src={item.image} alt="" />
                    <div className="text-center items-center ">
                    <h2 className="font-bold ml-6 mt-5 text-gray2">
                        {item.name}
                    </h2>
                    <div className="flex justify-center items-center gap-1 ml-6 my-1 ">
                        <p className="font-light text-sm">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-center ml-6 my-2">
                        <p className="font-bold text-sm">{currencySymbol}{item.price}</p>
                    </div>
                    </div>
                    <img className="absolute right-20" src={item.rating} alt="" />
                    <img
                    className="absolute right-6 top-20 w-4"
                    src={Heart_Icon}
                    alt=""
                    />
                </div>
                );
             })}
            </div>
        </div>
        {/* Pastas */}
        <div>
        <h1 className='font-bold text-2xl text-gray2 mx-4 my-6'>Pastas</h1>
            <div>
                {Offers.slice(3, 4).map((item, index) => {
                return (
                <div
                    key={index}
                    className="grid grid-cols-3  mx-4 my-6  rounded-lg shadow-md shadow-zinc-300 relative h-28  "
                >
                    <img className="w-28 mx-2 " src={item.image} alt="" />
                    <div className="text-center items-center ">
                    <h2 className="font-bold ml-6 mt-5 text-gray2">
                        {item.name}
                    </h2>
                    <div className="flex justify-center items-center gap-1 ml-6 my-1 ">
                        <p className="font-light text-sm">{item.desc}</p>
                    </div>
                    <div className="flex items-center justify-center ml-6 my-2">
                        <p className="font-bold text-sm">{currencySymbol}{item.price}</p>
                    </div>
                    </div>
                    <img className="absolute right-20" src={item.rating} alt="" />
                    <img
                    className="absolute right-6 top-20 w-4"
                    src={Heart_Icon}
                    alt=""
                    />
                </div>
                );
             })}
            </div>
        </div>
    </div>
  )
}

export default Product