import { addNewUserDetails, getUserDetailsForCurrentUser } from "../../api/TravelApi/userDetails";
import {fetchingAFlightUserDetailSuccess, fetchingFlightUsersDetailSuccess, flightUserDetailFail, flightUserDetailPending} from "../../features/flightUserDetails/flightUserDetailsSlice"





export const AddingFlightsUserDetails = (id, formData) => async (dispatch) => {
    dispatch(flightUserDetailPending());
    try {
        const result = await addNewUserDetails(id, formData);
        dispatch(fetchingAFlightUserDetailSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightUserDetailFail(error))
        return error;
    }
}


export const FetchingAFlightUserDetail = (id) => async (dispatch) => {
    dispatch(flightUserDetailPending());
    try {
        const result = await getUserDetailsForCurrentUser(id);
        dispatch(fetchingFlightUsersDetailSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightUserDetailFail(error))
        return error;
    }
}



