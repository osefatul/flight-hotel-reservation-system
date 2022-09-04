import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    roomAvailable: "",
}

const roomSlice = createSlice ({
    name: 'rooms',
    initialState,

    reducers: {
        roomPending: (state, action)=>{
            state.isLoading = true
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
    fetchingRoomAvailabilitySuccess,
    roomsFail
} = actions

export default reducer;