const router = require("express").Router();

const {newFlight,
    getAllFlights,
    getAFlight,
    deleteAFlight,
    updateAFlight,
    searchAFlight} = require("../controllers/flight.js")

router.post("/", newFlight );
router.get("/", getAllFlights)
router.get("/getAFlight/:id", getAFlight)
router.delete("/deleteAFlight/:id", deleteAFlight);
router.patch("/updateAFlight/:id", updateAFlight)
router.post("/searchAFlight", searchAFlight);



module.exports = router;