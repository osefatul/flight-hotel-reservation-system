import axios from "axios";
const userDetailsUrl = "http://localhost:8000/v1/userDetails/";
// const userDetailsUrl = "https://travels-web-app.herokuapp.com/v1/userDetails/";

const getUserDetailsUrl =userDetailsUrl + "loggedInUser/"


export const addNewUserDetails = async (id, formData) =>{
    try {
        const res = await axios.post(userDetailsUrl + id, formData);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}



export const getUserDetailsForCurrentUser = async (id) =>{
    try {
        const res = await axios.get(getUserDetailsUrl + id,);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getUserDetail = async (id) =>{
    try {
        const res = await axios.get(userDetailsUrl + id,);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}



export const deleteUserDetail = async (id) =>{
    try {
        const res = await axios.delete(userDetailsUrl + id,);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}