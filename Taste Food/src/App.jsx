import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About' 
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import Card from './pages/Card'

const App = () => {
  return (
    <div className='bg-gray'>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/card" element={<Card />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
    </div>
  )
}

export default App