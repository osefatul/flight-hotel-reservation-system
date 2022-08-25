import React from 'react'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; 
import { useState } from "react";

function Header({type}) {

    const navigate = useNavigate();
    const [destination, setDestination] = useState("");

    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
        },
    ]);


    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });



    const handleOption = (name, operation) => {
        setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
        });
    };
    

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };





    return (
        <div className="px-10 bg-slate-900 text-white flex flex-col py-3 pt-8 w-[80%] mx-auto ">
            
            <div className={type === "list"? "w-full": "space-y-4" }>
        
                <div className="flex justify-between items-center space-x-4">

                    <motion.div className="flex items-center space-x-2 pl-2 cursor-pointer w-full bg-amber-500 text-black rounded-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </motion.div>

                    <motion.div className="flex items-center space-x-2 pl-2 cursor-pointer w-full bg-amber-500 text-black rounded-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Travel</span>
                    </motion.div >
                </div>

                {type !== "list" && (
                <div className='space-y-6'>

                    {/* <div className=''>
                        <h1 className="text-[30px] font-bold">
                        A lifetime of discounts? It's Genius.
                        </h1>
                        <p className="text-[13px] py-2">
                        Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free TSRS account
                        </p>
                    </div> */}

                    <div className='flex justify-between h-[50px] border-y bg-slate-900 border-y-[#febb02] items-center w-full px-2  '>
                        
                        <div className="space-x-2 outline-0 border-0">
                            <FontAwesomeIcon icon={faBed} className="text-slate-400" />
                            <input
                            type="text"
                            placeholder="Where are you going?"
                            className="rounded-sm pl-1 bg-slate-900  !outline-none"
                            onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>
                    
                        <div className="space-x-2 relative">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400" />
                            
                            <span
                            onClick={() => setOpenDate(!openDate)}
                            className="cursor-pointer text-slate-400"
                            >
                                {`${format(date[0].startDate, "MM/dd/yyyy")}
                                to                         
                                ${format(
                                date[0].endDate,
                                "MM/dd/yyyy"
                                )}`}
                            </span>
                            
                            {openDate && (
                            <DateRange
                                editableDateInputs={true}
                                onChange={(item) => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                className="date absolute top-[36px] z-10 -right-16"
                                minDate={new Date()}
                            />
                            )}
                        </div>

                        <div className="space-x-2">
                            <FontAwesomeIcon icon={faPerson} className="text-slate-400" />
                            
                            <span
                                onClick={() => setOpenOptions(!openOptions)}
                                className="cursor-pointer text-slate-400"
                                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}
                            </span>
                            
                            {openOptions && (
                            <div className="absolute z-10 bg-slate-100 rounded-md text-slate-600 p-4 mt-3">
                                <div className="flex w-[200px] justify-between">
                                    <span className="optionText">Adult</span>
                                    <div className="flex items-center space-x-3 text-[12px] text-black">
                                        <button
                                        disabled={options.adult <= 1}
                                        className="w-4 h-4 border border-[#0071c2] text-[#0071c2] cursor-pointer bg-white flex items-center justify-center rounded-sm text-lg"
                                        onClick={() => handleOption("adult", "d")}
                                        >
                                        -
                                        </button>
                                        <span className="optionCounterNumber">
                                        {options.adult}
                                        </span>
                                        <button
                                        className="w-4 h-4 border border-[#0071c2] text-[#0071c2] text-lg cursor-pointer bg-white flex items-center justify-center rounded-sm "
                                        onClick={() => handleOption("adult", "i")}
                                        >
                                        +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex w-[200px] justify-between">
                                    <span className="optionText">Children</span>
                                    <div className="flex items-center space-x-3 text-[12px] text-black">
                                        <button
                                        disabled={options.children <= 0}
                                        className="w-4 h-4 border border-[#0071c2] text-[#0071c2] text-lg cursor-pointer bg-white flex items-center justify-center rounded-sm"

                                        onClick={() => handleOption("children", "d")}
                                        >
                                        -
                                        </button>
                                        <span className="optionCounterNumber">
                                        {options.children}
                                        </span>
                                        <button
                                        className="w-4 h-4 border border-[#0071c2] text-[#0071c2] text-lg cursor-pointer bg-white flex items-center justify-center rounded-sm"
                                        onClick={() => handleOption("children", "i")}
                                        >
                                        +
                                        </button>
                                    </div>
                                </div>

                                <div className="flex w-[200px] justify-between">
                                    <span className="optionText">Room</span>
                                    
                                    <div className="flex items-center justify-center space-x-3 text-[12px] text-black">
                                        <button
                                        disabled={options.room <= 1}
                                        className="w-4 h-4 border border-[#0071c2] text-[#0071c2] text-lg cursor-pointer bg-white flex items-center justify-center rounded-sm"
                                        onClick={() => handleOption("room", "d")}
                                        >
                                        -
                                        </button>
                                        
                                        <span className="">
                                        {options.room}
                                        </span>
                                        
                                        <button
                                        className="w-4 h-4 border border-[#0071c2] text-[#0071c2] text-lg cursor-pointer bg-white flex items-center justify-center rounded-sm"
                                        onClick={() => handleOption("room", "i")}
                                        >
                                        +
                                        </button>
                                    </div>

                                </div>
                            </div>
                            )}
                        </div>

                    <motion.div className="">
                        <button 
                            className="rounded border-y border-yellow-500 px-2 hover:bg-yellow-500 hover:text-black" 
                            onClick={handleSearch}>
                            Search
                        </button>
                    </motion.div>

                    </div>
                </div>)}

            </div>
        </div>
    )
}

export default Header