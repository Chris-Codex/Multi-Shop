import { createSlice } from "@reduxjs/toolkit";
import { clear } from "@testing-library/user-event/dist/clear";
import { data } from '../../components/slider/data';


const initialState = {
    currentSlide: 0,
    sliderData: data,
    interValid: null
}

const AUTO_SLIDE = "auto_slide"

const sliderSlice = createSlice({
    name: "slider",
    initialState,

    reducers: {
        nextSlide: (state, action) => {
            state.currentSlide = action.payload > state.sliderData.length - 1 ? 0 : action.payload
        },

        prevSlide: (state, action) => {
            state.currentSlide = action.payload < 0 ? state.sliderData.length - 1 : action.payload
        },

        startAutoSlide: (state) => {
            state.interValid = setInterval(() => {
                state.dispatch(nextSlide())
            }, 5000)
        },

        stopAutoSlide: (state) => {
            clearInterval(state.interValid)
            state.interValid = null
        }


    }
})

export const { nextSlide, prevSlide, startAutoSlide, stopAutoSlide } = sliderSlice.actions
export default sliderSlice.reducer