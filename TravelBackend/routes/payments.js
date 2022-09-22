const { StripePayment } = require("../controllers/payments");
const router = require("express").Router();


router.post("/", StripePayment)


module.exports = router