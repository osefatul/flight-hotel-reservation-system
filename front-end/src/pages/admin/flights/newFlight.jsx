import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../../components/adminComponents/components/sidebar/Sidebar';
import Navbar from '../../../components/Navbar';
import { CreatingFlight } from '../../../features/flightsSlice/flightAction';

function NewFlight() {
    const initialInfo = {
        airline: undefined, 
        code:undefined,
        from:undefined,
        to:undefined,
        date: undefined,
        fare: undefined
    }
    const dispatch =  useDispatch()
    const [info, setInfo] = useState(initialInfo);
    const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
    const {flight} = useSelector(state => state.flights)

    const handleChange = (e) =>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(info)
    }


    const handleClick = async (e) => {
    e.preventDefault();
    try{
        dispatch(CreatingFlight(info))
        setMessageAddedAlert(true);
    }catch(e){
        console.log(e)
        }
    }

    useEffect(()=>{
    setTimeout(()=>{
        setMessageAddedAlert(false);
    },5000)
    },[ MessageAddedAlert])




return (

    <div>
    <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
    </div>

    {MessageAddedAlert && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{flight.message}</div> }
    
    <div className="flex w-full">
        <div className="w-[15%]">
        <Sidebar />
        </div>

        <h1 className=" absolute font-bold text-[18px] top-20 left-60">Create New Flight</h1>

        <form className="flex w-[85%] items-center justify-center relative pl-20">
        <div className=" w-[50%] flex flex-col space-y-1 justify-center p-10 ">
            
            {/* Inputs */}
            <div className="flex flex-col space-y-2 w-full">

                <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="airline"
                placeholder="Airline Name"
                onChange={handleChange}/>
                </div>

                <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" 
                placeholder="Code"
                id="code"
                onChange={handleChange} />
                </div>
                
                <div className="text-[12px] w-full ">
                <input type="text" placeholder="From"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="from"
                onChange={handleChange} />
                </div>
            
                <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="To"
                id="to"
                onChange={handleChange} />
                </div>

                <div className="text-[12px] w-full ">
                <input type="number"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="Fare in $"
                id="fare"
                onChange={handleChange} />
                </div>

                <div className="text-[12px] w-full ">
                <label htmlFor="date">Contract until:</label>
                <input
                type="date"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="Contract date"
                id="date"
                onChange={handleChange} />
                </div>


            </div>              
            
            {/* submit button */}
            <div className="flex flex-col items-start w-full ">
            <button  
            onClick={handleClick} 
            className="border border-1 bg-blue-800 mt-4 text-white rounded-sm w-full ">Create</button>
            </div>

        </div>
        </form>


    </div>

    </div>




    );
}

export default NewFlight