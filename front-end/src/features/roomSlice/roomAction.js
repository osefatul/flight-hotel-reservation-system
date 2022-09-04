import { fetchingRoomAvailabilitySuccess, roomPending, roomsFail } from "./roomSlice"
import axios from "axios"
import { updateRoomAvailability } from "../../api/roomsApi"


export const updatingRoomAvailability = (roomId, dates) => async (dispatch) =>{
    dispatch(roomPending())
    try {
        const res = await axios.update(updateRoomAvailability(roomId, dates));
        console.log(res)
        dispatch(fetchingRoomAvailabilitySuccess(res.data))
    }catch(err) {
        console.log(err)
        dispatch(roomsFail(err))
        return err;
    }
}