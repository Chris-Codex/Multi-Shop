import React from 'react'
import { useSelector } from 'react-redux';
import Coupon from './Coupon';

const ProductsOrder = () => {
    const orders = useSelector((state) => state.cart.cartItems)
    console.log("ORDERS", orders)

    function shortenText(text, num) {
        if (text.length > 0) {
            return text.slice(0, num) + "..."
        } return text
    }

    return (
        <>
            {orders.map((order) => {
                const { id, title, image, price, cartQuantity
                } = order
                return (
                    <div className='products-container' key={id}>
                        <div className='products-header'>
                            <div>
                                <img src={image} alt="image" className='product-image' />
                                <p className='text-[12px]'>{shortenText(title, 12)}</p>
                            </div>
                            <div>${price}</div>
                            <div className='counter-card'>
                                <div className='counter-decrease'>-</div>
                                <div className='count'>
                                    <p className='text-center mt-1'>{cartQuantity
                                    }</p>
                                </div>
                                <div className='counter-increase'>+</div>
                            </div>
                            <div>${price}</div>
                            <div className='order-remove'>
                                <p>x</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Coupon />
        </>
    )
}

export default ProductsOrder
