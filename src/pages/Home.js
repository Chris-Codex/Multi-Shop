import React from 'react'
import SecondHeader from '../components/Headers/SecondHeader'
import ThirdHeader from '../components/Headers/ThirdHeader'
import TopHeader from '../components/Headers/TopHeader'
import Sliders from '../components/slider/Sliders'

const Home = () => {
    return (
        <div className='home-container '>
            <TopHeader />
            <SecondHeader />
            <ThirdHeader />
            <Sliders />
        </div>
    )
}

export default Home
