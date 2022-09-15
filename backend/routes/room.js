const express = require('express');
const router = express.Router();
const { verifyAdmin , verifyToken} = require("../utils/verifyToken.js");
const {
    createRoom,
    deleteRoom,
    getRoom,
    getRooms,
    updateRoom,
    updateRoomAvailability,
    findHotels,
    getReservedRoom
} = require("../controllers/room.js");





//CREATE
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);


//UPDATE a room
router.put("/:id", verifyAdmin, updateRoom);

//Update a room/s availability date.
router.put("/availability/:id", updateRoomAvailability);

//DELETE a room
router.delete("/:id",verifyToken, verifyAdmin, deleteRoom);

//GET rooms
router.get("/reservedRooms", getReservedRoom);

//GET a room
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);



//FindHotel through room id
router.get("/getHotel/:id", findHotels)




module.exports = router;