import axios from "axios";
const creatingBookingUrl = "http://localhost:8000/v1/bookings/";
// const creatingBookingUrl = "https://travels-web-app.herokuapp.com/v1/bookings/";



export const CreateBooking = async (formData) => {
    try {
        const res = await axios.post(creatingBookingUrl, formData)
        return res
    }catch(err){
        console.log(err);
        return err
    }
}


export const fetchBookings = async () => {
    try {
        const res = await axios.get(creatingBookingUrl)
        return res
    }catch(err){
        console.log(err);
        return err
    }
}

//for accountUser
export const fetchBooking = async (id) => {
    try {
        const res = await axios.get(creatingBookingUrl + id)
        return res
    }catch(err){
        console.log(err);
        return err
    }
}


export const fetchABookingBasedOnId = async (id) => {
    try {
        const res = await axios.get(creatingBookingUrl +"getABooking/" + id)
        return res
    }catch(err){
        console.log(err);
        return err
    }
}


export const fetchBookingBasedOnBookingId = async (id) => {
    try {
        const res = await axios.get(creatingBookingUrl+"booking/" + id)
        return res
    }catch(err){
        console.log(err);
        return err
    }
}


export const deleteBooking = async (id, flightId) => {
    try {
        const res = await axios.delete(creatingBookingUrl + id + "/" + flightId )
        return res
    }catch(err){
        console.log(err);
        return err
    }
}