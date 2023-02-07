import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { nextSlide, prevSlide } from '../../features/sliderSlice/sliderSlice'


const Sliders = () => {
    const currentIndex = useSelector(state => state.slider.currentSlide)
    console.log("INDEX", currentIndex)
    const dispatch = useDispatch()
    const slider = useSelector(state => state.slider.sliderData)

    return (
        <>
            {slider.map((list, sliderIndex) => {
                return (
                    <div className={`relative flex items-center justify-center w-full h-[380px] 
                    md:relative md:flex md:items-center md:justify-center md:w-full md:h-[450px] px-3 mt-4 lg:hidden 
                    ${currentIndex !== sliderIndex ? "hidden md:hidden" : ""}`} key={list.id}>
                        <img src={list.image} className="image-size" />
                        <div className='text-display'>
                            <h3 className='h3-text'>{list.title}</h3>
                            <p className='p-text'>{list.desc}</p>
                            <div className='text-display-btn'>
                                Shop Now
                            </div>
                        </div>
                        <div className='slider-navigation'>
                            <BsArrowLeftCircle size={24} onClick={() => dispatch(prevSlide(currentIndex - 1))} color="#FFC300" />
                            <BsArrowRightCircle size={24} onClick={() => dispatch(nextSlide(currentIndex + 1))} color="#FFC300" />
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default Sliders
