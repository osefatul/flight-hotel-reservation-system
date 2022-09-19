const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema ({
    airline: {
        type: String,
        required: true
    },
    code:{
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
    fare: {
        type:Number,
        required: true,
    }
})

module.exports = {Flight: mongoose.model("Flight", flightSchema)}