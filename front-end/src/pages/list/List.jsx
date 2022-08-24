import React from 'react'
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/SearchItem';


function List() {
    const location = useLocation();
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

        <div className="flex justify-center mt-4">
            <div className="w-full flex space-x-3 relative">

                <div className="bg-[#febb02] p-2 rounded-sm sticky z-50 h-max top-10">
                    <h1 className="text-[##555] mb-3 font-md">Search</h1>

                    <div className="flex flex-col space-y-4 mb-3">
                        <label className='text-sm'>Destination</label>
                        <input className="!border-none !outline-none h-5 bg-yellow-400 rounded-md pl-1" placeholder={destination} type="text" />
                    </div>

                    <div className="flex flex-col space-y-4 mb-3">
                        <label>Check-in Date</label>
                        <span onClick={() => setOpenDate(!openDate)}>{`${format(
                            date[0].startDate,
                            "MM/dd/yyyy"
                        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                        {openDate && (
                            <DateRange
                            onChange={(item) => setDate([item.selection])}
                            minDate={new Date()}
                            ranges={date}
                            />
                        )}
                    </div>

                    <div className="flex flex-col space-y-4 mb-3">
                        <label>Options</label>
                        
                        <div className="p-2">

                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">
                                    Min price <small>per night</small>
                                </span>
                                <input type="number" className="w-10" />
                            </div>
                            
                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">
                                    Max price <small>per night</small>
                                </span>
                                <input type="number" className="w-10" />
                            </div>

                            <div className="flex justify-between text-[#555] text-sm mb-2">
                                <span className="lsOptionText">Adult</span>
                                <input
                                    type="number"
                                    min={1}
                                    className="w-10"
                                    placeholder={options.adult}
                                />
                            </div>
                            
                            <div className="flex justify-between text-[#555] text-sm mb-2">

                                <span className="lsOptionText">Children</span>
                                <input
                                    type="number"
                                    min={0}
                                    className="w-10"
                                    placeholder={options.children}
                                />
                            </div>
                            
                            <div className="flex justify-between text-[#555] text-sm mb-2">

                                <span className="lsOptionText">Room</span>
                                <input
                                type="number"
                                min={1}
                                className="w-10"
                                placeholder={options.room}
                            />
                            </div>
                        </div>
                    </div>
                    
                    <button>Search</button>

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