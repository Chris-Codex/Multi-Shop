import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { featuredProducts } from '../../features/productSlice/productSlice';
import { addToCart } from '../../features/cartSlice/cartSlice';
import { toast } from 'react-toastify';


const FeaturedProduct = () => {
    const dispatch = useDispatch()
    const getProducts = useSelector(state => state.product.products)
    const cartItems = useSelector(state => state.cart.cartItems)
    console.log("MY CART", cartItems)
    const [shwBtn, setShwBtn] = useState(null)

    const products = async () => {
        const getAllProducts = await axios.get("https://fakestoreapi.com/products").catch((error) => console.log(error.message))
        const data = getAllProducts.data

        return data
    }

    useEffect(() => {
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

    const handleProduct = (product) => {
        dispatch(addToCart(product))
        // setTimeout(() => {

        //     toast.success("Item Added To Cart")
        // }, 1000)
    }

    return (
        <>
            <h3 className='featured-h3'>#FEATURED PRODUCTS</h3>
            <div className='featured-container'>
                {getProducts.map((list) => {
                    const { id, image, title, price } = list
                    return (
                        <div className="featured-card" key={id}>
                            <div className="featured-content"
                                onMouseEnter={() => setShwBtn(id)}
                                onMouseLeave={() => setShwBtn(null)}
                            >
                                <div className='cats-image'>
                                    <img src={image} className="featured-image" alt="images" />
                                </div>
                                <div className='cats-text'>
                                    <p className='cats-text-title'>{shortenText(title, 20)}</p>
                                    <p className='cats-text-price'>${price}</p>
                                </div>
                                {shwBtn === id ? (
                                    <div className='btn-container'>
                                        <div className='details-btn'>Details</div>
                                        <div className='cart-btn' onClick={() => handleProduct(list)}>Add To bag</div>
                                    </div>
                                ) : ""}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FeaturedProduct
