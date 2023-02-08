import React, { useEffect } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { nextSlide, prevSlide, startAutoSlide, stopAutoSlide } from '../../features/sliderSlice/sliderSlice'




const Sliderlg = () => {
    const dispatch = useDispatch()
    const currentIndex = useSelector((state) => state.slider.currentSlide)
    const slider = useSelector(state => state.slider.sliderData)

    useEffect(() => {
        dispatch(startAutoSlide());
        return (() => {
            dispatch(stopAutoSlide())
        })
    }, [])

    return (
        <div className='large-slider-container'>
            {slider.map((content, sliderIndex) => {
                const { id, image, title, desc } = content
                return (
                    <div className={`flex items-center  justify-center relative bg-black w-8/12 h-[500px] py-8 ${currentIndex !== sliderIndex ? "hidden" : ""}`} key={id}>
                        <img src={image} alt="image" className='size-image' />
                        <div className='slider-contents'>
                            <h3 className='header-text'>{title}</h3>
                            <p className='param-text'>{desc}</p>
                            <div className='slider-btn'>Shop Now</div>
                        </div>
                        <div className='slider-navigation'>
                            <BsArrowLeftCircle size={24} onClick={() => dispatch(prevSlide(currentIndex - 1))} color="#FFC300" />
                            <BsArrowRightCircle size={24} onClick={() => dispatch(nextSlide(currentIndex + 1))} color="#FFC300" />
                        </div>
                    </div>
                )
            })}

            <div className='sales-container'>
                <div className='sales-image'>
                    image
                    <div className='sales-text'>
                        <p>SAVE 20%</p>
                        <h3>Special Offer</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sliderlg
