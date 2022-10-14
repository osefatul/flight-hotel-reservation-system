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
    getAReservedRoomByUser,
    UpdateReservedRoom,
    getAllReservedRoom,
    getAReservedRoomByHotelId
} = require("../controllers/room.js");





//CREATE a room
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);
//UPDATE a room
router.put("/:id", verifyAdmin, updateRoom);
//Update a room/s availability date.
router.put("/availability/:id", updateRoomAvailability);
//DELETE a room
router.delete("/:id",verifyToken, verifyAdmin, deleteRoom);


//GET Reserved rooms
router.get("/reservedRooms", getAllReservedRoom);
router.get("/reservedRooms/:id", getAReservedRoomByUser);
router.get("/reservedRoomsByHotel/:id", getAReservedRoomByHotelId);
//Update Reserved rooms
router.put("/unreservedRooms/:id", UpdateReservedRoom);


//GET a room
router.get("/:id", getRoom);
//GET ALL
router.get("/", getRooms);
//FindHotel through room id
router.get("/getHotel/:id", findHotels)




module.exports = router;