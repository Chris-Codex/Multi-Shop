import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';


const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    shippingFee: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Increased ${state.cartItems[itemIndex].title} Quantity`)
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct)
                toast.success(`${tempProduct.title} was Added To Cart`)
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        removeProduct: (state, action) => {
            const nextCart = state.cartItems.filter((item) => item.id !== action.payload.id)
            state.cartItems = nextCart
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`Item was removed from Cart`)
        },

        increaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 0) {
                state.cartItems[itemIndex].cartQuantity += 1
                localStorage.setItem("cartItems", state.cartItems)
                toast.info("Item Increased")
            }
        },

        decreaseCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)

            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -= 1
                toast.error("Item decreased")
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const index = state.cartItems.filter((item) => item.id !== action.payload.id)
                state.cartItems = index
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
                toast.error("Item deleted")
            }
        },

        clearCart: (state) => {
            state.cartItems = []
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            toast.error(`Cart Cleared`, {
                position: "bottom-left"
            })
        },

        getSubTotals: (state) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem
                const itemTotal = price * cartQuantity

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity
                state.cartTotalAmount += state.shippingFee


                return cartTotal
            }, {
                total: 0,
                quantity: 0
            })

            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        },

        getShippingFee: (state, action) => {
            state.shippingFee = action.payload
            state.cartTotalAmount += action.payload
        }
    }
})

export const { addToCart, removeProduct, increaseCart, decreaseCart, clearCart, getSubTotals, getShippingFee } = cartSlice.actions
export default cartSlice.reducer

