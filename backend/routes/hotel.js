const express = require('express');
const router = express.Router();
const {verifyAdmin, verifyToken} =require("../utils/verifyToken.js")

const {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
} = require ("../controllers/hotel.js");


// Admin Users
router.post("/", verifyToken, verifyAdmin, createHotel);
router.put("/:id",verifyToken, verifyAdmin,updateHotel);
router.delete("/:id",verifyToken, verifyAdmin, deleteHotel);


router.get("/hotel/:id", getHotel );
router.get("/", getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;