import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    userDetail: {},
    UsersDetail: [],
    SelectedUsersDetail: [],

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
            state.userDetail = action.payload
        },

        fetchUserDetailSuccess : (state, action)=>{
            state.error = ""
            state.SelectedUsersDetail = action.payload
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
    fetchUserDetailSuccess,
    flightUserDetailFail
} = actions

export default reducer;