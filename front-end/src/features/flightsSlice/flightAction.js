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


