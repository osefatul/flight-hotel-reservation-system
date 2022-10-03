import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    bookingData:{},
    bookings:[],
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

        fetchingBookingsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.bookings = action.payload 
        },

        BookingFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },

    
    },
});

export const {BookingPending, fetchingABookingSuccess, fetchingBookingsSuccess, BookingFail} =
BookingSlice.actions;

export default BookingSlice.reducer;