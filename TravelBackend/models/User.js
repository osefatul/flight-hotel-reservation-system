const mongoose = require("mongoose");

// We are adding virtual, because mongodb "id" along with "_id".
const opts = { toJSON: { virtuals: true } };

const UserSchema = new mongoose.Schema(
{
username: {
    type: String,
    required: true,
    unique: true,
},
firstName: {
    type: String,
    required: true,
    unique: true,
},
lastName: {
    type: String,
    required: true,
    unique: true,
},

birthDate: {
    type: Date,
    required: true,
},

email: {
    type: String,
    required: true,
    unique: true,
},
country: {
    type: String,
    required: true,
},
img: {
    type: String,
},
city: {
    type: String,
    required: true,
},
phone: {
    type: String,
    required: true,
},
password: {
    type: String,
    required: true,
},
flights: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
    },
],
userDetails: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserDetail",
    },
],
isAdmin: {
    type: Boolean,
    default: false,
},
},
{ timestamps: true },

opts);


module.exports = {
    User: mongoose.model("User", UserSchema),
};