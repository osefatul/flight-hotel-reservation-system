import axios from "axios"
import { loginSuccess } from "../features/authSlice/loginSlice";


const rootUrl = "http://localhost:5000/v1/"
const registerUserUrl = rootUrl + "auth/register";
const loginUserUrl =    rootUrl + "auth/login";




export const userRegistration = async (formData) =>{
    try {
        const res = await axios.post(registerUserUrl, formData);
        console.log(res)
    }catch(error){

    }
}



export const loginUser = async (formData) =>{
    
    
    try {
        const res = await axios.post(loginUserUrl, formData);

        if(res.status === 200){
            sessionStorage.setItem("accessJW", res.data.token);
        return res.data;
        }
        return res

    }catch(error){
        console.log(error)
        return error;
    }
}