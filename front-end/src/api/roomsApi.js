import axios from "axios"

const rootUrl = "http://localhost:5000/v1/"
const createRoomUrl = rootUrl + "rooms/";
const getRoomUrl =  rootUrl + "rooms/";
const deleteRoomUrl = rootUrl + "rooms/";
const updateRoomAvailabilityUrl = rootUrl + "rooms/availability/";






export const createRoom = async (formData, hotelId) =>{
    try {
        const res = await axios.post(createRoomUrl + hotelId, formData);
        console.log(res)
    }catch(error){

    }
}


export const getRoom = async (id) =>{
    try {
        const res = await axios.get(getRoomUrl + id,);
        console.log(res)
    }catch(error){

    }
}


export const getRooms = async (id) =>{
    try {
        const res = await axios.get(getRoomUrl);
        console.log(res)
    }catch(error){

    }
}


export const deleteRoom = async (roomId, hotelId) =>{
    try {
        const res = await axios.delete(deleteRoomUrl + roomId + "/" + hotelId );
        console.log(res)
    }catch(error){

    }
}


export const updateRoom = async (id) =>{
    try {
        const res = await axios.put(deleteRoomUrl + id );
        console.log(res)
    }catch(error){

    }
}


export const updateRoomAvailability = async (id) =>{
    try {
        const res = await axios.put(updateRoomAvailabilityUrl + id,);
        console.log(res)
    }catch(error){

    }
}