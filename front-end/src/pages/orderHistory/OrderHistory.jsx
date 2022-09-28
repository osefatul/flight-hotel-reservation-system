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
    const {user} = useSelector(state => state.login);
return (
    <div className='relative'>
            
    <div className ="bg-black sticky z-50 top-0 ">
        <Navbar  />
    </div>


    <div className="h-main flex flex-col items-start
    justify-start pt-4 w-[75%] mx-auto relative">

        <div className=' w-full pb-3'>
            <h1 className=' text-lg font-bold border-b border-slate-300'>Order History</h1>
        </div>
        <div className='h-full w-full space-y-3'>
            <FlightHistory user={user}/>
            <ReservedRoomsByUser user={user}/>
        </div>
    </div>
</div>
)
}

export default OrderHistory