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
} = require("../controllers/room.js");





//CREATE
router.post("/:hotelid", verifyToken, verifyAdmin, createRoom);


//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom);

//DELETE
router.delete("/:id/:hotelid",verifyToken, verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getRooms);



module.exports = router;