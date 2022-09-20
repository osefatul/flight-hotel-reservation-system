const {User} = require("../models/User.js");


const updateUser = async (req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
}


const deleteUser = async (req,res,next)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
    } catch (err) {
        next(err);
    }
}

// get user for edit
const getUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

// get current user updated details
const getCurrentUser = async (req,res,next)=>{
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}


const getUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
}


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getCurrentUser
}