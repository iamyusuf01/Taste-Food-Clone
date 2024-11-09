import React from 'react'
import Taste_foot from '../assets/Taste_foot.svg'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center h-16 p-10 list-none bg-primary text-white'>
        <img className='w-32' src={Taste_foot} alt=''/>
        <div  className='grid grid-cols-3 items-center gap-4 cursor-pointer text-xs font-light '>
            <li>Privacy policy</li>
            <li onClick={() => navigate('/blog')}>Blog</li>
            <li>Help</li>
            <li>Terms of Serivice</li>
            <li onClick={() => navigate('/about')}>About Us</li>
            <li onClick={() => navigate('/contact')}>Contact Us</li>
        </div>
    </div>
  )
}

export default Footer