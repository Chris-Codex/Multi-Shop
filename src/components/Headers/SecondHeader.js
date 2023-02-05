import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { FaShoppingCart } from "react-icons/fa"
import { AiTwotoneHeart } from "react-icons/ai"

const SecondHeader = () => {
    return (
        <div className='header'>
            <div className='header-title'>
                <div className='multi-text'>MULTI</div>
                <div className='shop-text'>SHOP</div>
            </div>
            <div className='search'>
                dsadada
            </div>
            <div className='customer-service-side'>
                <p>Customer Service</p>
                <p>+35389763336</p>
            </div>
            <div className='icon-hamburger'>
                <GiHamburgerMenu size={24} color="#999" />
            </div>
            {/* <div className='icon-card-container'>
                <div className='icon-card'>
                    <AiTwotoneHeart size={20} color="#FFC300" />
                    <h3 className='icon-count-heart'>0</h3>
                </div>
                <div className='icon-card'>
                    <FaShoppingCart size={20} color="#FFC300" />
                    <h3 className='icon-count-heart'>0</h3>
                </div>
            </div> */}
        </div>
    )
}

export default SecondHeader
