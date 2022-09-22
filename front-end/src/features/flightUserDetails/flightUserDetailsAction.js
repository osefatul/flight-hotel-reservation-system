import { addNewUserDetails, getUserDetailsForCurrentUser, getUserDetail, deleteUserDetail } from "../../api/TravelApi/userDetails";
import {fetchingAFlightUserDetailSuccess, fetchingFlightUsersDetailSuccess, fetchUserDetailSuccess, flightUserDetailFail, flightUserDetailPending} from "../../features/flightUserDetails/flightUserDetailsSlice"





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



export const FetchingUserDetail = (id) => async (dispatch) => {
    try {
        const result = await getUserDetail(id);
        dispatch(fetchUserDetailSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightUserDetailFail(error))
        return error;
    }
}



export const deletingUserDetail = (id) => async (dispatch) => {
    try {
        const result = await deleteUserDetail(id);
        dispatch(fetchingAFlightUserDetailSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(flightUserDetailFail(error))
        return error;
    }
}


