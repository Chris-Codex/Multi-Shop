import React from 'react'
import { SearchBar, Headers, HeaderLinks, SliderBg, SliderSm, Service } from '.'


const Home = () => {
    return (
        <div className='home-container '>
            <Headers />
            <SearchBar />
            <HeaderLinks />
            <SliderSm />
            <SliderBg />
            <Service />
        </div>
    )
}

export default Home
