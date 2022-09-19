import React, { useState } from 'react'
import {
    Button,
    Alert,
    Card,
    Modal,
    Breadcrumb,
    Spinner,
} from "react-bootstrap";
import CopyRightMark from '../../../components/CopyRightMark';
import Navbar from '../../../components/Navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const cities = [
    { city: "", code: "" },
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
    const [show, setShow] = useState(false);
    const [swap, setSwap] = useState(false);
    const [from, setFrom] = useState({city:"", code:""});
    const [to, setTo] = useState({city:"", code:""});
    const [date, setDate] = useState("");
    const [loading, setLoading] = useState(false)

    const [value, setValue] = React.useState(cities[0].city);
    const [inputValue, setInputValue] = React.useState('');





const handleSubmit = (e) => {
    e.preventDefault()
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
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="To" />}
                                    />
                            </div>

                            ) : (

                            // <div className='space-x-3 flex items-center justify-start w-[50%] bg-slate-200 px-2 '>
                            //     <label htmlFor="to">To</label>
                            //     <input className='w-full bg-slate-200 !border-0 !outline-0' type="text" />
                            // </div>

                            <div className=''>
                                <Autocomplete
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
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
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                    inputValue={inputValue}
                                    onInputChange={(event, newInputValue) => {
                                        setInputValue(newInputValue);
                                    }}
                                    id="controllable-states-demo"
                                    options={cities.map(option => option.city)}
                                    // sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="To" />}
                                    />
                                </div>

                            ) : (
                                <div className=''>

                                    <Autocomplete
                                        value={value}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                        inputValue={inputValue}
                                        onInputChange={(event, newInputValue) => {
                                            setInputValue(newInputValue);
                                        }}
                                        id="controllable-states-demo"
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
                            id="date
                            // label="Journey date
                            defaultValue={Date.now()}
                            // component={CustomInput}
                            />
                        </div>

                        <button variant="primary" type="submit" className="flex items-center justify-center bg-green-800 text-white w-full ">
                            {loading ? (
                            <Spinner animation="border" size="sm" />
                            ) : null}{" "}
                            Search
                        </button>
                    </form>

                </div>
            </div>



             {/* Right Side */}
            <div className='w-[40%] flex flex-col space-y-4 text-white'>
                
                {/* <div>
                    <h1 >Search Flight</h1>
                </div>
                <div>
                        <form onSubmit={handleSubmit()}>
                        <div>
                            {swap ? (
                            <div>
                                <label htmlFor="from">From</label>
                                <input type="text" />
                            </div>
                            ) : (
                            <div>
                                <label htmlFor="to">To</label>
                                <input type="text" />
                            </div>
                            )}
                        </div>

                        <Button
                        className="bg-white"
                            style={{
                            textAlignLast: "center",
                            width: "100%",
                            marginBottom: "1rem",
                            marginTop: "1rem",
                            }}
                            onClick={() => this.handleSwap()}
                        >
                            <b>↑↓</b>
                        </Button>
                        
                        <div>
                            {!swap ? (
                            <div>
                                <label htmlFor="to">To</label>
                                <input type="text" />
                            </div>
                            ) : (
                            <div>
                                    <label htmlFor="from">From</label>
                                    <input type="text" />
                            </div>
                            )}
                        </div>

                        <div>
                            <div
                            name="date"
                            type="date"
                            id="date"
                            // label="Journey date
                            // defaultValue={Date.now()}
                            // component={CustomInput}
                            ></input>
                        </div>

                        <Button variant="primary" type="submit">
                            {loading ? (
                            <Spinner animation="border" size="sm" />
                            ) : null}{" "}
                            Search
                        </Button>
                        </form>

                </div> */}
            
            </div>

        </div>


        <div className ="bg-black sticky z-50 top-0 ">
            <CopyRightMark  />
        </div>

        
    </div>
);
}

export default TravelHome