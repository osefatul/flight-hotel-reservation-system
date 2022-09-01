import { createHotel, deleteHotel, getHotelRooms, getHotelsByCity, getHotelsByType, updateHotel } from "../../api/hotelApi";
import { fetchingHotelsInTheCitiesSuccess, fetchingHotelTypesSuccess, hotelPending, HotelsFail } from "./hotelSlice"





export const creatingHotel = (formData) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await createHotel(formData);
        console.log(result);
    }catch(error){
        console.log(error)
        return error;
    }
}



export const deletingHotel = (hotelId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await deleteHotel(hotelId);
        console.log(result);
    }catch(error){
        console.log(error)
        return error;
    }
}



export const updatingHotel = (hotelId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await updateHotel(hotelId);
        console.log(result);
    }catch(error){
        console.log(error)
        return error;
    }
}


export const fetchingHotelRooms = (roomId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await getHotelRooms(roomId);
        console.log(result);
    }catch(error){
        console.log(error)
        return error;
    }
}



export const fetchingHotelsByCity = (roomId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await getHotelsByCity(roomId);
        dispatch(fetchingHotelsInTheCitiesSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
        return error;
    }
}




export const fetchingHotelsByType = (roomId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await getHotelsByType(roomId);
        dispatch(fetchingHotelTypesSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
        return error;
    }
}