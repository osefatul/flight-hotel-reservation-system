const {Order} = require("../models/Order") 



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


const getAnOrder = async (req, res, next) => {
    try{
        const theOrder = await Order.findById({_id: req.params.id});
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



module.exports = {
    newOrder,
    getAllOrders,
    getAnOrder,
    deleteAnOrder,
    updateAnOrder,
    
}