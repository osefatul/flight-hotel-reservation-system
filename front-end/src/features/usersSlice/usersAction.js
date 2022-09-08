import { fetchAllUsers, userDelete } from "../../api/userApi";
import { getUsersFail, getUsersPending, getUsersSuccess } from "./usersSlice";



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
