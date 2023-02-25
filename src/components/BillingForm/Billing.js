import React from 'react'

const Billing = () => {
    return (
        <div className='billing-wrapper'>
            <div className='order-wrapper-lines'>
                <h3 className='order-wrapper-h3'>PAYMENT</h3>
                <p className='order-lines'></p>
            </div>
            <div className='select-payment-card'>
                <div className='select-payment'>
                    <input id="draft" class="peer/draft" type="radio" name="status" checked />
                    <label for="draft" class="peer-checked/draft:text-sky-500">Paypal</label>
                </div>
                <div className='select-payment'>
                    <input id="published" class="peer/published" type="radio" name="status" />
                    <label for="published" class="peer-checked/published:text-sky-500">Master Card</label>
                </div>
                <div className='btn-container'>
                    <div className='btn'>
                        <p>Place Order</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing
