const express = require('express');
const router = express.Router();
const { verifyAdmin, verifyUser,verifyToken } = require("../utils/verifyToken.js");

const {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
} = require("../controllers/user.js");



// Check Authentication
// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.json({message:"hello user, you are logged in", token: req.user})
// })

// Check User
// router.get("/checkuser/:id",verifyToken, verifyUser, (req,res,next)=>{
//     res.send("hello user, you are logged in and you can delete your account")
// })

// Check if Admin
// router.get("/checkadmin/:id",verifyToken, verifyAdmin, (req,res,next)=>{
//     res.json({message:"hello admin, you are logged in", token: req.user})
// })




//UPDATE
router.put("/:id", verifyToken, verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyToken, verifyUser, deleteUser);

//GET
router.get("/:id",verifyToken, verifyUser, getUser);

//GET ALL
router.get("/",verifyToken, verifyAdmin, getUsers);





module.exports = router;