
import { createFlight, getAFlight, getFlights, searchFlights, updateAFlight } from "../../api/TravelApi/flights";
import { fetchingAFlightSuccess, fetchingFlightsSuccess, flightFail, flightPending } from "./flightSlice";



export const CreatingFlight = (formData) => async (dispatch) => {
    dispatch(flightPending());
    try {
        const result = await createFlight(formData);
        dispatch(fetchingAFlightSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightFail(error))
        return error;
    }
}

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


export const UpdatingAFlight = (id,formData) => async (dispatch) => {
    dispatch(flightPending());
    try {
        const result = await updateAFlight(id, formData);
        dispatch(fetchingFlightsSuccess(result.data))
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


