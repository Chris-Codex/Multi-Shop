import React from 'react'
import { SearchBar, Headers, HeaderLinks, SliderBg, SliderSm, Service } from '.'
import Category from '../components/Category/Category'
import FeaturedProduct from '../components/FeaturedProducts/FeaturedProduct'


const Home = () => {
    return (
        <div className='home-container'>
            <Headers />
            <SearchBar />
            <HeaderLinks />
            <SliderSm />
            <SliderBg />
            <Service />
            <Category />
            <FeaturedProduct />
        </div>
    )
}

export default Home
