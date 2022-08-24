import React from 'react'
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/SearchItem';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function List() {
    const location = useLocation();// this will get states passed to Navigate

    const [destination, setDestination] = useState(location.state.destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [options, setOptions] = useState(location.state.options);



    return (
    <div >
        <div className='bg-slate-900 text-white'>
            <Navbar />
            <Header type="list" />
        </div>

        <div className="flex justify-center mt-4 p-2">

            <div className="w-full flex space-x-3">

                <div 
                    className="bg-[#febb02] p-2 rounded-sm sticky z-50 h-max top-10 space-y-6">
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
            
                <div className="listResult">
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