import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, decreaseCart, increaseCart, removeProduct } from '../../features/cartSlice/cartSlice';




const ProductsOrder = () => {
    const dispatch = useDispatch()
    const orders = useSelector((state) => state.cart.cartItems)

    const orders_header = ["Products", "Price", "Quantity", "Total", "Remove"]

    function shortenText(text, num) {
        if (text.length > 0) {
            return text.slice(0, num) + "..."
        } return text
    }

    function convertPrice(price) {
        const roundedPrice = Math.round(price * 100) / 100
        return roundedPrice.toFixed(2)
    }

    return (
        <>
            <div className='productorder-container'>
                <div className='orders-container'>
                    <div className='order-header'>
                        {orders_header.map((order, index) => {
                            return (
                                <div key={index}>
                                    <h4>{order}</h4>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <main>
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
                                        <div className='counter-decrease' onClick={() => dispatch(decreaseCart({ id }))}>-</div>
                                        <div className='count'>
                                            <p className='text-center mt-1'>{cartQuantity
                                            }</p>
                                        </div>
                                        <div className='counter-increase' onClick={() => dispatch(increaseCart({ id }))}>+</div>
                                    </div>
                                    <div>${convertPrice(price * cartQuantity)}</div>
                                    <div className='order-remove' onClick={() => dispatch(removeProduct({ id }))}>
                                        <p>x</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className='clear-cart' onClick={() => dispatch(clearCart())}>
                        <div className='clear-cart-btn'>
                            Clear Cart
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default ProductsOrder
