import axios from "axios"

// const rootUrl = "http://localhost:5000/v1/"
const rootUrl = "https://stays-web-app.herokuapp.com/v1/"
const createRoomUrl = rootUrl + "rooms/";
const getRoomUrl =  rootUrl + "rooms/";
const deleteRoomUrl = rootUrl + "rooms/";
const updateRoomAvailabilityUrl = getRoomUrl + "/availability/";




export const createRoom = async (formData, hotelId) =>{
    try {
        const res = await axios.post(createRoomUrl + hotelId, formData,
        axios.defaults.withCredentials = true //use this for sending cookies
            );
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const getRoom = async (id) =>{
    try {
        const res = await axios.get(getRoomUrl + id,);
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


// Get all reserved rooms
export const getReservedRooms = async () =>{
    try {
        const res = await axios.get(getRoomUrl + "reservedRooms");
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}

// get reserved room by a user
export const getReservedRoomsByUser = async (id) =>{
    try {
        const res = await axios.get(getRoomUrl + "reservedRooms/" + id);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


// get reserved room by a user
export const getReservedRoomsByHotel = async (id) =>{
    try {
        const res = await axios.get(getRoomUrl + "reservedRoomsByHotel/" + id);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


// delete reserved rooms
export const deleteReservedRooms = async (id, formData) =>{
    try {
        const res = await axios.put(getRoomUrl + "unreservedRooms/" + id, formData);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}



export const deleteRoom = async (roomId) =>{
    try {
        const res = await axios.delete(deleteRoomUrl + roomId );
        console.log(res);
        return res
    }catch(error){
        console.log(error)
        return error;
    }
}


export const updateRoom = async (id) =>{
    try {
        const res = await axios.put(deleteRoomUrl + id );
        return res
    }catch(error){
        console.log(error)
        return error;

    }
}


export const updateRoomAvailability = async (roomId,
    dates, 
    reservedBy, 
    totalPrice, 
    hotel,
    selectedRoomsNumber) =>{
    try {

        const res = axios.put(updateRoomAvailabilityUrl + roomId, {
            roomId,
            dates, 
            reservedBy, 
            totalPrice, 
            hotel,
            selectedRoomsNumber
            });
        return res;
    }catch(error){
        console.log(error)
        return error;

    }
}