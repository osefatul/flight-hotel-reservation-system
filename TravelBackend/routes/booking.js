const router = require("express").Router();

const { 
    addNewBooking, 
    getAllBookings, 
    getABooking, 
    cancelBooking, 
    getUserDetailsBooking } = require("../controllers/booking");


router.post ("/", addNewBooking);
router.get("/", getAllBookings)
router.get("/getABooking/:id", getABooking);
router.get("/getUserDetailsBooking/:id", getUserDetailsBooking);
router.delete("/cancelBooking", cancelBooking);

module.exports = router