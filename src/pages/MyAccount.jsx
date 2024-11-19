import React, { useState } from 'react'
import MobNavbar from '../components/Mobile/MobNavbar'
import Person_icon from '../assets/Person_icon.svg'
import Arrow_Right from '../assets/Arrow_Right.svg'
import profile_pic from '../assets/profile_pic.svg'
const MyAccount = () => {

  const [user, setUser] = useState({
    name: 'Username',
    image:profile_pic,
    email: 'user@example.com',

  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className='md:hidden bg-white'>
        <MobNavbar/>
         {/* set Username and profile */}
      <div className=' grid grid-cols-2 justify-items-center mx-4 relative' > 
         <div className='flex gap-6 items-center mx-2'>
          <img className='w-20 rounded' src={user.image} alt=''/>
           <div>
            {
              isEdit ? <input className=' text-gray2 max-w-60 h-8 pl-2 text-sm bg-transparent outline-none border rounded-full  ' type='text' value={user.name} onChange={e => setUser (prev => ({...prev, name:e.target.value}) )} /> 
              : <p className='text-2xl  font-normal text-gray2'>{user.name}</p>  
            }
            <p className='text-sm text-gray2'>{user.email}</p>
           </div>
         </div>
        <div className='absolute my-6 right-6'>
        {
          isEdit
          ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Save</button>
          : <button className='border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
        }
      </div>
           
      </div>
      {/* My Acount setup */}
      <div >
         <h2 className='font-medium text-[18px] mx-4 my-4'>My account</h2>
        <div className='shadow-md shadow-zinc-300 mx-4 '>
        <div className='grid grid-cols-2 items-center mx-4 relative  h-14'>
           <div className='flex gap-4 pl-2'>
             <img className='w-4 ml-2' src={Person_icon} alt=''/>
             <p className='font-light text-sm'> Personal information</p>
           </div>
           <img className='w-3 absolute right-4' src={Arrow_Right} alt=''/>
         </div>
         <div className='grid grid-cols-2 items-center mx-4 relative border-t border-gray h-14'>
           <div className='flex gap-4 pl-2'>
             <img className='w-4 ml-2' src={Person_icon} alt=''/>
             <p className='font-light text-sm'> Notifications</p>
           </div>
           <img className='w-3 absolute right-4' src={Arrow_Right} alt=''/>
         </div>
        </div>
      </div>
      {/* Legal information */}
      <div >
         <h2 className='font-medium text-[18px] mx-4 my-4'>Legal information</h2>
        <div className='shadow-md shadow-zinc-300 mx-4 '>
        <div className='grid grid-cols-2 items-center mx-4 relative  h-14'>
           <div className='flex gap-4 pl-2'>
             <img className='w-4 ml-2' src={Person_icon} alt=''/>
             <p className='font-light text-sm'> Terms and conditions</p>
           </div>
           <img className='w-3 absolute right-4' src={Arrow_Right} alt=''/>
         </div>
         <div className='grid grid-cols-2 items-center mx-4 relative border-t border-gray h-14'>
           <div className='flex gap-4 pl-2'>
             <img className='w-4 ml-2' src={Person_icon} alt=''/>
             <p className='font-light text-sm'> Privacy Policy</p>
           </div>
           <img className='w-3 absolute right-4' src={Arrow_Right} alt=''/>
         </div>
          <div className='m-auto absolute right-6'>
           <button className='my-8  bg-primary px-8 py-2 rounded-full text-white text-xl transition-all' onClick={() => setIsEdit(false)}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount