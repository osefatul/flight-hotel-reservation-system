import { CreateBooking, fetchBooking } from "../../api/TravelApi/booking";
import { BookingFail, BookingPending, fetchingABookingSuccess } from "./bookingSlice"



export const AddingBooking = (formData) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await CreateBooking(formData);
        dispatch(fetchingABookingSuccess(res.data))

    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}



export const FetchingBooking = (id) => async (dispatch) =>{
    dispatch(BookingPending);
    try{
        const res = await fetchBooking(id);
        console.log(res.data);
        dispatch(fetchingABookingSuccess(res.data))
    }catch(error){
        console.log(error)
        dispatch(BookingFail)
    }
}