import axios from "axios"

const rootUrl = "http://localhost:5000/v1/"
const createHotelUrl = rootUrl + "hotels/";
const getHotelUrl =  rootUrl + "hotels/";
const deleteHotelUrl = rootUrl + "hotels/";
const updateHotelUrl = rootUrl + "hotels/";


export const createHotel = async (formData) =>{
    try {
        const res = await axios.post(createHotelUrl , formData);
        console.log(res)
    }catch(error){

    }
}


export const getHotel = async (hotelId) =>{
    try {
        const res = await axios.get(getHotelUrl + hotelId,);
        console.log(res)
    }catch(error){

    }
}


export const getHotels = async () =>{
    try {
        const res = await axios.get(getHotel);
        console.log(res)
    }catch(error){

    }
}


export const deleteHotel = async (hotelId) =>{
    try {
        const res = await axios.delete(deleteHotelUrl + hotelId );
        console.log(res)
    }catch(error){

    }
}


export const updateHotel = async (hotelId) =>{
    try {
        const res = await axios.put(updateHotel + hotelId );
        console.log(res)
    }catch(error){

    }
}


// export const updateRoomAvailability = async (id) =>{
//     try {
//         const res = await axios.put(updateRoomAvailabilityUrl + id,);
//         console.log(res)
//     }catch(error){

//     }
// }