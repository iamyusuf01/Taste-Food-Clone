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
        </Routes>
        <Footer />
        
    </div>
  )
}

export default App