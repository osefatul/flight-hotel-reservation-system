const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var bookingSchema = new Schema({
    bookingId: { type: String, required: true },
    accountUser: {
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
    },
    bookedUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDetail",
    },
    flight: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
    },
    departureDate:{
        type: Date
    }
});

module.exports = {Booking: mongoose.model("Booking", bookingSchema)};