import { fetchAllUsers } from "../../api/userApi";
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
