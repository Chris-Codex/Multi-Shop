import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: []
}

export const productSlice = createSlice({
    name: "product",
    initialState,

    reducers: {
        featuredProducts: (state, action) => {
            state.products = action.payload
        },


    }
})

export const { featuredProducts } = productSlice.actions
export default productSlice.reducer