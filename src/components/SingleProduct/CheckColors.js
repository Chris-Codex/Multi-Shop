import React, { useState } from 'react'
import { color } from './checkboxdata'


const CheckColors = () => {
    const [isColor, setIsColor] = useState(color)

    const handleColorChange = (id) => {
        const updatedColor = isColor.map((list) =>
            list.id === id ? { ...list, checked: true } : { ...list, checked: false }
        )

        setIsColor(updatedColor)
    }

    return (
        <div className='order-colors'>
            <p className='color-header'>Colors:</p>
            {isColor.map((list) => {
                const { id, type, checked } = list
                return (
                    <div key={id}>
                        <div className={`flex flex-row space-x-2`}>
                            <input
                                type="radio"
                                className="wiggle"
                                checked={checked}
                                onChange={() => handleColorChange(id)}
                            />
                            <p className='text-[#797979]'>{type}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckColors
