const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
{
title: {
    type: String,
    required: true,
},

hotel: [{ hotelName: {type: String}, hotelId:{type: String}}],

price: {
    type: Number,
    required: true,
},
maxPeople: {
    type: Number,
    required: true,
},
desc: {
    type: String,
    required: true,
},
roomNumbers: [
    { 
    // totalPrice: {type: Number}, 
    // reservedBy: {type: String},
    number: Number,
    unavailableDates: {type: [Date]}, 
},
],

},
{ timestamps: true }
);

module.exports = {
    Room: mongoose.model("Room", RoomSchema)
};