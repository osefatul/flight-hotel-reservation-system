import { CreateBooking, deleteBooking, fetchABookingBasedOnId, fetchBooking, fetchBookingBasedOnBookingId, fetchBookings } from "../../api/TravelApi/booking";
import { BookingFail, BookingPending, fetchingABookingSuccess, fetchingBookingsSuccess } from "./bookingSlice"



export const AddingBooking = (formData) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await CreateBooking(formData);
        // console.log("this is data", res.data.booked._id)
        const fetchingARecentBooking = await fetchABookingBasedOnId(res.data.booked._id);
        // console.log(fetchingARecentBooking.data)
        await dispatch(fetchingABookingSuccess(fetchingARecentBooking.data))

    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}


export const FetchingBookings = (id) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await fetchBookings();
        // console.log(res.data);
        dispatch(fetchingBookingsSuccess(res.data))
    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}


export const deletingBooking = (id, flightId) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await deleteBooking(id, flightId);
        // console.log(res.data);
        dispatch(fetchingABookingSuccess(res.data))
    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}


export const FetchingBookingBasedOnId = (id) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await fetchABookingBasedOnId(id);
        // console.log(res.data);
        dispatch(fetchingABookingSuccess(res.data))
    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}

// for accountUser
export const FetchingBooking = (id) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await fetchBooking(id);
        // console.log(res.data);
        dispatch(fetchingABookingSuccess(res.data))
    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}


export const FetchingBookingBasedOnBookingId = (id) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await fetchBookingBasedOnBookingId(id);
        // console.log(res.data);
        dispatch(fetchingABookingSuccess(res.data))
    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}