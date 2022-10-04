const router = require("express").Router();

const { 
    addNewBooking, 
    getAllBookings, 
    getABooking, 
    cancelBooking, 
    getUserDetailsBooking,
    getBookingsForAccountUser,
    getBookingsBasedOnBookingId} = require("../controllers/booking");


router.post ("/", addNewBooking);
router.get("/", getAllBookings)
router.get("/:id", getBookingsForAccountUser)
router.get("/booking/:id", getBookingsBasedOnBookingId)
router.get("/getABooking/:id", getABooking);
router.get("/getUserDetailsBooking/:id", getUserDetailsBooking);
router.delete("/cancelBooking/:id", cancelBooking);

module.exports = router