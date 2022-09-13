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
    findHotels
} = require("../controllers/room.js");





//CREATE
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);


//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id",verifyToken, verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//FindHotel by room id
router.get("/getHotel/:id", findHotels)

//GET ALL
router.get("/", getRooms);



module.exports = router;