import React from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import { AiTwotoneHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'


const Top_Header = () => {
  return (
    <div className='topheader'>
      <ul className='orderlist'>
        <li>About</li>
        <li>Contact</li>
        <li>Help</li>
        <li>FAQS</li>
        <li>Contact</li>
      </ul>
      <div className='top-header-card'>
        <div className='account-card'>
          <h3>My Account</h3>
          <IoIosArrowDown />
        </div>
        <div className='icon-card-one'>
          <AiTwotoneHeart size={20} color="#595959" />
          <h3 className='icon-count'>0</h3>
        </div>
        <Link to="/orders">
          <div className='icon-card-one'>
            <FaShoppingCart size={20} color="#595959" />
            <h3 className='icon-count'>0</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Top_Header
