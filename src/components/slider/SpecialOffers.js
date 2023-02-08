import React from 'react'
import { specialOfferData } from './data'

const SpecialOffers = () => {
    return (
        <section>
            {specialOfferData.map((data) => {
                const { id, title, save, image } = data
                return (
                    <div className='slider-specialOffer' key={id}>
                        <div className='image-card'>
                            <img src={image} alt="image" className='w-full h-[200px] md:h-[260px]' />
                        </div>
                        <div className='image-contents'>
                            <p className='save-text'>{save}</p>
                            <h3 className='save-h3'>{title}</h3>
                            <div className='save-btn'>
                                <p>Shop Now</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default SpecialOffers
