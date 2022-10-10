import { useLocation } from "react-router-dom";
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux"
import { fetchingHotelsByDestination } from "../features/hotelSlice/hotelAction";

function ListPageSidebar({destination, setDestination}) {

    // this will get states passed to Navigate
    const location = useLocation();
    const dispatch = useDispatch();
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState(location.state.date);
    const [options, setOptions] = useState(location.state.options);

    const [min, setMin] = useState(10);
    const [max, setMax] = useState(400);


    const refetch =  () => {
        dispatch(fetchingHotelsByDestination(destination, min, max))
    }

// bg-[#febb02]

return (
<div>
    <div 
        className=" bg-slate-900 text-[12px] p-2 text-white rounded-md space-y-4 ">
        <div className='space-y-1 text-[12px]'>

            <h1 className="text-[##555] text-sm font-bold">Search</h1>
            <div className="flex flex-col space-y-1">
                <label className=''>Destination</label>
                <input className="!border-none !outline-none placeholder:text-black h-5 bg-slate-100 rounded-md pl-1" 
                placeholder={destination} 
                onChange = {e => setDestination(e.target.value)}
                type="text" />
            </div>

            <div className="flex flex-col space-y-1 relative">
                <label className=''>Check-in Date</label>
                <div 
                onClick={()=> setOpenDate(!openDate)}
                className=" h-6 bg-slate-100 rounded-md p-2 flex items-center justify-start space-x-1 cursor-pointer text-black">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="placeholder:text-black text-black">
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
                <label className=''>Check-out Date</label>

                <div
                    onClick={()=> setOpenDate(!openDate)}
                    className=" h-6 bg-slate-100 rounded-md p-2 flex items-center justify-start space-x-1 cursor-pointer text-black">

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



        <div className="flex flex-col space-y-1 mb-2 text-[12px] text-[#555]">
            <label className='font-bold text-white '>Options</label>
            
            <div className="p-2">
                <div className="flex justify-between text-white text-[12px] mb-2 space-x-2">
                    <span className="lsOptionText">
                        Min price/night
                    </span>
                    <input 
                    type="number"
                    onChange = {e=> setMin(e.target.value)}
                    className="w-10 h-5  pl-1 rounded-sm text-[9px] placeholder:text-black text-black"
                    />
                </div>
                
                <div className="flex justify-between text-[12px] mb-2 text-white">
                    <span className="lsOptionText">
                        Max price/night
                    </span>
                    <input 
                    type="number"
                    onChange = {e => setMax(e.target.value)}
                    className="w-10 h-5 pl-1 rounded-sm text-[9px] placeholder:text-black text-black"
                    />
                </div>

                <div className="flex justify-between text-[12px] mb-2 text-white">
                    <span className="lsOptionText">Adult</span>
                    <input
                    type="number"
                    min={1}
                    className="w-8 pl-1 rounded-sm placeholder:text-black text-black"
                    placeholder={options.adult}
                    />
                </div>
                
                <div className="flex justify-between text-[12px] mb-2 text-white">
                    <span className="lsOptionText">Children</span>
                    <input
                    type="number"
                    min={0}
                    className="w-8 pl-1 rounded-sm placeholder:text-black text-black"
                    placeholder={options.children}
                    />
                </div>
                
                <div className="flex justify-between  text-[12px] mb-2 text-white">
                    <span className="lsOptionText">Room</span>
                    <input
                    type="number"
                    min={1}
                    className="w-8 pl-1 rounded-sm placeholder:text-black text-black"
                    placeholder={options.room}
                />
                </div>
            </div>
        </div>

        <button className='w-full flex items-center justify-center bg-[#febb02] font-bold text-black rounded-sm' onClick={refetch}>Search</button>
    </div>
</div>
)
}

export default ListPageSidebar