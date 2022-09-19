import { getAFlight, getFlights, searchFlights } from "../../api/TravelApi/flights";
import { fetchingAFlightSuccess, fetchingFlightsSuccess, flightFail, flightPending } from "./flightSlice";


export const FetchingFlights = () => async (dispatch) => {
    dispatch(flightPending());
    try {
        const result = await getFlights();
        dispatch(fetchingFlightsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightFail(error))
        return error;
    }
}


export const FetchingAFlight = (id) => async (dispatch) => {
    dispatch(flightPending());
    try {
        const result = await getAFlight(id);
        dispatch(fetchingAFlightSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightFail(error))
        return error;
    }
}


export const SearchingFlights = (formData) => async (dispatch) => {
    dispatch(flightPending());
    try {
        const result = await searchFlights(formData);
        dispatch(fetchingFlightsSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightFail(error))
        return error;
    }
}



// export const fetchingHotels = () => async (dispatch) => {
//     dispatch(hotelPending());
//     try {
//         const result = await getHotels();
//         dispatch(fetchingHotelsSuccess(result.data))
//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }


// export const deletingHotel = (hotelId) => async (dispatch) => {
//     dispatch(hotelPending());
//     try {
//         const result = await deleteHotel(hotelId);
//         console.log(result);
//         dispatch(fetchingAHotelSuccess(result.data))
//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }


// export const updatingHotel = (hotelId) => async (dispatch) => {
//     dispatch(hotelPending());
//     try {
//         const result = await updateHotel(hotelId);
//         console.log(result);
//     }catch(error){
//         console.log(error)
//         return error;
//     }
// }


// export const fetchingHotelRooms = (hotelId) => async (dispatch) => {
//     dispatch(hotelPending());
//     try {
//         const result = await getHotelRooms(hotelId);
//         dispatch(fetchingHotelRoomsDetailsSuccess(result.data))
//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }


// export const fetchingHotelsByCity = (roomId) => async (dispatch) => {
//     dispatch(hotelPending());
//     try {
//         const result = await getHotelsByCity(roomId);
//         dispatch(fetchingHotelsInTheCitiesSuccess(result.data))
//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }


// export const fetchingHotelsByType = (roomId) => async (dispatch) => {
//     dispatch(hotelPending());
//     try {
//         const result = await getHotelsByType(roomId);
//         dispatch(fetchingHotelTypesSuccess(result.data))
//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }


// export const fetchingHotelsByFeature = () => async (dispatch) => {
//     try {
//         dispatch(hotelPending());
//         dispatch(FeaturedHotelPending());
//         const result = await getHotelsByFeature();
//         dispatch(fetchingHotelsFeaturedSuccess(result.data))
//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }




// export const fetchingHotelsByDestination = (destination, min, max) => async (dispatch) => {

//     dispatch(hotelPending());
//     try {
//         const result = await getHotelsByDestination(destination, min, max);

//         dispatch(fetchingHotelsByDestinationSuccess(result.data))

//     }catch(error){
//         console.log(error)
//         dispatch(HotelsFail(error))
//         return error;
//     }
// }