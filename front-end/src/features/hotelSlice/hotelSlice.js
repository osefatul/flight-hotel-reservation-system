import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    FeaturedLoading: false,
    error: "",
    hotel: {},
    hotels: [],
    HotelsInTheCities: {},
    hotelTypes:{},
    hotelsFeatured:[],
    hotelsByDestination:[],
    hotelRoomsDetails: []
}

const hotelSlice = createSlice ({
    name: 'hotels',
    initialState,

    reducers: {
        hotelPending: (state, action)=>{
            state.isLoading = true
        },

        FeaturedHotelPending: (state, action)=>{
            state.isLoading = true
            state.FeaturedLoading = true
        },


        fetchingHotelsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotels = action.payload
        },

        fetchingAHotelSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotel = action.payload
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

        fetchingHotelsByDestinationSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotelsByDestination = action.payload
        },

        fetchingHotelRoomsDetailsSuccess : (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.hotelRoomsDetails = action.payload
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
    FeaturedHotelPending,
    fetchingAHotelSuccess, 
    fetchingHotelsSuccess, 
    fetchingHotelsInTheCitiesSuccess, 
    fetchingHotelTypesSuccess,
    fetchingHotelsFeaturedSuccess,
    fetchingHotelsByDestinationSuccess,
    fetchingHotelRoomsDetailsSuccess,
    HotelsFail
} = actions

export default reducer;