import React from 'react'
import { IoIosArrowForward } from "react-icons/io"
import { useParams } from 'react-router-dom'
import { HeaderLinks, Headers, SearchBar } from '../../pages'
import Footer from '../Footer';
import CheckBox from './CheckBox';


const SingleProduct = () => {
    const { id } = useParams()

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

            <div className='single-product-wrapper'>
                <div className='singleproduct-content-container'>
                    <div className='product-image'>
                        <img src='https://www.thebeautysalon.ie/wp-content/uploads/2021/05/imagemain.jpg' className='image-wrapper' alt="name" />
                    </div>
                </div>

                <div className='singleproduct-content-order'>
                    <div className='product-content'>
                        <h3 className='product-content-h3'>Product Name Goes Here</h3>
                        <div className='rating'>
                            <p>Rating:</p>
                            <h3>9.0</h3>
                        </div>
                        <h3 className='product-price'>$129.09</h3>
                        <p className='product-desc'>
                            of shipping fee' did not match any file(s) known to git
                            admin@Admins-MacBook-Pro multi-shop % git commit -m "Calculation of shipping fee"
                            [main 644904f] Calculation of shipping fee
                        </p>

                        <CheckBox />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default SingleProduct
