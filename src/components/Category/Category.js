import React, { useState } from 'react'
import { categories } from './data';
import { motion } from "framer-motion"

const Category = () => {
    const [cat, setCat] = useState(categories)

    return (
        <>
            <div className='category-header'>
                <h3>#CATEGORIES</h3>
            </div>
            <div className='category-container'>
                {cat.map((item, index) => {
                    const { cat_image, category, count } = item
                    return (
                        <motion.div className='category-card' key={index} animate={{ y: 1, scale: 1 }} initial={{ scale: 0 }} whileHover={{ scale: 0.97, opacity: 2.0 }}>
                            <div className='category-image'>
                                <img src={cat_image} alt="name" className='image' />
                            </div>
                            <div className='category-content'>
                                <h3 className='category-h3'>{category}</h3>
                                <p className='category-p'>{count}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}

export default Category
