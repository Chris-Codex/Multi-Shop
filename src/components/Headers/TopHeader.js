import React from 'react'
import { IoIosArrowDown } from "react-icons/io"
import { FaShoppingCart } from "react-icons/fa"
import { AiTwotoneHeart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const links = ["About", "Contact", "Help", "FAQS",]

console.log(links)


const Top_Header = () => {
  const totalQuantity = useSelector(state => state.cart.cartTotalQuantity)

  return (
    <div className='topheader'>
      <nav className="flex flex-row space-x-4 w-[500px]">
        {links.map((link, index) => {
          return (
            <ul className='orderlist'>
              <li className={`${link === "About" || link === "Contact" || link === "FAQS" || link === "Help" ? "hover:underline" : null}`}>{link}</li>
            </ul>
          )
        })}
      </nav>
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
            <h3 className='icon-count'>{totalQuantity ? totalQuantity : 0}</h3>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Top_Header
