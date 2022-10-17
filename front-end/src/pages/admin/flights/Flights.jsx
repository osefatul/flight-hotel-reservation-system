import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Sidebar from '../../../components/adminComponents/components/sidebar/Sidebar';
import Navbar from '../../../components/Navbar';
import { CreatingFlight, FetchingAFlight, UpdatingAFlight } from '../../../features/flightsSlice/flightAction';

function Flights() {
    const initialInfo = {
        airline: undefined, 
        code:undefined,
        from:undefined,
        to:undefined,
        date: undefined,
        fare: undefined
    }

    const {id}  = useParams()
    console.log(id)

    const dispatch =  useDispatch()
    const [info, setInfo] = useState(initialInfo);

    const {flight} = useSelector(state => state.flights)

    const handleChange = (e) =>{
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // console.log(info)
    }


    const handleClick = async (e) => {
    e.preventDefault();
    try{
        await dispatch(UpdatingAFlight(id ,info))

    }catch(e){
        console.log(e)
        }
    }

    useEffect(()=>{
        dispatch(FetchingAFlight(id))
    },[])

    useEffect(()=>{
    setTimeout(()=>{
        // dispatch(EraseRoomMessage())
    },5000)
    },[])



return (

    <div>
    <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
    </div>

    {/* {message.message && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{message.message}</div> } */}
    
    <div className="flex w-full">
        <div className="w-[15%]">
        <Sidebar />
        </div>

        <h1 className=" absolute font-bold text-[18px] top-20 left-24 sm:left-60">Edit Flight</h1>

        <form className="flex w-[85%] items-center justify-center relative sm:pl-20">
        <div className=" w-full sm:w-[50%] flex flex-col space-y-1 justify-center p-10 ">
            
            {/* Inputs */}
            <div className="flex flex-col space-y-2 w-full">

                <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="airline"
                placeholder={flight?.airline}
                onChange={handleChange}/>
                </div>

                <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" 
                placeholder={flight?.code}
                id="code"
                onChange={handleChange} />
                </div>
                
                <div className="text-[12px] w-full ">
                <input type="text" 
                placeholder={flight?.from}
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="from"
                onChange={handleChange} />
                </div>
            
                <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder={flight?.to}
                id="to"
                onChange={handleChange} />
                </div>

                <div className="text-[12px] w-full ">
                <input type="number"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder={`$${flight?.fare}`}
                id="fare"
                onChange={handleChange} />
                </div>

                <div className="text-[12px] w-full ">
                <label htmlFor="date">Contract until:</label>
                <input
                type="date"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="Update contract expiration date"
                id="date"
                onChange={handleChange} />
                </div>


            </div>              
            
            {/* submit button */}
            <div className="flex flex-col items-start w-full ">
            <button  
            onClick={handleClick} 
            className="border border-1 bg-blue-800 mt-4 text-white rounded-sm w-full ">Submit</button>
            </div>

        </div>
        </form>


    </div>

    </div>




    );
}

export default Flights