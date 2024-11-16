import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Banner from '../components/Banner'
import FoodOption from '../components/Mobile/FoodOption'
import OpenNewRestaurants from '../components/Mobile/OpenNewRestaurants'
import TopOffers from '../components/Mobile/TopOffers'

const Home = () => {
  return (
    <div>
        <Header/>
        <Categories/>
        <Banner/>
        {/* Mobile Version */}
        <FoodOption />
        <OpenNewRestaurants/>
        <TopOffers/>
       
    </div>
  )
}

export default Home