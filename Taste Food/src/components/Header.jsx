  import logo from '../assets/logo.svg'
  import food_bg from '../assets/food_bg.png'
  import shopping_card from '../assets/shopping_card.png'
  const Header = () => {
  return (
    <div className='bg-gray '>
       <div className="flex justify-between p-10 ">
       <img src={logo} alt=""/>
        <ul className="flex items-center gap-7 text-gray2 ">
          <li className='hover:text-primary cursor-pointer'>Home</li>
          <li className='hover:text-primary cursor-pointer'>About</li>
          <li className='hover:text-primary cursor-pointer'>Blog</li>
          <li className='hover:text-primary cursor-pointer'>Contact Us</li>
          <img className='h-6' src={shopping_card} alt=''/>
          <button className='border rounded-md bg-primary text-white text-xs h-8 w-20'>Sign Up</button>
        </ul>
       </div>
        <div className="flex justify-between m-10">
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