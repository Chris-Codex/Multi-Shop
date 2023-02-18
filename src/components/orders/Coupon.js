import React from 'react'

const Coupon = () => {
    return (
        <div className='coupon-container'>
            <div className='input-field'>
                <input type="text" placeholder='Coupon Code' className='input' />
            </div>
            <div className='coupon-btn'>
                <p>Apply Coupon</p>
            </div>
        </div>
    )
}

export default Coupon
