const {Order} = require("../models/Order") 
const moment = require("moment");


// We don't create new orders, it is triggered by Stripe webhook.
const newOrder = async (req, res, next) => {
    try{
        const newFlight = new Order(req.body);
        await newFlight.save();   
        res.status(200).json({message:"Flight successfully Added !"})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const getAllOrders = async (req, res, next) => {
    try{
        const allOrders = await Order.find();
        res.status(200).json(allOrders);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


//get order based on userId for current user
const getAnOrder = async (req, res, next) => {
    try{
        const theOrder = await Order.find({userId: req.params.id});
        res.status(200).json(theOrder);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const deleteAnOrder = async (req, res, next) => {
    try{
        await Order.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: 'Order successfully deleted'});
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const updateAnOrder = async (req, res, next) => {
    try{
        const theOrder = await Order.findByIdAndUpdate({_id: req.params.id}, {
            $set: req.body} ,
            { new: true }//return new object
        )
        res.status(200).json(theOrder);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



// Get orders statistics
const getOrdersStats = async (req, res, next) => {
    //normally how you get month in moment: moment().month()
    const previousMonth = 
    moment()//define date...
    .month(moment().month()-1)//get month - this define month(current month - 1 )
    .set("date", 1)// set date the first day of the month.
    .format("YYYY-MM-DD HH:mm:ss")

    try{
        const orders = await Order.aggregate([

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

        res.status(200).json(orders)

    }catch(error){
        res.status(404).json({ message: error.message });
    }
}



// Get orders statistics
const getOrdersRevenueStats = async (req, res, next) => {
    //normally how you get month in moment: moment().month()
    const previousMonth = 
    moment()//define date...
    .month(moment().month()-1)//get month - this define month(current month - 1 )
    .set("date", 1)// set date the first day of the month.
    .format("YYYY-MM-DD HH:mm:ss")

    try{
        const revenue = await Order.aggregate([

            // Stage1: Filter users based on join date, which is previous month.
            {
                $match: {createdAt: {
                    $gte:new Date(previousMonth)
                    }
                }
            },
            // State2" Create another field named month and get the month of createdAt
            {
                $project: {
                    month: {$month: "$createdAt"},
                    sales: "$total",
                    
                }
            },
            // State3" return a group where th id would be the month from stage2 and total would be the sum of all $project of the month
            {
                $group:{
                    _id: "$month",
                    total:{$sum: "$sales"}
                }
            }
        ])

        res.status(200).json(revenue)

    }catch(error){
        res.status(404).json({ message: error.message });
    }
}



module.exports = {
    newOrder,
    getAllOrders,
    getAnOrder,
    deleteAnOrder,
    updateAnOrder,
    getOrdersStats,
    getOrdersRevenueStats
    
}