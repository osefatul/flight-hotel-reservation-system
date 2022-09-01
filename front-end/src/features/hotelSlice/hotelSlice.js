import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    hotels: null,
    HotelsInTheCities: {},
    hotelTypes:{},
    
}

const hotelSlice = createSlice ({
    name: 'hotels',
    initialState,

    reducers: {
        hotelPending: (state, action)=>{
            state.isLoading = true
        },

        fetchingHotelsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotels = action.payload

        },

        fetchingHotelsInTheCitiesSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.HotelsInTheCities = action.payload

        },

        fetchingHotelTypesSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotelTypes = action.payload

        },
        HotelsFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = hotelSlice


export const  {
    hotelPending, 
    fetchingHotelsSuccess, 
    fetchingHotelsInTheCitiesSuccess, 
    fetchingHotelTypesSuccess,
    HotelsFail
} = actions

export default reducer;

