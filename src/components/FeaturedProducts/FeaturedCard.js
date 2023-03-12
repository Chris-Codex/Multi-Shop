import React from 'react'

const FeaturedCard = ({ handleProductcard, data }) => {

    console.log("MY x", data)

    return (
        <div className='featuredcardModal'>
            <div className='card-content' onClick={handleProductcard}>
                <p>Left 1</p>
                <p>Right 2</p>
            </div>
        </div>
    )
}

export default FeaturedCard
