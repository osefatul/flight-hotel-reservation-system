import { fetchingRoomAvailabilitySuccess, fetchingRoomData, fetchingRoomsData, fetchingRoomSuccess, roomPending, roomsFail } from "./roomSlice"
import axios from "axios"
import { createRoom, getRooms, updateRoom, updateRoomAvailability } from "../../api/roomsApi"


export const updatingRoomAvailability = ({roomId, dates}) => async (dispatch) =>{
    dispatch(roomPending())
    try {
        const res = await updateRoomAvailability(roomId, dates)
        dispatch(fetchingRoomAvailabilitySuccess(res.data))
    }catch(err) {
        console.log(err)
        dispatch(roomsFail(err))
        return err;
    }
}



export const creatingRoom = (formData, hotelId)=>  async(dispatch) => {
    dispatch(roomPending())
    try{
        const res = await createRoom(formData, hotelId);
        dispatch(fetchingRoomSuccess(res.data));
    }catch(e){
        console.log(e);
        dispatch(roomsFail(e))
        return e
    }
}



export const fetchingRooms = ()=>  async(dispatch) => {
    dispatch(roomPending())
    try{
        const res = await getRooms();
        dispatch(fetchingRoomsData(res.data));
    }catch(e){
        console.log(e);
        dispatch(roomsFail(e))
        return e
    }
}




export const updatingRoomDetails = (roomId) => async (dispatch) => {
    dispatch(roomPending())
    try {
        const res = await updateRoom(roomId)
        dispatch(fetchingRoomData(res.data))
    }catch(e){
        console.log(e);
        dispatch(roomsFail())
        return e

    }
}