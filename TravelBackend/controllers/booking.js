const {Booking} = require("../models/Booking");
const {Flight} = require("../models/Flight");
const {UserDetail} = require("../models/UserDetail");
var customId = require("custom-id");


const addNewBooking = async (req, res) => {
    try{
        const bookedUser = req.body.bookedUser;
        const flightId = req.body.flight;
        const accountUser = req.body.accountUser

        //Get flight and user details
        const flight = await Flight.findById(flightId);
        const user = await UserDetail.findById(bookedUser);

        let bookingId = customId({
            name: flight.from + flight.to + flight.airline,
            email: user.firstName + user.lastName,
        });

        //Console.log(bookingId);
        user.flights.push(flight);
        await user.save();

        const newBooking = new Booking({ 
            bookingId, 
            flight, 
            bookedUser, 
            accountUser,
            departureDate:req.body.departureDate, 
        });
        const booked = await newBooking.save();
        res.status(200).json({booked});
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const getAllBookings = async (req, res, next) => {
    try{
        const allBookings = await Booking.find();
        res.status(200).json(allBookings);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const getBookingsForAccountUser = async (req, res,) => {
    try{
        const theBooking = await Booking.find({accountUser: req.params.id});
        res.status(200).json(theBooking);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const getBookingsBasedOnBookingId = async (req, res,) => {
    try{
        const theBooking = await Booking.find({bookingId: req.params.id});
        res.status(200).json(theBooking);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const getABooking = async (req, res,) => {
    try{
        const theBooking = await Booking.findById({_id: req.params.id});
        res.status(200).json(theBooking);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const cancelBooking = async (req, res, next) => {
    try{

        const { bookingId } = req.params;
        const booking = await Booking.findById(bookingId);
        const userId = booking.user;
        const flightId = booking.flight;

        console.log(bookingId, userId, flightId);
        const result = await Booking.findByIdAndDelete(bookingId);
        const user = await UserDetail.findById(userId);
        const flight = await Flight.findById(flightId);
        user.flights.pull(flight);
        await user.save();

        res.status(200).json({ success: "true" });

    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const getUserDetailsBooking = async (req, res, next) => {
    try{
        const { userDetailId } = req.params;
        const bookings = await Booking.find({ user: userDetailId })
            .populate("flight")
            .populate("user");
        res.status(200).json(bookings);

    }catch(error) {
        console.log(error);
        res.status(500).json({message:error.message});
    }
}




module.exports = {
    getAllBookings,
    getABooking,
    getUserDetailsBooking,
    cancelBooking,
    addNewBooking,
    getBookingsForAccountUser,
    getBookingsBasedOnBookingId

}