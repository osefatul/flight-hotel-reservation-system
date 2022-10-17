import axios from "axios"

// const rootUrl = "http://localhost:8000/v1/"
const rootUrl = "https://travels-web-app.herokuapp.com/v1/"

const getFlightsUrl = rootUrl + "flights/"
const getAFlightUrl = rootUrl + "flights/getAFlight/"
const searchFlightsUrl = getFlightsUrl + "searchAFlight"
const updateAFlightUrl = getFlightsUrl + "updateAFlight/"
const deleteAFlightUrl = getFlightsUrl + "deleteAFlight/"





export const createFlight = async (formData)=>{
    try {
        const res = await axios.post(getFlightsUrl, formData);
        console.log(res)
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}

export const getFlights = async () =>{
    try {
        const res = await axios.get(getFlightsUrl);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getAFlight = async (id) =>{
    try {
        const res = await axios.get(getAFlightUrl + id);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const updateAFlight = async (id ,formData) =>{
    try {
        const res = await axios.patch(updateAFlightUrl+id, formData);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const deleteAFlight = async (id) =>{
    try {
        const res = await axios.delete(deleteAFlightUrl+id);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}

export const searchFlights = async (formData) =>{
    try {
        const res = await axios.post(searchFlightsUrl, formData);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}