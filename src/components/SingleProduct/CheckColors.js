import React, { useContext } from 'react'
import { themeContext } from '../../context/contextApi';



const CheckColors = () => {
    const { handleColorChange, isColor } = useContext(themeContext)

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
