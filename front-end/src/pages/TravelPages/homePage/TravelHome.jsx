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




const cities = [
    { city: "", code: "" },
    { city: "Dubai", code: "" },
    { city: "Vancouver", code: "" },
    { city: "Mumbai", code: "BOM" },
    { city: "Bangalore", code: "BLR" },
    { city: "Chennai", code: "MAA" },
    { city: "Kolkata", code: "CCU" },
    { city: "Lucknow", code: "LKO" },
    { city: "Amritsar", code: "ATQ" },
    { city: "Vishakhapatnam", code: "VTZ" },
    { city: "Kannur", code: "CNN" },
    { city: "Raipur", code: "RPR" },
    { city: "Surat", code: "STV" },
    { city: "Indore", code: "IDR" },
    { city: "Kochi", code: "COK" },
    { city: "Ahmedabad", code: "AMD" },
    { city: "Delhi", code: "DEL" },
    { city: "Goa", code: "GOI" },
    { city: "Pune", code: "PNQ" },
    { city: "Thiruvananthapuram", code: "TRV" },
    { city: "Coimbatore", code: "CJB" },
    { city: "Calicut", code: "CCJ" },
    { city: "Bhubaneshwar", code: "BBI" },
    { city: "Guwahati", code: "GAU" },
    { city: "Varanasi", code: "VNS" },
    { city: "Hyderabad", code: "HYD" },
    { city: "Tiruchirapalli", code: "TRZ" },
    { city: "Nagpur", code: "NAG" },
    { city: "Srinagar", code: "SXR" },
    { city: "Imphal", code: "IMF" },
    { city: "Jaipur", code: "JAI" },
    { city: "Madurai", code: "IXM" },
    { city: "Siliguri", code: "IXB" },
    { city: "Patna", code: "PAT" },
    { city: "Mangalore", code: "IXE" },
    { city: "Chandigarh", code: "IXC" },
    { city: "Andaman & Nicobar", code: "IXZ" },
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
    <div className="">

        <div className ="bg-black sticky z-50 top-0 ">
            <Navbar  />
        </div>

        <div className="h-main flex sm:flex-row space-x-10 items-center justify-center  w-[75%] mx-auto relative">

            {/* Left Side */}
            <div className='w-full flex flex-col space-y-4 '>
                <div className='text-xl font-bold'>
                    <h1 >Search Flight</h1>
                </div>
            
                <div  className="w-full ">
                    <form className='w-[60%] space-y-5' onSubmit={handleSubmit}>

                        <div className=''>
                            {swap ? (

                            <div >
                                <Autocomplete
                                    value={to || ""}
                                    onChange={(event, newValue) => {
                                        setTo(newValue)
                                        console.log(to)
                                    }}
                                    freeSolo
                                    id="to"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="To" />}
                                    />
                            </div>

                            ) : (

                            <div className=''>
                                <Autocomplete
                                    value={from || ""}
                                    onChange={(event, newValue) => {
                                        setFrom(newValue)
                                        console.log(from)
                                    }}
                                    freeSolo
                                    id="from"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300,  }}
                                    renderInput={(params) => <TextField {...params} label="From" />}
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
                                    value={to || ""}
                                    onChange={(event, newValue) => {
                                        setTo(newValue)
                                        console.log(to)
                                    }}
                                    freeSolo
                                    id="to"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="To" />}
                                    />
                                </div>

                            ) : (
                                <div className=''>

                                    <Autocomplete
                                        value={from || ""}
                                        onChange={(event, newValue) => {
                                            setFrom(newValue)
                                            console.log(from)
                                        }}
                                        freeSolo
                                        id="from"
                                        options={cities.map(option => option.city)}
                                        // sx={{ width: 300 }}
                                        renderInput={(params) => <TextField {...params} label="From" />}
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
                <div className='w-full flex flex-col space-y-4 text-black'>

                    <div className='bg-slate-600 rounded-sm text-white text-xl font-bold px-2'>
                        <h1 >Flights</h1>
                    </div>
                    <div className='flex flex-col space-y-4' >
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
                                            <svg
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                                height="25"
                                                width="25"
                                                image-rendering="optimizeQuality"
                                                shape-rendering="geometricPrecision"
                                                text-rendering="geometricPrecision"
                                                viewBox="0 0 500 500"
                                                xmlns="http://www.w3.org/2000/svg"
                                                >
                                                <g stroke="#222">
                                                    <line
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-width="30"
                                                    x1="300"
                                                    x2="55"
                                                    y1="390"
                                                    y2="390"
                                                    />
                                                    <path
                                                    d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                                    fill="#222"
                                                    stroke-linejoin="round"
                                                    stroke-width="10"
                                                    />
                                                </g>
                                            </svg>
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