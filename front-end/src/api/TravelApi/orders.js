import axios from "axios"
import { compare } from "../../utils/compare"
const FetchingOrdersUrl = "http://localhost:8000/v1/orders/"



export const fetchOrders = async()=>{
    try{
        const res = await axios.get(FetchingOrdersUrl)
        return res
    }catch(error){
        console.log(error)
        return error
    }
}


export const fetchOrdersStats = async()=>{
    try{
        const res = await axios.get(FetchingOrdersUrl+"stats")
        return res.data.sort(compare)
    }catch(error){
        console.log(error)
        return error
    }
}

// revenue of the previous month
export const fetchOrdersRevenue = async()=>{
    try{
        const res = await axios.get(FetchingOrdersUrl+"revenue")
        return res.data.sort(compare)
    }catch(error){
        console.log(error)
        return error
    }
}

export const fetchOrdersWeeklyRevenue = async()=>{
    try{
        const res = await axios.get(FetchingOrdersUrl+"weeklyRevenue")
        return res.data.sort(compare)
    }catch(error){
        console.log(error)
        return error
    }
}


export const fetchLatestOrdersTransactions = async()=>{
    try{
        const res = await axios.get(FetchingOrdersUrl+"latestTransactions/?new")
        return res.data
    }catch(error){
        console.log(error)
        return error
    }
}



export const fetchAnOrder = async(id)=>{
    try{
        const res = await axios.get(FetchingOrdersUrl + id)
        return res
    }catch(error){
        console.log(error)
        return error
    }
}

