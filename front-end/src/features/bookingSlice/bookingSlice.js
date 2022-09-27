import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    bookingData:{},
    isLoading: false,
    error: "",
};


const BookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        BookingPending: (state, action)=>{
            state.isLoading = true
        },

        fetchingABookingSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.bookingData = action.payload 
        },

        BookingFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },

    
    },
});

export const {BookingPending, fetchingABookingSuccess, BookingFail} =
BookingSlice.actions;

export default BookingSlice.reducer;