import React from 'react'
import { FaMoneyCheckAlt } from "react-icons/fa"


const CartSummary = () => {
    return (
        <div className='cart-summary-container'>
            <div className='cart-icon'>
                <FaMoneyCheckAlt size={32} />
                <p className='cart-icon-summary'>CART SUMMARY</p>
            </div>
            <div className='summary-container'>
                <div className='summary-content'>
                    <p>Subtotal</p>
                    <p>$300</p>
                </div>
                <div className='summary-content-shipping'>
                    <p>Shipping</p>
                    <p>$10</p>
                </div>
                <div className='underlin'>
                    <div className='main-underlin'></div>
                </div>
                <div className='total-card'>
                    <p>Total</p>
                    <p>$160</p>
                </div>
            </div>
        </div>
    )
}

export default CartSummary
