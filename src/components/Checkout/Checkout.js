import React from 'react'
import { Footer, HeaderLinks, Headers, SearchBar } from '../../pages'
import { IoIosArrowForward } from "react-icons/io"
import { FaRegAddressCard } from "react-icons/fa"
import BillingForm from '../BillingForm/BillingForm'
import OrderSummary from '../BillingForm/OrderSummary'


const Checkout = () => {
    return (
        <section className='bg-[#f1f0f0]'>
            <Headers />
            <SearchBar />
            <HeaderLinks />
            <div className='wrapper'>
                <div className='checkout-link-container'>
                    <div className='checkout-link-header'>
                        <h3 className='cart-link-p'>Home</h3>
                        <IoIosArrowForward size={15} color="#848383" />
                        <p className='cart-link-p'>Shop</p>
                        <IoIosArrowForward size={15} color="#848383" />
                        <p className='cart-link-checkout'>Checkout</p>
                    </div>
                </div>

                <div className='form-wrapper'>

                    <div className='form-container-md'>
                        <div>
                            <div className='form-wrapper-lines'>
                                <h3 className='form-wrapper-h3'>BILLING ADDRESS</h3>
                                <p className='lines'></p>
                            </div>
                            <div className='form-container'>
                                <BillingForm />
                            </div>
                        </div>
                        <OrderSummary />
                    </div>
                </div>

            </div>
            <Footer />
        </section>
    )
}

export default Checkout
