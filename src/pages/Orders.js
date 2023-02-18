import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { HeaderLinks, Headers, SearchBar } from '.';
import { IoIosArrowForward } from "react-icons/io"
import ProductsOrder from '../components/orders/ProductsOrder';
import CartSummary from '../components/orders/CartSummary';


const Orders = () => {
    const getOrders = useSelector((state) => state.cart.cartItems)

    const orders_header = ["Products", "Price", "Quantity", "Total", "Remove"]


    return (
        <section className='order-container'>
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

            <div className='orders-container'>
                <div className='order-header'>
                    {orders_header.map((order) => {
                        return (
                            <h4>{order}</h4>
                        )
                    })}
                </div>
            </div>
            <ProductsOrder />
            <CartSummary />
        </section>
    )
}

export default Orders
