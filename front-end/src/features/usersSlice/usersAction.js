import { fetchAllUsers, fetchUser, userDelete } from "../../api/userApi";
import { getRequestedUserSuccess, getUsersFail, getUsersPending, getUsersSuccess } from "./usersSlice";



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
