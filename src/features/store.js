import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./sliderSlice/sliderSlice";
import productReducer from './productSlice/productSlice';
import cartReducer from './cartSlice/cartSlice';




export const store = configureStore({
    reducer: {
        slider: sliderReducer,
        product: productReducer,
        cart: cartReducer
    }
})