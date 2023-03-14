import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import CheckBox from '../SingleProduct/CheckBox';
import CheckColors from '../SingleProduct/CheckColors';


const FeaturedCard = ({ handleProductcard, data }) => {

    console.log("MY x", data)

    return (
        <div className='featuredcardModal'>
            <div className='feeature-card'>
                <div className='close-featuredCard' onClick={handleProductcard}>
                    <AiOutlineClose size={20} />
                </div>
                <div className='card-content'>
                    <div className='featuredCard-image'>
                        Image
                    </div>
                    <div className='content-wrapper'>
                        <div>
                            <p className='card-content-title'>Title</p>
                            <p className='card-content-category'>Category</p>
                            <p className='card-content-price'>$120.47</p>
                        </div>
                        < div className='card-content-border'></div >
                        <div className='color-list'>
                            <h3 className='color-list-h3'>Color:</h3>
                            <p className='color-list-p'>Black</p>
                        </div>
                        <CheckColors />
                        <CheckBox />
                        <div className='btn-wrapper'>
                            {/* <div className='btn-submit'>
                                <p>Btn 1</p>
                            </div>
                            <p>Btn 2</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCard