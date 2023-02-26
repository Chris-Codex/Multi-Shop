import React, { useEffect } from 'react'
import Billing from './Billing'
import { useSelector, useDispatch } from 'react-redux';
import { getShippingFee } from '../../features/cartSlice/cartSlice';


const OrderSummary = () => {
    const getOrders = useSelector(state => state.cart.cartItems)
    const { shippingFee } = useSelector(state => state.cart)
    const { cartTotalAmount } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        if (cartTotalAmount >= 100) {
            dispatch(getShippingFee({ shipping_Fee: 20 }))
        } else if (cartTotalAmount < 100) {
            dispatch(getShippingFee({ shipping_Fee: 10 }))
        } else if (cartTotalAmount < 50) {
            dispatch(getShippingFee({ shipping_Fee: "Free Shipping" }))
        }

    }, [])


    return (
        <div className='summary-wrappper'>
            <div className='order-wrapper-lines'>
                <h3 className='order-wrapper-h3'>ORDER TOTAL</h3>
                <p className='order-lines'></p>
            </div>

            <div className='summary-card'>
                <p className='order-title'>Products</p>
                {getOrders.map((order) => {
                    const { id, title, price, cartQuantity } = order
                    return (
                        <div className='products-price' key={id}>
                            <p>{title}</p>
                            <p>${price * cartQuantity}</p>
                        </div>
                    )
                })}
                <div className='divide-line-wrapper'>
                    <div className='divide-line'></div>
                </div>
                <div className='subtotal'>
                    <p className='subtotal-total'>SubTotal</p>
                    <p className='subtotal-p'>${cartTotalAmount}</p>
                </div>
                <div className='subtotal'>
                    <p className='subtotal-total'>Shippping</p>
                    <p className='subtotal-p'>${shippingFee.shipping_Fee}</p>
                </div>
                <div className='divide-line-wrapper'>
                    <div className='divide-line'></div>
                </div>
                <div className='subtotal'>
                    <p className='subtotal-total'>SubTotal</p>
                    <p className='subtotal-p'>$160.00</p>
                </div>
            </div>
            <Billing />
        </div>
    )
}

export default OrderSummary
