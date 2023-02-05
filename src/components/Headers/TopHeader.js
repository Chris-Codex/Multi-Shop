import React from 'react'
import { IoIosArrowDown } from "react-icons/io"

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
        <div className='icon-card'>
          <h3>Logo</h3>
          <h3>0</h3>
        </div>
        <div className='icon-card'>
          <h3>Logo</h3>
          <h3>0</h3>
        </div>
      </div>
    </div>
  )
}

export default Top_Header
