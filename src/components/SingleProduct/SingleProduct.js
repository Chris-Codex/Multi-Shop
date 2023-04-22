import React, { useContext } from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { HiOutlineMinus } from "react-icons/hi"
import { BsPlusLg } from "react-icons/bs"
import { FaCartPlus } from "react-icons/fa"
import { useParams } from 'react-router-dom'
import { HeaderLinks, Headers, SearchBar } from '../../pages'
import Footer from '../Footer';
import CheckBox from './CheckBox';
import CheckColors from './CheckColors';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice/cartSlice'
import { themeContext } from '../../context/contextApi';



const SingleProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { products } = useSelector(state => state.product)
    const { selectedColor, selectedSize } = useContext(themeContext)

    const handleAddToCart = (product) => {
        setTimeout(() => {
            dispatch(addToCart({ ...product, color: selectedColor, size: selectedSize }))
        }, 500)
    }


    return (
        <div className='home-container'>
            <Headers />
            <SearchBar />
            <HeaderLinks />
            <div className='singleproduct-wrapper'>
                <div className='checkout-link-container'>
                    <div className='checkout-link-header'>
                        <h3 className='cart-link-p'>Home</h3>
                        <IoIosArrowForward size={15} color="#848383" />
                        <p className='cart-link-p'>Shop</p>
                        <IoIosArrowForward size={15} color="#848383" />
                        <p className='cart-link-checkout'>Product Details</p>
                    </div>
                </div>
            </div>

            {products.filter((product) => (product._id === id)).map((items) => {

                const { _id, image, title, price, description, cartQuantity } = items
                return (
                    <div className='single-product-wrapper' key={_id}>
                        <div className='singleproduct-content-container'>
                            <div className='prodt-image'>
                                <img src={image} className='image-wrapper' alt="name" />
                            </div>
                        </div>

                        <div className='singleproduct-content-order'>
                            <div className='product-content'>
                                <div>
                                    <h3 className='product-content-h3'>{title}</h3>
                                    <div className='rating'>
                                        <p>Rating:</p>
                                        <h3>4.6</h3>
                                    </div>
                                    <h3 className='product-price'>${price}</h3>
                                    <p className='product-desc'>
                                        {description}
                                    </p>
                                </div>

                                <CheckBox />
                                <CheckColors />
                                <div className='addtocart-wrapper'>
                                    <div className='btn-wrapper'>
                                        <div className='increment-btn' >
                                            <HiOutlineMinus />
                                        </div>
                                        <div className='count-btn'>0</div>
                                        <div className='decrement-btn' >
                                            <BsPlusLg />
                                        </div>
                                    </div>
                                    <div className='add-to-cart' onClick={() => handleAddToCart(items)}>
                                        <FaCartPlus />
                                        <p>Add To Cart</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}

            <Footer />
        </div>
    )
}

export default SingleProduct
