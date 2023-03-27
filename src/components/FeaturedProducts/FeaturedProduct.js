import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { featuredProducts } from '../../features/productSlice/productSlice';
import { addToCart } from '../../features/cartSlice/cartSlice';
import { Link } from 'react-router-dom';
import FeaturedCard from './FeaturedCard';


const FeaturedProduct = () => {
    const dispatch = useDispatch()
    const getProducts = useSelector(state => state.product.products)
    const [shwBtn, setShwBtn] = useState(null)
    const [productCard, setProductCard] = useState(false)
    const [loading, setLoading] = useState(false)
    const [productDetails, setProductDetails] = useState(null)

    const handleProductCard = () => {
        setLoading(true)
        setTimeout(() => {
            setProductCard(!productCard)
            setLoading(false)
        }, 500)
    }

    const singleProductDetails = (lst) => {
        setProductDetails(lst)
    }


    useEffect(() => {
        const products = async () => {
            const getAllProducts = await axios.get("http://localhost:3001/product").catch((error) => console.log(error.message))
            const data = getAllProducts.data

            return data
        }

        products().then((res) => {
            dispatch(featuredProducts(res))
        }).catch((error) => console.log(error.message))
    }, [dispatch])


    function shortenText(text, num) {
        if (text.length > num) {
            text = text.slice(0, num) + "..."
        }
        return text
    }

    const handleAddProduct = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <>
            <h3 className='featured-h3'>#FEATURED PRODUCTS</h3>
            <div className='featured-container'>
                {getProducts.map((list, index) => {
                    const { _id, image, title, price } = list

                    return (
                        <div className="featured-card" key={index}>
                            <div className="featured-content"
                                onMouseEnter={() => setShwBtn(_id)}
                                onMouseLeave={() => setShwBtn(null)}
                            >
                                <div className='cats-image'>
                                    <img src={image} className="featured-image" alt="images" />
                                </div>
                                <div className='cats-text'>
                                    <p className='cats-text-title'>{shortenText(title, 20)}</p>
                                    <p className='cats-text-price'>${price}</p>
                                </div>
                                {shwBtn === _id ? (
                                    <div className='btn-container'>
                                        {/* <Link to={`product_desc/${_id}`}>
                                            <div className='details-btn'>Details</div>
                                        </Link> */}
                                        {loading ? (
                                            <div className='processing-btn'>
                                                <div className='processing-gap'>
                                                    <span className="relative flex h-3 w-3">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-90"></span>
                                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                                                    </span>
                                                    Processing...
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='cart-btn' onClick={() => { handleProductCard(); singleProductDetails(list) }}>
                                                Shop This Product
                                            </div>
                                        )}
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                    )
                })}
                {productCard ? (
                    <div className="fixed inset-0 bg-black opacity-50"></div>
                ) : null}
                {productCard && (<FeaturedCard handleProductcard={handleProductCard} handleAddProduc={handleAddProduct} data={productDetails} />)}
            </div>

        </>
    )
}

export default FeaturedProduct
