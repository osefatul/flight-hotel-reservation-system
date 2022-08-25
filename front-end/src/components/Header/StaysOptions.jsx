import React from 'react'
import {
    faBars,
    faBed,
    faCalendarDays,
    faCircleXmark,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion"


function StaysOptions() {

    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
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
<div>

    <div className='hidden md:flex justify-between h-[50px] border-y bg-black border-y-[#febb02] items-center w-full px-2  '>

        <div className="space-x-2 ">
            <FontAwesomeIcon icon={faBed} className="text-slate-400" />
            <input
            type="text"
            placeholder="Where are you going?"
            className="rounded-md pl-1 bg-slate-900 !outline-none  placeholder:text-sm"
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
                className="rounded border border-yellow-500 px-2 hover:bg-yellow-500 hover:text-black" 
                onClick={handleSearch}>
                Search
            </button>
        </motion.div>

    </div>


    {/* Sidebar Icons */}
    <div className=" sm:hidden h-[40px] relative flex items-center justify-end ">
        {!toggle ? (
        <FontAwesomeIcon icon={faBars} 
        className=" text-[#dde1e7] hover:text-[#519f8d] cursor-pointer mr-2 sm:mr-8 h-5 w-5"
        onClick={() => setToggle(!toggle)}
        />
        ) : (
        <motion.div 
        className=" z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        >
        <FontAwesomeIcon icon={faCircleXmark}
            className="absolute right-2 w-[20px] h-[20px] cursor-pointer "
            onClick={() => setToggle(false)}
        />
        </motion.div>
        )}


        {/* SIDE BAR */}
        <div
            className={`fixed top-40 right-0 z-40 h-[40vw] w-full 
            flex flex-col justify-center items-center 
            bg-black ${
            toggle ? "translate-x-0" : "translate-x-full"
            } ease-out duration-700  shadow-2xl`}>
                
                <div className='flex flex-col items-center justify-center space-y-3 bg-black mb-6 mr-[10%]'>
                
                <div className="space-x-2 ">
                    <FontAwesomeIcon icon={faBed} className="text-slate-400 " />
                    <input
                    type="text"
                    placeholder="Where are you going?"
                    className="rounded-md pl-1 bg-slate-900 !outline-none  placeholder:text-sm"
                    onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
    
                <div className="space-x-4 ml-1 relative">
                    <FontAwesomeIcon icon={faCalendarDays} className="text-slate-400 " />
                    
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

                <div className="space-x-4 ml-3">
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

                <motion.div className="ml-4">
                    <button 
                        className="rounded border border-yellow-500 px-2 hover:bg-yellow-500 hover:text-black w-56" 
                        onClick={handleSearch}>
                        Search
                    </button>
                </motion.div>

                </div>
        </div>
        
    </div>


</div>
)
}

export default StaysOptions