import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    bookingData:{},
    bookings:[],
    isLoading: false,
    error: "",
    nestedModal: false,
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
        ToggleNestModalTrue: (state, action)=>{
            state.nestedModal = true
        },
        ToggleNestModalFalse: (state, action)=>{
            state.nestedModal = false
        },

        BookingFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },

    
    },
});

export const {BookingPending, fetchingABookingSuccess, fetchingBookingsSuccess,ToggleNestModalTrue, ToggleNestModalFalse, BookingFail} =
BookingSlice.actions;

export default BookingSlice.reducer;