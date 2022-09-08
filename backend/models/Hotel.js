const mongoose = require("mongoose");

// We are adding virtual, because mongodb "id" along with "_id".
const opts = { toJSON: { virtuals: true } };

const HotelSchema = new mongoose.Schema({
name: {
type: String,
required: true,
},
type: {
type: String,
required: true,
},
city: {
type: String,
required: true,
},
address: {
type: String,
required: true,
},
distance: {
type: String,
required: true,
},
photos: {
type: [String],
},
title: {
type: String,
required: true,
},
desc: {
type: String,
required: true,
},
rating: {
type: Number,
min: 0,
max: 5,
},
rooms: {
type: [String],
},
cheapestPrice: {
type: Number,
required: true,
},
featured: {
type: Boolean,
default: false,
},
}, opts);

module.exports = {Hotel: mongoose.model("Hotel", HotelSchema)}