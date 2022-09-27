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
        setData(bookingData)
        
    },[])



    const columns = [
        { field: "id", headerName: "Booking ID", width: 100, weight:"bold",
        renderCell: (params) => {
            return (
                <div className="text-[12px]">
                    {params.row.bookingId }
                </div>
    
            );
        }},
    
        {
        field: "Booked User",
        headerName: "Booked User Details",
        width: 180,
        flex: 1,
        renderCell: (params) => {
            return (
            <div className="text-[12px]">
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
                <div>
                    {params.row.flight}
                </div>
            );
        },
        },

        {
            field: "Date",
            headerName: "Departure Date",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div>
                    {new Date(params.row.departureDate).toDateString()}
                    </div>
                );
            },
            },
    ]


return (
        <div className="w-full h-[40%]">
            <h1 className=' text-[15px] font-bold '>
                Flight History
            </h1>

            {isLoading ? "Loading..." : (
                    <div className=" w-full h-full">
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