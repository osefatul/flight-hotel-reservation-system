import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    FeaturedLoading: false,
    error: "",
    flight: {},
    flights: [],
}

const flightSlice = createSlice ({
    name: 'hotels',
    initialState,

    reducers: {
        flightPending: (state, action)=>{
            state.isLoading = true
        },

        fetchingFlightsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.flights = action.payload
        },

        fetchingAFlightSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.flight = action.payload
        },

        flightFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = flightSlice


export const  {
    flightPending,
    fetchingFlightsSuccess,
    fetchingAFlightSuccess, 
    flightFail
} = actions

export default reducer;