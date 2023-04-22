import { createContext, useState } from "react";
import { checkBoxes, color } from "../components/SingleProduct/checkboxdata";



export const themeContext = createContext();

export const ContextProvider = ({ children }) => {
    const [isColor, setIsColor] = useState(color)
    const [selectedColor, setSelectedColor] = useState("Black")
    const [size, setSize] = useState(checkBoxes)
    const [selectedSize, setSelectedSize] = useState("S")



    // function to handle checkbox color selection
    const handleColorChange = (id) => {
        const updateColor = isColor.map((colors) => colors.id === id ? { ...colors, checked: true } : { ...colors, checked: false });

        setIsColor(updateColor);

        const selectColor = updateColor.find((color) => color.id === id)
        if (selectColor) {
            const { type } = selectColor
            setSelectedColor(type);
        }
    }

    // function to handle checkbox size selection
    const handleSizeChange = (id) => {
        const selectSize = size.map((sizes) => sizes.id === id ? { ...sizes, checked: true } : { ...sizes, checked: false })

        setSize(selectSize);

        const selectedSize = selectSize.find((size) => size.id === id);
        const { label } = selectedSize
        setSelectedSize(label);
    }

    return (
        <themeContext.Provider value={{ handleColorChange, handleSizeChange, selectedColor, size, selectedSize, isColor }}>
            {children}
        </themeContext.Provider>
    )
}