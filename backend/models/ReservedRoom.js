const mongoose = require("mongoose");

const ReservedRoomSchema = new mongoose.Schema(
{

roomId: {
type: String,
},

roomNumbers: {
    type: [Number],
},

title: {
    type: String,
},

hotel: {
    type:String
},

totalPrice: {
    type: Number,
},

desc: {
    type: String,
    // required: true,
},

reservedDates: {
    type: [Date]
},


reservedBy: {
    type: String
}

},

{ timestamps: true }
);

module.exports = {
    ReservedRoom: mongoose.model("ReservedRoom", ReservedRoomSchema)
};