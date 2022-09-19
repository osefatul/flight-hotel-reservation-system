const {Flight} = require("../models/Flight");


const newFlight = async (req, res, next) => {
    try{
        const newFlight = new Flight(req.body);
        await newFlight.save();   
        res.status(200).json({message:"Flight successfully Added !"})
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const getAllFlights = async (req, res, next) => {
    try{
        const allFlights = await Flight.find();
        res.status(200).json(allFlights);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const getAFlight = async (req, res, next) => {
    try{
        const theFlight = await Flight.findById({_id: req.params.id});
        res.status(200).json(theFlight);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const deleteAFlight = async (req, res, next) => {
    try{
        const theFlight = await Flight.findByIdAndDelete({_id: req.params.id});
        res.status(200).json({message: 'flight successfully deleted'});
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}



const updateAFlight = async (req, res, next) => {
    try{
        const theFlight = await Flight.findByIdAndUpdate({_id: req.params.id}, {
            $set: req.body} ,
            { new: true }//return new object
        )
        res.status(200).json(theFlight);
    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


const searchAFlight = async (req, res, next) => {
    try{
        const from = req.body.from;
        const to = req.body.to;
        const startDate = Date.parse(req.body.date);
        const endDate = startDate + 24 * 60 * 60 * 1000;

        const findFlight = await Flight.find({from, to, data:{$gte: startDate, $lt: endDate}})

    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
    }
}


module.exports = {
    newFlight,
    getAllFlights,
    getAFlight,
    deleteAFlight,
    updateAFlight,
    searchAFlight
}