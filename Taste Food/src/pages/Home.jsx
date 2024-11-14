import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Banner from '../components/Banner'
import FoodOption from '../components/Mobile/FoodOption'

const Home = () => {
  return (
    <div>
        <Header/>
        <Categories/>
        <FoodOption />
        <Banner/>
    </div>
  )
}

export default Home