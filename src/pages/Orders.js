import React from 'react'
import { useSelector } from 'react-redux';
import { HeaderLinks, Headers, SearchBar } from '.';
import { IoIosArrowForward } from "react-icons/io"

const Orders = () => {
    const getOrders = useSelector((state) => state.cart.cartItems)
    console.log("Oders", getOrders)

    return (
        <section>
            <Headers />
            <SearchBar />
            <HeaderLinks />

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
        </section>
    )
}

export default Orders
