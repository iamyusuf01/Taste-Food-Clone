  import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
  import shopping_card from '../assets/shopping_card.png'
import { useState } from 'react'
import humburger from '../assets/humburger.svg'
import error from '../assets/error.svg'
import search_icon from '../assets/search_icon.svg'

  const Navbar = () => {
    
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    
  return (
    <div className='bg-gray'>
      <div className="flex-cols hidden md:flex  justify-between p-10 ">
       <img onClick={() => navigate('/')} className="cursor-pointer" src={logo} alt=""/>
        <ul className="flex items-center gap-7 text-gray2 ">
          <NavLink to={'/'}>
           <li className='hover:text-primary cursor-pointer'>Home</li>
          </NavLink>
         <NavLink to={'/about'}>
           <li className='hover:text-primary cursor-pointer'>About</li>
         </NavLink>
         <NavLink to={'/blog'}>
          <li className='hover:text-primary cursor-pointer'>Blog</li>
         </NavLink>
         <NavLink to={'/contact'}>
           <li className='hover:text-primary cursor-pointer'>Contact Us</li>
         </NavLink>
          <img onClick={() => navigate('/card')} className='h-6 hover:scale-110 transition-all duration-300 cursor-pointer' src={shopping_card} alt=''/>
          <button onClick={() => navigate('/signup')}  className='border rounded-md bg-primary text-white text-xs h-8 w-20 hover:scale-110 transition-all duration-300'>Sign Up</button>
        </ul>
       </div>
       <div className='bg-white'>
         <div className='flex md:hidden justify-between px-5 py-6'>
           <img onClick={() => setShowMenu(true)} className=' w-6 md:hidden' src={humburger} alt=''/>
           <h1 className='font-normal text-gray2 text-xl'> Sunset Boulevard</h1>
           <img  className='w-6 md:hidden' src={error} alt=''/>
         </div>
         {/* Search Bar */}
           <div className='flex justify-center flex-nowrap md:hidden'>
                  <div className='flex mx-12  border-[1.5px] border-zinc-300 rounded-full h-9 w-full justify-between'>
                    <input className=' p-2 text-sm bg-transparent outline-none w-[240px]  rounded-full' type='text' placeholder='Search Restaurants' />
                      <div className='bg-primary rounded-full w-11 mx-1 my-0.5 '>
                      <img className=' m-auto p-1.5 '  src={search_icon} alt=''/>
                      </div>
                  </div>
           </div>
              {/* Mobile Menu */}
           <div className={` ${showMenu ? 'fixed w-[250px] h-full ' : 'h-0 w-0'} md:hidden left-0 top-0 z-20 overflow-hidden bg-gray transition-all`}> 
           <div className='flex items-center justify-between px-5 py-6'>
                {/* <img className='w-36' src={humburger} alt=''/> */}
                {/* <img className='w-6' onClick={() => setShowMenu(false)} src={humburger} alt=''/> */}
            </div>

             <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-md font-medium'>
             <NavLink  onClick={() => setShowMenu(false)} to={'/profile'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>Username</p></NavLink>
                <NavLink className='px-4 py-1 rounded inline-block' onClick={() => setShowMenu(false)} to={'/'}><p className='px-2 py-1 rounded text-center  hover:bg-primary hover:text-gray w-[250px] inline-block'>Home</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/address'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>My Address</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/order'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>My Orders</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/favourites'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>My Favourites</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/account'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>My Account</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/register'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>Resister Your Business</p></NavLink>
                <NavLink  onClick={() => setShowMenu(false)} to={'/terms'}><p className='px-4 py-1 rounded inline-block text-center  hover:bg-primary hover:text-gray w-[250px]'>Terms & Conditions</p></NavLink>
             </ul>
          </div>
       </div>
    </div>
  )
}

export default Navbar