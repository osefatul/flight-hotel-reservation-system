const router = require("express").Router();
const { newOrder, getAllOrders, getAnOrder, deleteAnOrder, updateAnOrder } = require("../controllers/orders");


router.post("/", newOrder );
router.get("/", getAllOrders)
router.get("/:id", getAnOrder)
router.delete("/deleteAnOrder/:id", deleteAnOrder);
router.patch("/updateAFlight/:id", updateAnOrder)
// router.get("/monthlyIncome", monthlyIncome);



module.exports = router;