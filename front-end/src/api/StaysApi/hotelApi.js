import axios from "axios"


const rootUrl = "https://stays-web-app.herokuapp.com/v1/"
// const rootUrl = "http://localhost:5000/v1/"
const createHotelUrl = rootUrl + "hotels/";
const getHotelUrl =  rootUrl + "hotels/";
const deleteHotelUrl = rootUrl + "hotels/";
const updateHotelUrl = rootUrl + "hotels/";
const getHotelsByCityUrl = rootUrl + "hotels/countByCity";
const getHotelRoomsUrl = rootUrl + "hotels/room/";
const getHotelsByTypeUrl = rootUrl + "hotels/countByType";
const getHotelsByFeatureUrl = rootUrl + "hotels?featured=true&limit=4";




export const createHotel = async (formData) =>{
    try {
        const res = await axios.post(createHotelUrl , formData, 
            axios.defaults.withCredentials = true //for sending cookies.
        );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getHotel = async (hotelId) =>{
    try {
        const res = await axios.get(getHotelUrl + "hotel/" + hotelId);
        return res
    }catch(error){
        console.log(error)
        return error;

    }
}


export const getHotels = async () =>{
    try {
        const res = await axios.get(getHotelUrl);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const deleteHotel = async (hotelId) =>{
    try {
        const res = await axios.delete(deleteHotelUrl + hotelId );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const updateHotel = async (hotelId, formData) =>{
    try {
        const res = await axios.put(updateHotelUrl + hotelId, formData,
            axios.defaults.withCredentials = true //for sending cookies.
            );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getHotelRooms = async (hotelId) =>{
    try {
        const res = await axios.get(getHotelRoomsUrl + hotelId );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}



export const getHotelsByCity = async ()=>{
    try {
        const res = await axios.get(getHotelsByCityUrl + "?cities=Vancouver,New York,Dubai,Toronto");
        return res
    }catch (error){
        console.log(error)
        return error;
    }
}



export const getHotelsByType = async ()=>{
    try {
        const res = await axios.get(getHotelsByTypeUrl + "");
        return res
    }catch (error){
        console.log(error)
        return error;
    }
}



export const getHotelsByFeature = async ()=>{
    try {
        const res = await axios.get(getHotelsByFeatureUrl);
        return res
    }catch (error){
        console.log(error)
        return error;
    }
}



export const getHotelsByDestination = async(destination, min, max) => {
    try {
        const result = await axios.get(`http://localhost:5000/v1/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`);
        // const result = await axios.get(`https://stays-web-app.herokuapp.com/v1/hotels?city=${destination}&min=${min || 0 }&max=${max || 999}`);
        
        return result

    }catch (error){
        console.log(error)
        return error;
    }
}

