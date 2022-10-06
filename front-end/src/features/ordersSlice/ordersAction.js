import { fetchOrders, fetchOrdersStats } from "../../api/TravelApi/orders";
import { compare } from "../../utils/compare";
import { fetchingAnOrderSuccess, fetchingOrdersStatsSuccess, fetchingOrdersSuccess, orderFail, ordersPending } from "./ordersSlice";




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
        const finalResult = await result.sort(compare)
        dispatch(fetchingOrdersStatsSuccess(finalResult))
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