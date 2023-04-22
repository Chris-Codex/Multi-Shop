import React from 'react'
import { HiOutlineMinus } from "react-icons/hi"
import { BsPlusLg } from "react-icons/bs"
import { FaCartPlus } from "react-icons/fa"
import { useSelector, useDispatch } from 'react-redux';
import { decreaseCart, increaseCart } from '../../features/cartSlice/cartSlice';


const AddToCart = ({ id, cartQuantity, handleAddToCart }) => {
    // const dispatch = useDispatch()

    return (
        <div className='addtocart-wrapper'>
            <div className='btn-wrapper'>
                <div className='increment-btn' >
                    <HiOutlineMinus />
                </div>
                <div className='count-btn'>{cartQuantity}</div>
                <div className='decrement-btn' >
                    <BsPlusLg />
                </div>
            </div>
            <div className='add-to-cart' onClick={handleAddToCart}>
                <FaCartPlus />
                <p>Add To Cart</p>
            </div>
        </div>
    )
}

export default AddToCart
