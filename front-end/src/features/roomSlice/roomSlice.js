import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    roomAvailable: "",
    room: {}
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
    fetchingRoomAvailabilitySuccess,
    roomsFail
} = actions

export default reducer;