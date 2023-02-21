import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Footer, HeaderLinks, Headers, SearchBar } from '.';
import { IoIosArrowForward } from "react-icons/io"
import ProductsOrder from '../components/orders/ProductsOrder';
import CartSummary from '../components/orders/CartSummary';


const Orders = () => {
    const getOrders = useSelector((state) => state.cart.cartItems)

    return (
        <section className='order-container'>
            <Headers />
            <SearchBar />
            <HeaderLinks />

            {getOrders.length > 0 ? (
                <>
                    <div className='cart-link-container'>
                        <div className='cart-link-header'>
                            <h3>Shopping Bag</h3>
                            <IoIosArrowForward size={15} color="#848383" />
                            <p className='cart-link-p'>Place Orders</p>
                            <IoIosArrowForward size={15} color="#848383" />
                            <p className='cart-link-p'>Pay</p>
                            <IoIosArrowForward size={15} color="#848383" />
                            <p className='cart-link-p'>Order Complete</p>
                        </div>
                    </div>

                    <div className='order-summary'>
                        <ProductsOrder />
                        <CartSummary />
                    </div>
                </>
            ) : (
                < div className='no-product' >
                    <img src='https://res.cloudinary.com/dnsvc5pcu/image/upload/v1676848259/no-product-found-removebg-preview_hitc6n.png' alt="name" className='no-product-image' />
                </div >
            )}
            <Footer />
        </section>
    )
}

export default Orders


