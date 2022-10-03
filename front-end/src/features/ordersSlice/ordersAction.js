import { fetchOrders } from "../../api/TravelApi/orders";
import { fetchingAnOrderSuccess, fetchingOrdersSuccess, orderFail, ordersPending } from "./ordersSlice";




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