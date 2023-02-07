import { createSlice } from "@reduxjs/toolkit";
import { data } from '../../components/slider/data';


const initialState = {
    currentSlide: 0,
    sliderData: data
}

const sliderSlice = createSlice({
    name: "slider",
    initialState,

    reducers: {
        nextSlide: (state, action) => {
            state.currentSlide = action.payload > state.sliderData.length - 1 ? 0 : action.payload
        },

        prevSlide: (state, action) => {
            state.currentSlide = action.payload < 0 ? state.sliderData.length - 1 : action.payload
        }
    }
})

export const { nextSlide, prevSlide } = sliderSlice.actions
export default sliderSlice.reducer