import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { BsHeart } from "react-icons/bs"
import { Link } from 'react-router-dom';
import CheckBox from '../SingleProduct/CheckBox';
import CheckColors from '../SingleProduct/CheckColors';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice/cartSlice';
import { useContext } from 'react';
import { themeContext } from '../../context/contextApi';

const FeaturedCard = ({ handleProductcard, data }) => {
    const { selectedColor, handleColorChange, selectedSize, isColor } = useContext(themeContext)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleLikeBtn = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(!loading)
            setLoading(false)
        }, 200)
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart({ ...product, size: selectedSize, color: selectedColor }))
    }

    return (
        <div className='featuredcardModal'>
            <div className='feeature-card'>
                <div className='close-featuredCard' onClick={handleProductcard}>
                    <AiOutlineClose size={20} />
                </div>
                <div className='card-content'>
                    <div className='featuredCard-image'>
                        <img src={data.image} className="featuredCard-image" />
                    </div>
                    <div className='content-wrapper'>
                        <div>
                            <p className='card-content-title'>{data.title}</p>
                            <p className='card-content-category'>{data.category}</p>
                            <p className='card-content-price'>${data.price}</p>
                        </div>
                        < div className='card-content-border'></div >
                        <div className='color-list'>
                            <h3 className='color-list-h3'>Color:</h3>
                            <p className='color-list-p'>{selectedColor}</p>
                        </div>
                        <CheckColors />
                        <CheckBox />
                        <div className='card-content-btn'>
                            <div className='btn-submit' onClick={() => handleAddToCart(data)}>
                                <p className='btn-submit-p'>Add To Cart</p>
                            </div>
                            {loading ? (
                                <div className='btn-icon'>
                                    <BsHeart size={15} color="#ffc300" className='animate-ping' />
                                </div>
                            ) : (
                                <div className='btn-icon' onClick={handleLikeBtn}>
                                    <BsHeart size={23} />
                                </div>
                            )}
                        </div>
                        <Link to={`product_desc/${data._id}`}>
                            <p className='card-content-details'>View Full Details</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard