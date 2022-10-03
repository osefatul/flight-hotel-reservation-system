import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchingBooking } from '../../features/bookingSlice/bookingAction';

function FlightHistory({user}) {
    const dispatch = useDispatch();
    const {isLoading, bookingData} = useSelector(state => state.booking);
    const [data, setData] = useState(bookingData)

    useEffect(()=>{
        dispatch(FetchingBooking(user._id))    
    },[])

    useEffect(()=>{
        setData(bookingData)
    },[bookingData])
    

    
    const columns = [
        { field: "id", headerName: "Booking ID", width: 120, weight:"bold",
        flex: 1,
        renderCell: (params) => {
            return (
                <div className="text-[11px]">
                    {params.row.bookingId }
                </div>
    
            );
        }},
    
        {
        field: "Booked User",
        headerName: "Booked User Details",
        width: 160,
        flex: 1,
        renderCell: (params) => {
            return (
            <div className="text-[11px]">
                {params.row.bookedUser}
            </div>
            );
        },
        },
    
        {
        field: "flight",
        headerName: "Flight ID",
        width: 160,
        flex: 1,
        renderCell: (params) => {
            return (
                <div className='text-[11px]'>
                    {params.row.flight}
                </div>
            );
        },
        },

        {
            field: "Date",
            headerName: "Departure",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className='text-[11px]'>
                    {new Date(params.row.departureDate).toDateString()}
                    </div>
                );
            },
            },
        {
            field: "bookingDate",
            headerName: "Booking Date",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="text-green-600 text-[11px]">
                    {new Date(params.row.openAt).toDateString()}
                    </div>
                );
            },
            },
    ]


return (
        <div className="w-full h-full pt-4">


            {isLoading ? "Loading..." : (
                    <div className=" w-full h-full text-[12px]">
                        <DataGrid
                        sx={{
                        border: 0, // also tried setting to none 
                        borderRadius: 2,
                        minWidth: 300,
                        }}
                        getRowId = {(row) => row._id}
                        rows={data}
                        disableSelectionOnClick
                        columns={columns}
                        autoPageSize={true}
                        checkboxSelection
                        />
                    </div>
            )}
    </div>
)
}

export default FlightHistory