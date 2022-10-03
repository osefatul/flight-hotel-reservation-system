import axios from "axios"
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




export const fetchAnOrder = async(id)=>{
    try{
        const res = await axios.get(FetchingOrdersUrl + id)
        return res
    }catch(error){
        console.log(error)
        return error
    }
}

