import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About' 
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Card from './pages/Card'
import Footer from './components/Footer'
import MyAccount from './pages/MyAccount'
import MyFavourites from './pages/MyFavourites'
import MyOrders from './pages/MyOrders'
import Profile from './pages/Profile'
import ResisterYourBusiness from './pages/ResisterYourBusiness'
import MyAddresses from './pages/MyAddresses'
import TermsAndConditions from './pages/TermsAndConditions'


const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myaccount" element={<MyAccount />}/>
          <Route path="/myfavourites" element={<MyFavourites />}/>
          <Route path="/myorders" element={<MyOrders />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/resisteryourbusiness" element={<ResisterYourBusiness />}/>
          <Route path="/myaddresses" element={<MyAddresses />}/>
          <Route path="/termsandconditions" element={<TermsAndConditions />}/>
        </Routes>
        <Footer />
        
    </div>
  )
}

export default App