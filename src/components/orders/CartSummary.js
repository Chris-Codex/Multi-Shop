import React, { useEffect } from 'react'
import { FaMoneyCheckAlt } from "react-icons/fa"
import { getSubTotals } from '../../features/cartSlice/cartSlice'
import Footer from '../Footer'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const CartSummary = () => {
    const cartOrders = useSelector((state) => state.cart.cartItems)
    const { cartTotalAmount } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubTotals())
    }, [cartOrders])

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
                        <p>${cartTotalAmount}</p>
                    </div>
                    <div className='underlin'>
                        <div className='main-underlin'></div>
                    </div>
                    <div className='summary-content-shipping'>
                        <p>Taxes and Shipping calculated at checkout</p>
                    </div>

                    <Link to="/checkout">
                        <div className='proceed-btn'>
                            <div className='proceed-content'>
                                <p>Proceed To Checkout</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* <Footer /> */}
        </section>
    )
}

export default CartSummary
