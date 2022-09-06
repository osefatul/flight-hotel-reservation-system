import { fetchingRoomAvailabilitySuccess, fetchingRoomData, roomPending, roomsFail } from "./roomSlice"
import axios from "axios"
import { createRoom, updateRoom, updateRoomAvailability } from "../../api/roomsApi"


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



export const creatingRoom = (formDate)=>  async(dispatch) => {
    dispatch(roomPending())
    try{
        const res = await createRoom(formDate);
        dispatch(fetchingRoomData(res.data));
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