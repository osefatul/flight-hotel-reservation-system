import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    roomAvailable: "",
    room: {},
    rooms: []

}

const roomSlice = createSlice ({
    name: 'rooms',
    initialState,

    reducers: {
        roomPending: (state, action)=>{
            state.isLoading = true
        },
        fetchingRoomData: (state, action)=>{
            state.isLoading = false
            state.room = action.payload
            state.error = ""
        },
        fetchingRoomsData: (state, action)=>{
            state.isLoading = false
            state.rooms = action.payload
            state.error = ""
        },

        fetchingRoomAvailabilitySuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.roomAvailable = action.payload
        },

        roomsFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = roomSlice


export const  {
    roomPending,
    fetchingRoomData,
    fetchingRoomsData,
    fetchingRoomAvailabilitySuccess,
    roomsFail
} = actions

export default reducer;