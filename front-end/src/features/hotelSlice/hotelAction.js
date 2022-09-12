import { createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, getHotelsByCity, getHotelsByDestination, getHotelsByFeature, getHotelsByType, updateHotel } from "../../api/hotelApi";
import { FeaturedHotelPending, fetchingAHotelSuccess, fetchingHotelRoomsDetailsSuccess, fetchingHotelsByDestinationSuccess, fetchingHotelsFeaturedSuccess, fetchingHotelsInTheCitiesSuccess, fetchingHotelsSuccess, fetchingHotelTypesSuccess, hotelPending, HotelsFail } from "./hotelSlice"





export const creatingHotel = (formData) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await createHotel(formData);
        console.log(result);
        dispatch(fetchingAHotelSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
        return error;
    }
}



export const FetchingAHotel = (hotelId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await getHotel(hotelId);
        dispatch(fetchingAHotelSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
        return error;
    }
}


export const fetchingHotels = () => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await getHotels();
        dispatch(fetchingHotelsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
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


export const fetchingHotelRooms = (hotelId) => async (dispatch) => {
    dispatch(hotelPending());
    try {
        const result = await getHotelRooms(hotelId);
        dispatch(fetchingHotelRoomsDetailsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
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


export const fetchingHotelsByFeature = () => async (dispatch) => {
    try {
        dispatch(hotelPending());
        dispatch(FeaturedHotelPending());
        const result = await getHotelsByFeature();
        dispatch(fetchingHotelsFeaturedSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
        return error;
    }
}




export const fetchingHotelsByDestination = (destination, min, max) => async (dispatch) => {

    dispatch(hotelPending());
    try {
        const result = await getHotelsByDestination(destination, min, max);

        dispatch(fetchingHotelsByDestinationSuccess(result.data))

    }catch(error){
        console.log(error)
        dispatch(HotelsFail(error))
        return error;
    }
}