import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    error: "",
    hotels: {},
    HotelsInTheCities: {},
    hotelTypes:{},
    hotelsFeatured:{},
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

        fetchingHotelsFeaturedSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotelsFeatured = action.payload

        },

        fetchingSuccess: (state, action)=>{
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
    fetchingHotelsFeaturedSuccess,
    HotelsFail
} = actions

export default reducer;

