import axios from "axios";


export const createPDFTicket = async(formData) =>{
    try{
        const res = await axios.post("http://localhost:8000/v1/create-pdf/", formData);
        return res.data
    }catch(error){
        console.log(error);
    }
}