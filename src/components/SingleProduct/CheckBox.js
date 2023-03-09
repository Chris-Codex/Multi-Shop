import React, { useState } from 'react'
import { checkBoxes } from './checkboxdata'

const CheckBox = () => {
    const [options, setOptions] = useState(checkBoxes)

    const handleOptionChange = (optionId) => {
        const updatedCheckbox = options.map((option) =>
            option.id === optionId ? { ...option, checked: true } : { ...option, checked: false }
        )

        setOptions(updatedCheckbox)
    }

    return (
        <div className='order-sizes'>
            <p className='sizes-header'>Sizes:</p>
            {options.map((option) => {
                const { id, label, checked } = option
                return (
                    <div key={id}>

                        <div className={`flex flex-row space-x-2`}>
                            <input
                                type="radio"
                                className="border-10"
                                checked={checked}
                                onChange={() => handleOptionChange(id)}
                            />
                            <p className='text-[#797979]'>{label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CheckBox
