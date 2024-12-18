import React, { useState } from 'react'
import Email_image from '../assets/Email_image.svg';
import Fb_image from '../assets/Fb_image.svg';
import Linkedin_image from '../assets/Linkedin_image.svg';
import { useNavigate } from 'react-router';

const SignUp = () => {
  
  const [action , setAction] = useState('Sign Up')
  const navigate = useNavigate();
  return (
    <div>
      <div className='m-12 my-10 text-center'>
         <h1 className='font-bold text-4xl text-gray2'>{action}</h1>
         <p className='font-normal text-[15px] py-4 text-gray2'>{action} using social networks</p>
       <div className='flex justify-center items-center gap-3 '>
          <img className='cursor-pointer hover:scale-105 transition-all duration-300 h-8' src={Email_image} alt=''/>
          <img className='cursor-pointer hover:scale-105 transition-all duration-300 h-8'  src={Fb_image} alt=''/>
          <img className='cursor-pointer hover:scale-105 transition-all duration-300 h-8'  src={Linkedin_image} alt=''/>
       </div>
      </div>
        <div className='flex justify-center items-center gap-2 mx-12'>
          <hr className='w-36 border-y-[1.2px] border-gray2'/>
          <p className='font-normal text-sm text-gray2'>OR</p>
          <hr  className='w-36 border-y-[1.2px] border-gray2'/>
        </div>
        {/* Sign Up Form */}
        <div className=' my-2 grid justify-items-center text-gray2 font-normal text-[16px]'>
          <input className=' bg-zinc-50 outline-none w-[320px] h-10  border-2 rounded-sm pl-4 border-primary' type='email' placeholder='Email'/>
          <br/>
          <input className=' bg-zinc-50 outline-none w-[320px] h-10  border-2 rounded-sm pl-4 border-primary' type='password' placeholder='Password'/>
          <br/>
         
            <button className='border rounded-md text-white my-6 bg-primary text-sm h-8 w-28 hover:scale-110 transition-all duration-300'>
              {
                action === 'Sign Up' ? 'Sign Up' : 'Login'
              }
            </button>
            {
              action === 'Sign Up' 
              ? <p className='text-sm font-light  '>Already have an account? <span className='mx-1' onClick={() => setAction('Login') }>Login here </span></p>
              : <p className='text-sm font-light  '>Sign up? <span className='mx-1' onClick={() => setAction('Sign Up')}>Click here</span></p>
            }
         
        </div>
        <div className='mx-[31%] grid grid-rows-3 justify-items-center text-center my-16 w-[40%]'>
          <h1 className='font-bold text-4xl text-gray2'>Work <span className='text-primary'>whenever</span> you want, <span className='text-primary'>whenever</span> you are</h1>
          <p className='font-normal py-4 text-sm text-gray2'>Work with us and accomodate your schedule as you like. Our work rates have never been higher, this is because we give our empoyees several benefits that they enjoy throughout their journey.</p>
          <p className='border text-center p-1 rounded-md text-white bg-primary text-sm h-8 w-28 hover:scale-110 transition-all duration-300'>Join us</p>
        </div>
    </div>
  )
}

export default SignUp