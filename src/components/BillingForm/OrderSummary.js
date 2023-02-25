import React from 'react'
import Billing from './Billing'

const OrderSummary = () => {
    return (
        <div className='summary-wrappper'>
            <div className='order-wrapper-lines'>
                <h3 className='order-wrapper-h3'>ORDER TOTAL</h3>
                <p className='order-lines'></p>
            </div>

            <div className='summary-card'>
                <p className='order-title'>Products</p>
                <div className='products-price'>
                    <p>Jeans Skirt</p>
                    <p>$120.00</p>
                </div>
                <div className='divide-line-wrapper'>
                    <div className='divide-line'></div>
                </div>
                <div className='subtotal'>
                    <p className='subtotal-total'>SubTotal</p>
                    <p className='subtotal-p'>$160.00</p>
                </div>
                <div className='subtotal'>
                    <p className='subtotal-total'>Shippping</p>
                    <p className='subtotal-p'>$10.00</p>
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
