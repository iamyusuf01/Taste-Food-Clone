  import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
  import shopping_card from '../assets/shopping_card.png'

  const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='bg-gray'>
      <div className="flex justify-between p-10 ">
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
    </div>
  )
}

export default Navbar