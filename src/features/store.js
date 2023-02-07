import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "./sliderSlice/sliderSlice";


export const store = configureStore({
    reducer: {
        slider: sliderReducer
    }
})