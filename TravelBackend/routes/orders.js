const router = require("express").Router();

const { 
    newOrder, 
    getAllOrders, 
    getAnOrder, 
    deleteAnOrder, 
    updateAnOrder, 
    getOrdersStats, 
    getOrdersRevenueStats 
} = require("../controllers/orders");

router.post("/", newOrder );
router.get("/stats", getOrdersStats)
router.get("/revenue", getOrdersRevenueStats)
router.get("/", getAllOrders)
router.get("/:id", getAnOrder)
router.delete("/deleteAnOrder/:id", deleteAnOrder);
router.patch("/updateAFlight/:id", updateAnOrder)
// router.get("/monthlyIncome", monthlyIncome);


module.exports = router;