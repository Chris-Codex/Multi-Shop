import React, { useState } from 'react'
import { categories } from './data';

const Category = () => {
    const [cat, setCat] = useState(categories)

    return (
        <>
            <div className='category-header'>
                <h3>#CATEGORIES</h3>
            </div>
            <div className='category-container'>
                {cat.map((item) => {
                    const { id, cat_image, category, count } = item
                    return (
                        <div className='category-card' key={id}>
                            <div className='category-image'>
                                <img src={cat_image} alt="name" className='image' />
                            </div>
                            <div className='category-content'>
                                <h3 className='category-h3'>{category}</h3>
                                <p className='category-p'>{count}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Category
