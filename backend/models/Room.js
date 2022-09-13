const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
{
title: {
    type: String,
    required: true,
},

hotelName: {
    type: String,
    required: true,
},

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
roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}, reservedByUser: {type: String} }],
},
{ timestamps: true }
);

module.exports = {
    Room: mongoose.model("Room", RoomSchema)
};