import { fetchAnOrder, fetchLatestOrdersTransactions, fetchOrders, fetchOrdersRevenue, fetchOrdersStats, fetchOrdersWeeklyRevenue } from "../../api/TravelApi/orders";
import { compare } from "../../utils/compare";
import { fetchingAnOrderSuccess, fetchingLatestTransactionsSuccess, fetchingOrdersRevenueSuccess, fetchingOrdersStatsSuccess, fetchingOrdersSuccess, fetchingWeeklyOrdersRevenueSuccess, orderFail, ordersPending } from "./ordersSlice";




export const FetchingOrders = () => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchOrders();
        dispatch(fetchingOrdersSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}



export const FetchingOrdersStats = () => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchOrdersStats();
        const finalResult = await result
        dispatch(fetchingOrdersStatsSuccess(finalResult))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}


export const FetchingOrdersRevenue = () => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchOrdersRevenue();
        const finalResult = await result
        dispatch(fetchingOrdersRevenueSuccess(finalResult))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}

export const FetchingWeeklyOrdersRevenue = () => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchOrdersWeeklyRevenue();
        const newResult = result?.map(item => {
            const Days = ["SUN", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY",]
        
            return {
            day: Days[item._id - 1],//because the item array day starts with 1 and the Days array it starts with zero.
            amount: item.total/100,
        }
        })
        dispatch(fetchingWeeklyOrdersRevenueSuccess(newResult))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}


export const fetchingLatestOrdersTransactions = () => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchLatestOrdersTransactions();
        dispatch(fetchingLatestTransactionsSuccess(result))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}




export const FetchingOrdersForASpecificUser = (id) => async (dispatch) => {
    dispatch(ordersPending());
    try {
        const result = await fetchAnOrder(id);
        dispatch(fetchingOrdersSuccess(result.data))
    }catch(error){
        console.log(error)
        dispatch(orderFail(error))
        return error;
    }
}