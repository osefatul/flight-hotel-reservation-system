import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    userDetail: {},
    UsersDetail: [],
}

const flightUserDetailSlice = createSlice ({
    name: 'hotels',
    initialState,

    reducers: {
        flightUserDetailPending: (state, action)=>{
            state.isLoading = true
        },

        fetchingFlightUsersDetailSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.UsersDetail = action.payload
        },

        fetchingAFlightUserDetailSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.userDetail = action.payload
        },

        flightUserDetailFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = flightUserDetailSlice


export const  {
    flightUserDetailPending,
    fetchingFlightUsersDetailSuccess,
    fetchingAFlightUserDetailSuccess, 
    flightUserDetailFail
} = actions

export default reducer;