import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiTwotoneHeart } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa"
import { largeScreeenLinks } from '../../CustomDatas'
import { useSelector } from 'react-redux';


const ThirdHeader = () => {
    const [links, setLinks] = useState(largeScreeenLinks)
    const getQuantity = useSelector((state) => state.cart.cartItems)

    return (
        <div className='third-header'>
            <div className='category-Links-container'>
                <div className='category-card-header'>
                    <div className='hamburger-category-container'>
                        <GiHamburgerMenu size={20} />
                        Category
                    </div>
                    <IoIosArrowDown size={20} />
                </div>
                {links.map((linklist) => {
                    const { id, linkName } = linklist
                    return (
                        <ul className='nav-list' key={id}>
                            <li className={`navmobile-dropdown-list ${linkName === "Home" ? "text-[#FFC300]" : null} `}>{linkName}</li>
                        </ul>
                    )
                })}
            </div>

            <div className='icon-card-container'>
                <div className='icon-card'>
                    <AiTwotoneHeart size={20} color="#FFC300" />
                    <h3 className='icon-count-heart'>0</h3>
                </div>
                <div className='icon-card'>
                    <FaShoppingCart size={20} color="#FFC300" />
                    <h3 className='icon-count-heart'>{getQuantity ? getQuantity.length : 0}</h3>
                </div>
            </div>
        </div>
    )
}

export default ThirdHeader
