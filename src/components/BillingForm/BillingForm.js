import React from 'react'



const BillingForm = () => {
    return (
        <>
            <div className='main-form-wrapper'>
                <div className='form'>
                    <p className='form-p'>Firstname</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>Lastname</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>E-Mail</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>Mobile No</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>Address</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>City</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>State</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
                <div className='form'>
                    <p className='form-p'>Zip Code</p>
                    <input type="text" className='inputs' placeholder='Enter firstname' />
                </div>
            </div>
        </>
    )
}

export default BillingForm
