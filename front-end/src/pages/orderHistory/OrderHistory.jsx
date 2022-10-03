import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import Navbar from '../../components/Navbar';
import FlightHistory from '../../components/Orderhistory/FlightHistory';
import ReservedRoomsByUser from '../../components/Orderhistory/ReservedRoomsByUser';
import { FetchingBooking } from '../../features/bookingSlice/bookingAction';
import { fetchingReservedRoomsByUser } from '../../features/roomSlice/roomAction';

function OrderHistory() {
    const [tabSelected, setTabSelected] = useState(0)
    const {user} = useSelector(state => state.login);

    const tabs = [
        {id:0, tab:"Booked & Reserved History"},
        {id:1, tab:"Reserved Rooms Details"}
    ]

    const handleSubmit = (e,index)=>{
        setTabSelected(index);
    }



    return (
    <div className='relative'>
            
    <div className ="bg-black sticky z-50 top-0 ">
        <Navbar  />
    </div>


    <div className="h-main flex flex-col items-start
    justify-start pt-4 w-[75%] mx-auto relative">

        <div className=' w-full pb-3'>
            {/* <h1 className=' text-lg font-bold border-b border-slate-300'>Orders History</h1> */}
            <div className='flex space-x-3 w-max'>
                {
                    tabs.map((tab, i) =>(
                        <h1 className={`${tabSelected === i ?  "border-b-2 border-amber-400 font-bold text-black" : "text-slate-400" } pt-4 cursor-pointer `}
                        onClick={(e) => handleSubmit(e,i)}
                        >{tab.tab}</h1>
                    ))
                }
            </div>
        </div>

        <div className='h-full w-full space-y-3'>
            {tabSelected === 0 ?
            <FlightHistory user={user}/>:
            <ReservedRoomsByUser user={user}/>
            }

            {/* <FlightHistory user={user}/>: */}

        </div>
    </div>
</div>
)
}

export default OrderHistory