import { fetchAllUsers, fetchUser, userDelete, fetchCurrentUser, fetchUsersStats } from "../../api/userApi";
import { compare } from "../../utils/compare";
import { getRequestedUserSuccess, getUsersFail, getUsersPending, getUsersStatsSuccess, getUsersSuccess } from "./usersSlice";



export const getUsersData =() => async dispatch => {
    dispatch(getUsersPending());
    try {
        const result = await fetchAllUsers();
        dispatch(getUsersSuccess(result));
        return result
        
    } catch (error) {
        dispatch(getUsersFail(error));
    }
}



export const getUsersStats =() => async dispatch => {
    dispatch(getUsersPending());
    try {
        const result = await fetchUsersStats();
        const finalResult = await result.sort(compare)
        dispatch(getUsersStatsSuccess(finalResult));
        return result
        
    } catch (error) {
        dispatch(getUsersFail(error));
    }
}




export const getUserData =(id) => async dispatch => {
    dispatch(getUsersPending());
    try {
        const result = await fetchUser(id);
        dispatch(getRequestedUserSuccess(result));
        return result
    } catch (error) {
        dispatch(getUsersFail(error));
    }
}


export const getCurrentUserData =(id) => async dispatch => {
    dispatch(getUsersPending());
    try {
        const result = await fetchCurrentUser(id);
        dispatch(getRequestedUserSuccess(result));
        return result
    } catch (error) {
        dispatch(getUsersFail(error));
    }
}



export const DeletingUser =(id) => async dispatch => {
    dispatch(getUsersPending());
    try {
        const result = await userDelete(id);
        dispatch(getUsersSuccess(result));
        return result
        
    } catch (error) {
        dispatch(getUsersFail(error));
    }
}
