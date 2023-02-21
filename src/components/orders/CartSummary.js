import React from 'react'
import { FaMoneyCheckAlt } from "react-icons/fa"
import { selectCartTotal } from '../../features/cartSlice/cartSlice'
import Footer from '../Footer'
import { useSelector } from 'react-redux';


const CartSummary = () => {
    const cartOrders = useSelector((state) => state.cart.cartItems)

    return (
        <section>
            <div className='coupon-container'>
                <div className='input-field'>
                    <input type="text" placeholder='Coupon Code' className='input' />
                </div>
                <div className='coupon-btn'>
                    <p>Apply Coupon</p>
                </div>
            </div>
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
                        <p>{selectCartTotal}</p>
                    </div>
                    <div className='proceed-btn'>
                        <div className='proceed-content'>
                            <p>Proceed To Checkout</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </section>
    )
}

export default CartSummary
