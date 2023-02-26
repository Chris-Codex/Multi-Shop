import React, { useState } from 'react'

const Billing = () => {
    const [state, setState] = useState()
    return (
        <div className='billing-wrapper'>
            <div className='order-wrapper-lines'>
                <h3 className='order-wrapper-h3'>PAYMENT</h3>
                <p className='order-lines'></p>
            </div>
            <div className='select-payment-card'>
                <div className='select-payment'>
                    <input id="draft" className="peer/draft" type="radio" onChange={() => setState("")} name="status" checked />
                    <p className="peer-checked/draft:text-sky-500">Paypal</p>
                </div>
                <div className='select-payment'>
                    <input id="published" className="peer/published" onChange={() => setState("")} type="radio" name="status" />
                    <p className="peer-checked/published:text-sky-500">Paypal</p>
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
