import React from 'react'
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/SearchItem';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBed,
    faCalendarDays,
    faCircleXmark,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";



function List() {
    const [toggle, setToggle] = useState(false);
    const location = useLocation();// this will get states passed to Navigate

    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);



    return (
    <div className='relative'>

        <div className='bg-black text-white sticky z-50 top-0 bg-black '>
            <Navbar />
            <Header type="list" />
        </div>

        <div className="flex justify-center mt-4 w-full sm:w-[75%] sm:mx-auto">
            <div className="w-full flex space-x-5">

                {/* Sticky Sidebar left  */}
                <div 
                    className="bg-[#febb02] p-2 rounded-sm sticky z-50 h-max top-36 space-y-6] hidden sm:flex flex-col">
                    <div className='space-y-3'>

                        <h1 className="text-[##555] text-md font-bold">Search</h1>
                        <div className="flex flex-col space-y-1">
                            <label className='text-sm'>Destination</label>
                            <input className="!border-none !outline-none h-5 bg-slate-100 rounded-md pl-1" placeholder={destination} type="text" />
                        </div>

                        <div className="flex flex-col space-y-1 relative">
                            <label className='text-sm'>Check-in Date</label>
                            <div 
                            onClick={()=> setOpenDate(!openDate)}
                            className=" h-6 bg-slate-100 rounded-md p-2 flex items-center justify-start space-x-1 cursor-pointer">
                                <FontAwesomeIcon icon={faCalendar} />
                                <span>
                                    {`${format(
                                        date[0].startDate,
                                        "MM/dd/yyyy"
                                        )}`}
                                </span>
                            </div>
                            {openDate && (
                                <DateRange
                                onChange={(item) => setDate([item.selection])}
                                minDate={new Date()}
                                ranges={date}
                                className="date absolute top-[36px] z-10"

                                />
                            )}
                        </div>

                        <div className="flex flex-col space-y-1 relative">
                            <label className='text-sm'>Check-out Date</label>

                            <div
                                onClick={()=> setOpenDate(!openDate)}
                                className=" h-6 bg-slate-100 rounded-md p-2 flex items-center justify-start space-x-1 cursor-pointer">

                                <FontAwesomeIcon icon={faCalendar} />
                                <span>
                                    {`${format(
                                        date[0].endDate,
                                        "MM/dd/yyyy"
                                        )}`}
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col space-y-3 mb-3">
                        <label className='font-bold '>Options</label>
                        
                        <div className="p-2">
                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input 
                                type="number"  
                                className="w-10 pl-1 rounded-sm"
                                />
                            </div>
                            
                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">
                                    Max price <small>per night</small>
                                </span>
                                <input 
                                type="number" 
                                className="w-10 pl-1 rounded-sm"
                                />
                            </div>

                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">Adult</span>
                                <input
                                type="number"
                                min={1}
                                className="w-10 pl-1 rounded-sm"
                                placeholder={options.adult}
                                />
                            </div>
                            
                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">Children</span>
                                <input
                                type="number"
                                min={0}
                                className="w-10 pl-1 rounded-sm"
                                placeholder={options.children}
                                />
                            </div>
                            
                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">Room</span>
                                <input
                                type="number"
                                min={1}
                                className="w-10 pl-1 rounded-sm"
                                placeholder={options.room}
                            />
                            </div>
                        </div>
                    </div>
                    <button className='w-full flex items-center justify-center bg-slate-900 text-white rounded-sm'>Search</button>
                </div>


                {/* Sidebar Icon */}
                <div className=" sm:hidden h-[40px] relative flex items-center justify-end ">

                    {!toggle ? (
                    <FontAwesomeIcon icon={faBars} 
                    className=" text-black hover:text-[#519f8d] cursor-pointer mr-2 sm:mr-8 h-5 w-5"
                    onClick={() => setToggle(!toggle)}
                    />
                    ) : (
                    <motion.div 
                    className=" z-50"
                    >
                    <FontAwesomeIcon icon={faCircleXmark}
                        className="absolute left-40 top-4 w-[25px] h-[25px] cursor-pointer "
                        onClick={() => setToggle(false)}
                    />
                    </motion.div>
                    )}

                    <div
                    className={`fixed top-40 left-0 z-40 h-screen w-[40%] 
                    flex flex-col justify-start items-start ${
                        toggle ? "translate-x-0" : "-translate-x-80"
                    } ease-out duration-700  shadow-2xl`}
                    >
                        <div 
                        className="bg-[#febb02] p-2 rounded-sm space-y-6]">
                        <div className='space-y-3'>

                            <h1 className="text-[##555] text-md font-bold">Search</h1>
                            <div className="flex flex-col space-y-1">
                                <label className='text-sm'>Destination</label>
                                <input className="!border-none !outline-none h-5 bg-slate-100 rounded-md pl-1" placeholder={destination} type="text" />
                            </div>

                            <div className="flex flex-col space-y-1 relative">
                                <label className='text-sm'>Check-in Date</label>
                                <div 
                                onClick={()=> setOpenDate(!openDate)}
                                className=" h-6 bg-slate-100 rounded-md p-2 flex items-center justify-start space-x-1 cursor-pointer">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span>
                                        {`${format(
                                            date[0].startDate,
                                            "MM/dd/yyyy"
                                            )}`}
                                    </span>
                                </div>
                                {openDate && (
                                    <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                    className="date absolute top-[36px] z-10"

                                    />
                                )}
                            </div>

                            <div className="flex flex-col space-y-1 relative">
                                <label className='text-sm'>Check-out Date</label>

                                <div
                                    onClick={()=> setOpenDate(!openDate)}
                                    className=" h-6 bg-slate-100 rounded-md p-2 flex items-center justify-start space-x-1 cursor-pointer">

                                    <FontAwesomeIcon icon={faCalendar} />
                                    <span>
                                        {`${format(
                                            date[0].endDate,
                                            "MM/dd/yyyy"
                                            )}`}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 mb-3">
                            <label className='font-bold '>Options</label>
                            
                            <div className="p-2">
                                <div className="flex justify-between text-[#555] text-sm mb-2">
                                    <span className="lsOptionText">
                                        Min price <small>per night</small>
                                    </span>
                                    <input 
                                    type="number"  
                                    className="w-10 pl-1 rounded-sm"
                                    />
                                </div>
                                
                                <div className="flex justify-between text-[#555] text-sm mb-2">
                                    <span className="lsOptionText">
                                        Max price <small>per night</small>
                                    </span>
                                    <input 
                                    type="number" 
                                    className="w-10 pl-1 rounded-sm"
                                    />
                                </div>

                                <div className="flex justify-between text-[#555] text-sm mb-2">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                    type="number"
                                    min={1}
                                    className="w-10 pl-1 rounded-sm"
                                    placeholder={options.adult}
                                    />
                                </div>
                                
                                <div className="flex justify-between text-[#555] text-sm mb-2">
                                    <span className="lsOptionText">Children</span>
                                    <input
                                    type="number"
                                    min={0}
                                    className="w-10 pl-1 rounded-sm"
                                    placeholder={options.children}
                                    />
                                </div>
                                
                                <div className="flex justify-between text-[#555] text-sm mb-2">
                                    <span className="lsOptionText">Room</span>
                                    <input
                                    type="number"
                                    min={1}
                                    className="w-10 pl-1 rounded-sm"
                                    placeholder={options.room}
                                />
                                </div>
                            </div>
                        </div>
                        <button className='w-full flex items-center justify-center bg-slate-900 text-white rounded-sm'>Search</button>
                            </div>
                        </div>
                    
                </div>


                {/*Right Side  */}
                <div className="">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
            
            </div>
        </div>
    </div>

    )
}

export default List