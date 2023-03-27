import React, { useContext } from 'react'
import { themeContext } from '../../context/contextApi';

const CheckBox = () => {
    const { handleSizeChange, size } = useContext(themeContext)
    // const [options, setOptions] = useState(checkBoxes)
    // const [selectedSize, setSelectedSize] = useState()

    return (
        <div className='order-sizes'>
            <p className='sizes-header'>Sizes:</p>
            {size.map((option) => {
                const { id, label, checked } = option
                return (
                    <div key={id}>

                        <div className={`flex flex-row space-x-2`}>
                            <input
                                type="radio"
                                className="border-10"
                                checked={checked}
                                onChange={() => handleSizeChange(id)}
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
