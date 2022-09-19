const {Booking} = require("../models/Booking");
const {Flight} = require("../models/Flight");
const {User} = require("../models/User");




const addNewBooking = async (req, res, next) => {
    try{
        const userId = req.body.user;
        const flightId = req.body.flight;

        const flight = await Flight.findById(flightId);
        const user = await User.findById(userId);

        let bookingId = customId({
            name: flight.from + flight.to + flight.airlines,
            email: user.firstName + user.lastName,
        });

        console.log(bookingId);
        user.flights.push(flight);
        await user.save();

        const newFlight = new Flight(req.body);
        await newFlight.save();   
        res.status(200).json({message:"Flight successfully Added !"})

        const newBooking = new Booking({ bookingId, flight, user });
        const booking = await newBooking.save();
        console.log(booking);
        res.status(201).json(booking);
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



const getABooking = async (req, res, next) => {
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
        const user = await User.findById(userId);
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
    addNewBooking

}