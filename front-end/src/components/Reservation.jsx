import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchingHotelRooms } from '../features/hotelSlice/hotelAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { updatingRoomAvailability } from '../features/roomSlice/roomAction';
import axios from "axios"

function Reservation({setOpenModal, hotelId}) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedRooms, setSelectedRooms] = useState([]);
    const {date} = useSelector(state => state.search)
    const {hotelRoomsDetails, hotel} = useSelector(state => state.hotels)


    const getDatesInRange = (startDate, endDate) => {
        const start = new Date(startDate); //make an object of date
        const end = new Date (endDate);
        const date = new Date(start.getTime()); // timestamps of the dates.

        const dates = [];

        //we want to store all dates in an array. using loops, if the date is smaller or equal to end date.
        while (date <= end){
            dates.push (new Date(date).getTime()); //push current date into the array
            date.setDate(date.getDate() + 1); //Change date to next day
        }
        return dates;
    }

    const allDates = getDatesInRange(date[0].startDate, date[0].endDate);


    //find if dates are available in the unavailableDates.
    const isAvailable = (roomNumber) => {

        //Some: at least one unavailable date is included in the requested dates range..
        const isFound = roomNumber.unavailableDates.some((date) =>
        allDates.includes(new Date(date).getTime())
        );
        /*if the unavailableDates are found in the allDates array then room is not available and value will be "true"
        Thats why we make it "false" so it shows not available */
        return !isFound;
    };



    const handleSelect = (e) => {
        const checked = e.target.checked;
        const value = e.target.value;
        setSelectedRooms(
        checked
            ? [...selectedRooms, value]
            : selectedRooms.filter((item) => item !== value)
        );
    };


    const handleClick = async () => {
        try {
            await Promise.all(
                selectedRooms.map((roomId) => {
                return dispatch(updatingRoomAvailability({roomId, dates:allDates}))

            })
        );
                setOpenModal(false);
                // navigate("/");
        } catch (err) {}
    };


    useEffect(()=>{
        dispatch(fetchingHotelRooms(hotelId))
    },[])



    return (
    <div className="text-black fixed top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-black  bg-opacity-70 ">
        
        <div className='h-max w-max sm:w-1/3 bg-slate-100 flex flex-col space-y-4 px-10 py-8 relative'>
            
            <div className="absolute -top-2 -right-4 w-12 flex items-center justify-center cursor-pointer">
                <FontAwesomeIcon
                icon={faCircleXmark}
                className="h-6"
                onClick={() => setOpenModal(false)}
                />
            </div>

            <h1 className='font-bold'>Select your rooms:</h1>

            {hotelRoomsDetails.map(item => (
                <div className="flex justify-between items-center space-x-10 sm:space-x-6 md: space-x-2" key={item._id}>

                    <div className="text-[12px] sm:text-[14px]">
                        <div className="rTitle">{item.title}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">
                            Max people: <b>{item.maxPeople}</b>
                        </div>
                        <div className="font-bold text-[16px]">{item.price}</div>
                    </div>

                    <div className="flex space-x-2">
                        {item.roomNumbers.map((roomNumber) => (
                            <div className="flex flex-col text-[10px]">
                                <label>{roomNumber.number}</label>
                                <input
                                    type="checkbox"
                                    value={roomNumber._id}
                                    onChange={handleSelect}
                                    // checked= {!isAvailable(roomNumber)}//if the isAvailable === false, or use below disabled method
                                    disabled={!isAvailable(roomNumber)}//if the isAvailable === false,
                                />
                        </div>
                        ))}
                    </div>
            </div>
            ))}

            <button onClick={handleClick} className="bg-[#0071c2] text-white p-2 font-bold rounded-sm">
                Reserve Now!
            </button>


        </div>
    </div>
    )
}

export default Reservation