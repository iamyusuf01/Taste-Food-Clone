import React from 'react'
import Email_image from '../assets/Email_image.svg';
import Fb_image from '../assets/Fb_image.svg';
import Linkedin_image from '../assets/Linkedin_image.svg';

const SignUp = () => {
  return (
    <div>
      <div className='m-12 my-10 text-center'>
         <h1 className='font-bold text-4xl text-gray2'>Sign Up</h1>
         <p className='font-normal text-[15px] py-4 text-gray2'>Sigup using social networks</p>
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
        <div className='mx-[37.5%] my-4 text-gray2 font-normal text-[16px]'>
          <input className='my-4 bg-zinc-50 outline-none w-[320px] h-10  border-2 rounded-sm pl-4 border-primary' type='email' placeholder='Email'/>
          <br/>
          <input className='my-2 bg-zinc-50 outline-none w-[320px] h-10  border-2 rounded-sm pl-4 border-primary' type='password' placeholder='Password'/>
          <br/>
          <button className='border rounded-md text-white my-6 bg-primary text-sm h-8 w-28 hover:scale-110 transition-all duration-300'>Sign Up</button>
        </div>
        <div className='mx-[31%] text-center my-16 w-[40%]'>
          <h1 className='font-bold text-4xl text-gray2'>Work <span className='text-primary'>whenever</span> you want, <span className='text-primary'>whenever</span> you are</h1>
          <p className='font-normal py-8 text-sm text-gray2'>Work with us and accomodate your schedule as you like. Our work rates have never been higher, this is because we give our empoyees several benefits that they enjoy throughout their journey.</p>
          <p className='border mx-[38%] text-center p-1 rounded-md text-white bg-primary text-sm h-8 w-28 hover:scale-110 transition-all duration-300'>Join us</p>
        </div>
    </div>
  )
}

export default SignUp