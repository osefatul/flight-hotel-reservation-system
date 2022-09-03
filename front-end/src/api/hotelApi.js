import axios from "axios"

const rootUrl = "http://localhost:5000/v1/"
const createHotelUrl = rootUrl + "hotels/";
const getHotelUrl =  rootUrl + "hotels/";
const deleteHotelUrl = rootUrl + "hotels/";
const updateHotelUrl = rootUrl + "hotels/";
const getHotelsByCityUrl = rootUrl + "hotels/countByCity";
const getHotelRoomsUrl = rootUrl + "hotels/room/";
const getHotelsByTypeUrl = rootUrl + "hotels/countByType";
const getHotelsByFeatureUrl = rootUrl + "hotels?featured=true&limit=4&min=10&max=110";



export const createHotel = async (formData) =>{
    try {
        const res = await axios.post(createHotelUrl , formData);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getHotel = async (hotelId) =>{
    try {
        const res = await axios.get(getHotelUrl + "hotel/" + hotelId,);
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


export const updateHotel = async (hotelId) =>{
    try {
        const res = await axios.put(updateHotelUrl + hotelId );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}

export const getHotelRooms = async (roomId) =>{
    try {
        const res = await axios.put(getHotelRoomsUrl + roomId );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}




export const getHotelsByCity = async ()=>{
    try {
        const res = await axios.get(getHotelsByCityUrl + "?cities=Vancouver,Kabul,Richmond,Seatal");
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


// export const updateRoomAvailability = async (id) =>{
//     try {
//         const res = await axios.put(updateRoomAvailabilityUrl + id,);
//         console.log(res)
//     }catch(error){

//     }
// }