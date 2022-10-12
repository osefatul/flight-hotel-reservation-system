import React, { useState } from 'react'
import {
    Spinner,
} from "react-bootstrap";
import CopyRightMark from '../../../components/CopyRightMark';
import Navbar from '../../../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { FetchingAFlight, SearchingFlights } from '../../../features/flightsSlice/flightAction';
import { useLocation, useNavigate } from 'react-router-dom';
import { GiCommercialAirplane } from 'react-icons/gi';




const cities = [
    { city: "Dubai", code: "DB" },
    { city: "Vancouver", code: "YVR" },
    { city: "Toronto", code: "YYZ" },
    { city: "New York", code: "NYK" },
    { city: "Atlanta, Georgia", code: "ATL" },
    { city: "Denver, Colorado", code: "DEN" },
    { city: "Los Angeles", code: "LAX" },
    { city: "Charlotte", code: "CLT" },
    { city: "Orlando", code: "MCO" },
    { city: "Las Vegas", code: "LAS" },
    { city: "Phoenix", code: "PHX" },
    { city: "Madrid", code: "MAD" },
    { city: "Antalya", code: "AYT" },
    { city: "Wuhan", code: "WUH" },
    { city: "Calgary", code: "YYC" },
    { city: "Edmonton", code: "YEG" },
    { city: "Gander", code: "YQX" },
    { city: "Halifax", code: "YHZ" },
    { city: "Moncton", code: "YQM" },
    { city: "Montreal", code: "YUL" },
    { city: "Ottawa", code: "YOW" },
    { city: "Quebec City", code: "YQB" },
    { city: "Winnipeg", code: "YWG" },
];




function TravelHome() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading, error, flights} = useSelector(state => state.flights)

    const [show, setShow] = useState(false);
    const [swap, setSwap] = useState(false);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState();
    const [date, setDate] = useState();



    const handleBooking = async (id)=>{
        await dispatch(FetchingAFlight(id))
        await navigate("/booking", {state: {date}})
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

        if(swap){
            const swapper = from;
            setFrom(to);
            setTo(swapper);
            setSwap(false)
        }

        const formData = {
            from: from,
            to: to,
            date: date
        }
        console.log(formData)

        await dispatch(SearchingFlights(formData))
        await setShow(true)
    };
    
return (
    <div  >


        <div className ="bg-black sticky z-50 top-0 ">
            <Navbar  />
        </div>

        <div className='h-full w-full'>
            <img className="w-full object-cover h-32" src="https://www.wallpapertip.com/wmimgs/9-90685_travel-background-hd.jpg" alt="" />
        </div>


        <div className={`h-[h-main - h-24] pt-10  flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-4 items-center justify-center w-[75%] mx-auto relative overflow-auto`}>


            {/* Left Side */}
            <div className={`w-full flex flex-col space-y-4 items-center  justify-center`}>
            <div className='bg-slate-600 w-[60%] rounded-sm text-white text-xl font-bold px-2 '>
                    <h1 >Search Flight</h1>
                </div>
            
                <div  className={`w-full flex flex-col space-y-4 items-center  justify-center  `}>
                    <form className='w-[60%]  space-y-5' onSubmit={handleSubmit}>

                        <div className=''>
                            {swap ? (

                            <div >
                                <Autocomplete
                                    style={{ height: 30,}}
                                    value={to || ""}
                                    onChange={(event, newValue) => {setTo(newValue)}}
                                    freeSolo
                                    id="to"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params}  size="small" label="To" />}
                                    />
                            </div>

                            ) : (

                            <div className=''>
                                <Autocomplete
                                    style={{ height: 30,}}
                                    value={from || ""}
                                    onChange={(event, newValue) => {
                                        setFrom(newValue)}}
                                    freeSolo
                                    id="from"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300,  }}
                                    renderInput={(params) => <TextField {...params}  size="small" label="From" />}
                                    />
                            </div>
                            
                            )}
                        </div>


                        <button
                            className="bg-blue-700 w-full"
                            onClick={() => setSwap(!swap)}
                            >
                            ↑↓
                        </button>

                    
                        <div>
                            {!swap ? (
                                <div className=''>
                                <Autocomplete
                                style={{ height: 30,}}
                                    value={to || ""}
                                    onChange={(event, newValue) => {
                                        setTo(newValue)
                                        // console.log(to)
                                    }}
                                    freeSolo
                                    id="to"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="To"  size="small" />}
                                    />
                                </div>

                            ) : (
                                <div className=''>

                                    <Autocomplete
                                    style={{ height: 30,}}
                                        value={from || ""}
                                        onChange={(event, newValue) => {
                                            setFrom(newValue)
                                            // console.log(from)
                                        }}
                                        freeSolo
                                        id="from"
                                        options={cities.map(option => option.city)}
                                        // sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params}  size="small" label="From" />}
                                        />
                                </div>
                            )}
                        </div>

                        <div className=''>
                            <input
                            className=" w-full px-2 border"
                            name="date"
                            type="date"
                            id="date"
                            onChange={
                                (e) => {setDate(e.target.value)
                                console.log(new Date (date))}
                            }
                            // component={CustomInput}
                            />
                        </div>

                        <button type="submit" className="flex items-center justify-center bg-green-800 text-white w-full ">
                            {isLoading ? (
                            <Spinner animation="border" size="sm" />
                            ) : null}{" "}
                            Search
                        </button>
                    </form>

                </div>
            </div>


             {/* Right Side */}
            {
                show &&
                <div className='w-full flex flex-col space-y-6 space-y-4 text-black overflow-auto pb-24 sm:pb-0'>

                    <div className='bg-slate-600 rounded-sm text-white text-xl font-bold px-2'>
                        <h1 >Flights</h1>
                    </div>

                    <div className='flex flex-col space-y-5' >
                        {flights?.map(flight => (
                            <div className='border border-slate-400 rounded-sm p-2 '>
                                <div className='text-[10px] text-slate-700 font-bold '>
                                    <p className='border-b border-amber-500 w-max'>
                                    {flight.code}2342
                                    </p>
                                </div>
                                
                                <div className='space-y-3'>
                                    <p className='text-md font-bold'>{flight.airline}</p>
                                    
                                    <div className='flex space-x-3 items-center justify-between text-[12px]'>
                                        <p >{flight.from}</p>

                                        <span>
                                        <GiCommercialAirplane 
                                            className="text-[25px]"
                                            />
                                        </span>

                                        <p>{flight.to}</p>
                                        <p className='font-bold'>${flight.fare}</p>

                                        <button 
                                        className='bg-green-800 p-1 text-white rounded-sm'
                                        onClick={(e) => handleBooking(flight._id)}
                                        >Book now</button>
                                    </div>

                                </div>
                            </div>

                        ))}
                        
                    </div>

                </div> 
            }
        </div>


        <div className ="bg-black sticky z-50 top-0 ">
            <CopyRightMark  />
        </div>

        
    </div>
);
}

export default TravelHome