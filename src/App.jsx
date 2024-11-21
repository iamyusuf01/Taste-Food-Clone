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
import MyAddress from './pages/MyAddress'
import TermsAndConditions from './pages/TermsAndConditions'
import Restaurants from './components/Restaurants'
import Product from './components/Product'



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
          <Route path="/profile" element={<Profile />}/>
          <Route path="/address" element={<MyAddress />}/>
          <Route path="/order" element={<MyOrders />}/>
          <Route path="/favourites" element={<MyFavourites />}/>
          <Route path="/account" element={<MyAccount />}/>
          <Route path="/register" element={<ResisterYourBusiness />}/>
          <Route path="/terms" element={<TermsAndConditions />}/>
          <Route path="/restaurants" element={<Restaurants />}/>
          <Route path="/product" element={<Product/>}/>

        </Routes>
        <Footer />
        
    </div>
  )
}

export default App