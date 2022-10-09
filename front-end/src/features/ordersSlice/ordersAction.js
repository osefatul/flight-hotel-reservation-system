import { fetchOrders, fetchOrdersRevenue, fetchOrdersStats } from "../../api/TravelApi/orders";
import { compare } from "../../utils/compare";
import { fetchingAnOrderSuccess, fetchingOrdersRevenueSuccess, fetchingOrdersStatsSuccess, fetchingOrdersSuccess, orderFail, ordersPending } from "./ordersSlice";




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




export const FetchingAnOrder = () => async (dispatch) => {
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