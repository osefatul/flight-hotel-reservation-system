import axios from "axios"

const rootUrl = "http://localhost:5000/v1/"
const createRoomUrl = rootUrl + "rooms/";
const getRoomUrl =  rootUrl + "rooms/";
const deleteRoomUrl = rootUrl + "rooms/";
const updateRoomAvailabilityUrl = getRoomUrl + "/availability/";




export const createRoom = async (formData, hotelId) =>{
    try {
        const res = await axios.post(createRoomUrl + hotelId, formData,
        axios.defaults.withCredentials = true //use this for sending cookies
            );
        console.log(res)
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getRoom = async (id) =>{
    try {
        const res = await axios.get(getRoomUrl + id,);
        console.log(res)
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getRooms = async () =>{
    try {
        const res = await axios.get(getRoomUrl);

        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const deleteRoom = async (roomId, hotelId) =>{
    try {
        const res = await axios.delete(deleteRoomUrl + roomId + "/" + hotelId );
        console.log(res)
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const updateRoom = async (id) =>{
    try {
        const res = await axios.put(deleteRoomUrl + id );
        console.log(res)
        return res
    }catch(error){
        console.log(error)
        return error;

    }
}


export const updateRoomAvailability = async (roomId, dates) =>{
    try {

        const res = axios.put(updateRoomAvailabilityUrl + roomId, {
                    dates: dates,
                });

        return res;
    }catch(error){
        console.log(error)
        return error;

    }
}