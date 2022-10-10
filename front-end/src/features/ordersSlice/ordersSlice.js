import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoading: false,
    isStatsLoading: false,
    isRevenueLoading: false,
    FeaturedLoading: false,
    ordersWeeklyLoading: false,
    latestTransactionsLoading: false,

    error: "",
    order: {},
    orders: [],
    ordersStats: [],
    ordersRevenue: [],
    ordersWeeklyRevenue: [],
    latestTransactions: [],
}

const orderSlice = createSlice ({
    name: 'orders',
    initialState,

    reducers: {
        ordersPending: (state, action)=>{
            state.isLoading = true
            state.isRevenueLoading = true
            state.isStatsLoading = true
            state.ordersWeeklyRevenue = true
            state.latestTransactions = true
        },

        fetchingOrdersSuccess: (state, action)=>{
            state.isLoading = false
            state.error = ""
            state.orders = action.payload
        },

        fetchingOrdersStatsSuccess: (state, action)=>{
            state.isStatsLoading = false
            state.isLoading = false
            state.error = ""
            state.ordersStats = action.payload
        },

        fetchingOrdersRevenueSuccess: (state, action)=>{
            state.isRevenueLoading = false
            state.isLoading = false
            state.error = ""
            state.ordersRevenue = action.payload
        },

        fetchingWeeklyOrdersRevenueSuccess: (state, action)=>{
            state.ordersWeeklyLoading = false
            state.isLoading = false
            state.error = ""
            state.ordersWeeklyRevenue = action.payload
        },

        fetchingLatestTransactionsSuccess: (state, action)=>{
            state.latestTransactionsLoading = false
            state.isLoading = false
            state.error = ""
            state.latestTransactions = action.payload
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
    fetchingOrdersRevenueSuccess,
    fetchingLatestTransactionsSuccess,
    fetchingWeeklyOrdersRevenueSuccess,
    orderFail
} = actions

export default reducer;