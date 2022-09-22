import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header";
import MailList from "../../components/MailList";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux"

import { useLocation, } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faCircleArrowLeft,
faCircleArrowRight,
faCircleXmark,
faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FetchingAHotel } from '../../features/hotelSlice/hotelAction';
import Reservation from '../../components/Reservation';


function Hotel() {

    const dispatch = useDispatch();
    const location = useLocation();

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    
    const hotelId = location.pathname.split("/")[2];
    const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

    const {hotel} = useSelector(state => state.hotels)
    const {isAuth} = useSelector(state => state.login);
    const from = location.state?.from?.pathname || "/"
    
    
    const {date,
        options
    } = useSelector(state => state.search)
    
    
    function dayDifference(date1, date2) {
        //getTime will convert the date to a milliseconds.
        const timeDiff = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
        return diffDays;
    }
    
    const days = dayDifference(date[0].endDate, date[0].startDate);
    const totalPrice = days * hotel.cheapestPrice * options.room

    const handleReserve = () => {
            setOpenModal(true);
    }

    useEffect(()=>{
        if(isAuth) dispatch(FetchingAHotel(hotelId))
    },[])


    const handleOpen = (i) => {
        setSlideNumber(i);
        setOpen(true);
    };

        
    const handleMove = (direction) => {
        let newSlideNumber;
    
        if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
        } else {
        newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
        }
        setSlideNumber(newSlideNumber)
    };




    return (
    <div className='relative'>

        {open && (
                <div className="fixed h-screen w-screen left-0 bg-black bgShadow bg-opacity-80  z-50 flex items-center justify-center">
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="fixed top-[35%] sm:top-10 right-8 sm:right-40 text-lg text-gray-200 cursor-pointer w-6 h-6 "
                    onClick={() => setOpen(false)}
                />
                <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="px-0 sm:px-10 text-xl text-gray-200 cursor-pointer"
                    onClick={() => handleMove("l")}
                />
                <div className="w-screen sm:w-full h-full flex items-center justify-center">
                    <img src={hotel.photos[slideNumber]} alt="" className="w-[90%] sm:w-[80%] h-44 sm:h-[80%] rounded-md" />
                </div>
                <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="pr-1 sm:px-10 text-xl text-gray-200 cursor-pointer"
                    onClick={() => handleMove("r")}
                />
                </div>
            )}


        <div className='bg-black text-white'>
            <Navbar />
            <Header type="list" />
        </div>


        <div className="flex flex-col space-y-2 items-center px-5 sm:px-0 w-full sm:w-[75%] mx-auto mt-4 ">
            <div className="w-full flex flex-col space-y-2 relative ">
                {/* <button className="absolute bg-[#0071c2] text-white p-2 !border-none top-2 sm:top-4 cursor-pointer font-bold rounded-sm right-0 hover:text-amber-500 text-[9px] sm:text-[15px]  " onClick="">Reserve or Book Now!</button> */}

                <h1 className="text-[18px] sm:text-2xl font-bold">{hotel.name}</h1>   
                <div className="text-[10px] sm:text-[13px] flex items-center space-x-2">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>{hotel.address}</span>
                </div>

                <span className="text-[#0071c2] font-bold text-[12px] sm:text-[15px]">
                    Excellent location – {hotel.distance}m from center
                </span>

                <span className="text-[#008009] font-bold text-[12px] sm:text-[15px]">
                    Book a stay over ${hotel.cheapestPrice} at this property and get a free airport taxi
                </span>


                <div className="flex flex-wrap justify-between">
                    {hotel?.photos?.map((photo, i) => (
                        <div className="w-[33%]" key={i}>
                        <img
                            onClick={() => handleOpen(i)}
                            src={photo}
                            alt=""
                            className="w-full cursor-pointer object-cover rounded-sm "
                        />
                        </div>
                    ))}
                </div>

                <div className="flex sm:flex-row flex-col justify-between space-x-2 w-full">

                    <div className="sm:w-3/4 w-full">
                        <h1 className="text-[18px] sm:text-2xl font-bold">Stay in the {hotel.title}</h1>
                        <p className="text-[12px] sm:text-[15px] text-md mt-5">
                            {hotel.desc}
                        </p>
                    </div>

                    <div className="bg-[#ebf3ff] p-2 flex flex-col space-y-3 w-full sm:w-1/4 mt-4">
                        <h1 className="text-[12px] sm:text-[15px] text-md text-[#555]">Perfect for a {days}-night stay!</h1>
                        <span className="text-[12px] sm:text-[15px] text-md">
                            Located in the real heart of Krakow, this property has an
                            excellent location score of 9.8!
                        </span >
                        <h2 className="font-semibold">
                            <b>${totalPrice}</b> ({days}  nights)
                        </h2>
                        <button 
                        onClick={handleReserve}
                        className='!borderNone p-2 bg-[#0071c2] text-white font-bold rounded-sm cursor-pointer hover:text-amber-500 '>Reserve or Book Now!</button>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div className=" w-full">
                <MailList />
            </div>
            <Footer />
        </div>

        <div className=''>
        {openModal && <Reservation setOpenModal={setOpenModal} hotelId = {hotelId} totalPrice={totalPrice}/>}
        </div>



    </div>
    );
}

export default Hotel