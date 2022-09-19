const { 
    getUserDetail, 
    deleteUserDetail, 
    replaceUserDetail, 
    addNewUserDetail, 
    getAllUserDetails } = require("../controllers/userDetail");

const router = require("express").Router();


//These routes will only run middleware based on the additional user
router.post("/", addNewUserDetail)
router.get("/:userDetailId", getUserDetail);
router.delete("/:userDetailId", deleteUserDetail );
router.put("/:userDetailId", replaceUserDetail);

//Fetch all additional users have been added based on the logged in user.
router.get("/userId", getAllUserDetails)

module.exports = router;