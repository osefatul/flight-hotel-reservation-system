const {User} = require("../models/User.js");
const moment = require("moment");

const updateUser = async (req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
        );
        res.status(200).json("Successfully updated");
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

// Get all users
const getUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err.message });
    }
}


// Get users statistics
const getUsersStats = async (req, res, next) => {
    //normally how you get month in moment: moment().month()
    const previousMonth = 
    moment()//define date...
    .month(moment().month()-1)//get month - this define month(current month - 1 )
    .set("date", 1)// set what day
    .format("YYYY-MM-DD HH:mm:ss")

    try{
        const users = await User.aggregate([

            // Stage1: Filter users based on join date, which is previous month.
            {
                $match: {createdAt: {
                    $gte:new Date(previousMonth)
                    }
                }
            },
            // State2" Create another field named month and get the month of createdAt
            {
                $project: {month: {
                    $month: "$createdAt"
                }
                    
                }
            },
            // State3" return a group where th id would be the month from stage2 and total would be the sum of all $project of the month
            {
                $group:{
                    _id: "$month",
                    total:{$sum:1}
                }
            }
        ])

        res.status(200).json(users)

    }catch(error){
        res.status(404).json({ message: error.message });
    }

}


module.exports = {
    updateUser,
    deleteUser,
    getUser,
    getUsers,
    getCurrentUser,
    getUsersStats
}