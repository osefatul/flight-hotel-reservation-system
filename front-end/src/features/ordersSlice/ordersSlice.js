import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    FeaturedLoading: false,
    error: "",
    order: {},
    orders: [],
    ordersStats: [],
}

const orderSlice = createSlice ({
    name: 'orders',
    initialState,

    reducers: {
        ordersPending: (state, action)=>{
            state.isLoading = true
        },

        fetchingOrdersSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.orders = action.payload
        },

        fetchingOrdersStatsSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.ordersStats = action.payload
        },

        fetchingAnOrderSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.order = action.payload
        },

        orderFail: (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        },
    }
})

const { reducer, actions} = orderSlice


export const  {
    ordersPending,
    fetchingOrdersSuccess,
    fetchingAnOrderSuccess,
    fetchingOrdersStatsSuccess,
    orderFail
} = actions

export default reducer;