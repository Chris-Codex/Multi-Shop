import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { useParams } from 'react-router-dom'
import { HeaderLinks, Headers, SearchBar } from '../../pages'
import Footer from '../Footer';
import AddToCart from './AddToCart';
import CheckBox from './CheckBox';
import CheckColors from './CheckColors';
import { useSelector } from 'react-redux';
import { removeProduct } from '../../features/cartSlice/cartSlice';


const SingleProduct = () => {
    const { id } = useParams()
    const { products } = useSelector(state => state.product)

    console.log("CART", products)

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

            {products.filter((product) => (product.id == id)).map((items) => {

                const { id, image, title, price, description, rating, cartQuantity } = items
                return (
                    <div className='single-product-wrapper' key={id}>
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
                                        <h3>{rating.rate}</h3>
                                    </div>
                                    <h3 className='product-price'>${price}</h3>
                                    <p className='product-desc'>
                                        {description}
                                    </p>
                                </div>

                                <CheckBox />
                                <CheckColors />
                                <AddToCart id={id} cartQuantity={cartQuantity} />
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
