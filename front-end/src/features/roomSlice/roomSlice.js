import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    roomAvailable: "",
    room: {},
    rooms: [],
    reservedRooms:[],
    reservedRoom:{},
    message: "",
}

const roomSlice = createSlice ({
    name: 'rooms',
    initialState,

    reducers: {
        roomPending: (state, action)=>{
            state.isLoading = true
        },
        fetchingRoomSuccess : (state, action) => {
            state.isLoading = false
            state.error = false
            state.message = action.payload
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

        fetchingReservedRoomData: (state, action)=>{
            state.isLoading = false
            state.reservedRoom = action.payload
            state.error = ""
        },

        fetchingReservedRoomsData: (state, action)=>{
            state.isLoading = false
            state.reservedRooms = action.payload
            state.error = ""
        },

        fetchingRoomAvailabilitySuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.roomAvailable = action.payload
        },

        EraseRoomMessage: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.message = ""
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
    fetchingRoomSuccess,
    fetchingRoomData,
    fetchingRoomsData,
    fetchingRoomAvailabilitySuccess,
    EraseRoomMessage,
    roomsFail,
    fetchingReservedRoomData,
    fetchingReservedRoomsData
} = actions

export default reducer;