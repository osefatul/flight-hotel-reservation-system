const {Hotel} = require("../models/Hotel");
const {Room} = require("../models/Room");






const createHotel = async (req, res, next) => {
    const newHotel = new Hotel (req.body);
    const rooms = req.body.rooms
    
    try{
        const savedHotel = await newHotel.save();

        // Push the hotel into the rooms Schema..
        const roomUpdate = await Promise.all(
            rooms.map( async room =>{
            await Room.findByIdAndUpdate({_id:room}, {
                $push: {
                    hotel: {
                        hotelName: savedHotel.name,
                        hotelId: savedHotel._id
                    }
                }
            })
        }))

        res.status(200).json({message: "Successfully Created",});
    }catch(err){
        next(err);
    }
}


const updateHotel = async (req, res, next) => {
    const rooms = req.body.rooms;

    try {

        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }//return new object
        );


        if(rooms){

            // Push the hotel into the rooms Schema..
            const roomUpdate = await Promise.all(
                rooms.map( async room =>{
                    await Room.findByIdAndUpdate({_id:room}, {
                        $push: {
                            hotel: {
                                hotelName: updatedHotel.name,
                                hotelId: updatedHotel._id
                            }
                        }
                    })
                }))
            }
        res.status(200).json({message: "Successfully updated"});
    } catch (err) {
        next(err);
    }
};


const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted.");
    } catch (err) {
        next(err);
    }
};


const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    } catch (err) {
        next(err);
    }
};


const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
        const hotels = await Hotel.find({
        ...others,
        cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
    } catch (err) {
    next(err);
    }
};


const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
        //We are using promise.all because each return has another map of arrays.
    const list = await Promise.all(
        cities.map((city) => {
        return Hotel.countDocuments({ city: city });
        })
    );
    res.status(200).json(list);
    } catch (err) {
    next(err);
    }
};


const countByType = async (req, res, next) => {
    try {
    const hotelCount = await Hotel.countDocuments({ type: "Hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "Apartment" });
    const resortCount = await Hotel.countDocuments({ type: "Resort" });
    const villaCount = await Hotel.countDocuments({ type: "Villa" });
    const cabinCount = await Hotel.countDocuments({ type: "Cabin" });

    res.status(200).json([
        { type: "hotels", count: hotelCount },
        { type: "apartments", count: apartmentCount },
        { type: "resorts", count: resortCount },
        { type: "villas", count: villaCount },
        { type: "cabins", count: cabinCount },
    ]);
    } catch (err) {
    next(err);
    }
};



const getHotelRooms = async (req, res, next) => {
    try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
    hotel.rooms.map((room) => {
        return Room.findById(room);
        })
    );
    res.status(200).json(list)
    } catch (err) {
    next(err);
    }
};






module.exports = {
    countByCity,
    countByType,
    createHotel,
    deleteHotel,
    getHotel,
    getHotelRooms,
    getHotels,
    updateHotel,
}