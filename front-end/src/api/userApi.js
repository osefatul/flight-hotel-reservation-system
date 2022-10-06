import axios from "axios"
import { loginSuccess } from "../features/authSlice/loginSlice";

const rootUrl = "http://localhost:5000/v1/"
const registerUserUrl = rootUrl + "auth/register";
const loginUserUrl =    rootUrl + "auth/login";
const allUsersProfileUrl = rootUrl + "users/";
const deleteUserUrl = rootUrl + "users/";

export const userRegistration = async (formData) =>{
    try {
        const res = await axios.post(registerUserUrl, formData);
        console.log(res)
        return res.data;
    }catch(error){
        console.log(error)
        return error;
    }
}



export const loginUser = async (formData) =>{
    try {
        const res = await axios.post(loginUserUrl,
            formData, 
            axios.defaults.withCredentials = true //use this for sending cookies
        );
        if(res.status === 200){
            sessionStorage.setItem("accessJWT", res.data.token);
        return res.data;
        }
        return res
        
    }catch(error){
        console.log(error)
        return error;
    }
}



export const fetchAllUsers = async () =>{
    try {
        const res = await axios.get(allUsersProfileUrl, 
            axios.defaults.withCredentials = true //for sending cookies.
            )
        return res.data
    }catch(error){
        console.log(error);
        return(error.message);
    }
}



export const fetchUser = async (id) =>{
    try {
        const res = await axios.get(allUsersProfileUrl + id, 
            axios.defaults.withCredentials = true //for sending cookies.
            )
        return res.data
    }catch(error){
        console.log(error);
        return(error.message);
    }
}


export const fetchUsersStats = async (id) =>{
    try {
        const res = await axios.get(allUsersProfileUrl+"stats", 
            axios.defaults.withCredentials = true //for sending cookies.
            )
        return res.data
    }catch(error){
        console.log(error);
        return(error.message);
    }
}



export const fetchCurrentUser = async (id) =>{
    try {
        const res = await axios.get("http://localhost:5000/v1/users/currentUser/"+ id, 
            axios.defaults.withCredentials = true //for sending cookies.
            )
        return res.data
    }catch(error){
        console.log(error);
        return(error.message);
    }
}





//Delete User
export const userDelete = async (id) => {
    try {
        await axios.delete(deleteUserUrl+id);
    } catch (error) {
        console.log(error);
        return error.message;
    }
};