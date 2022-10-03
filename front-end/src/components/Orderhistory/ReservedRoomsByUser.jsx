import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchingReservedRoomsByUser } from '../../features/roomSlice/roomAction';

function ReservedRoomsByUser({user}) {

    const dispatch = useDispatch();
    const {isLoading, reservedRooms} = useSelector(state => state.rooms);
    const [roomData, setRoomData] = useState(reservedRooms)



    useEffect(()=>{
        dispatch(fetchingReservedRoomsByUser(user._id))
        setRoomData(reservedRooms)
    },[])

    useEffect(()=>{
    setRoomData(reservedRooms)
    },[reservedRooms])
    

    const columns = [
        {
            field: "hotel",
            headerName: "Hotel Name",
            width: 150,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className='tex-[11px]'>
                        {params.row.hotel[0].hotelName}
                    </div>
                );
            },
            },
    
        { field: "roomId", headerName: "Room ID", width: 150, weight:"bold",
        flex: 1,
        renderCell: (params) => {
            return (
                <div className="text-[11px]">
                    {params.row.roomId.slice(0,10)}
                </div>
            );
        }},
    
        {
        field: "roomNumbers",
        headerName: "Room No",
        width: 130,
        flex: 1,
        renderCell: (params) => {
            return (
            <div>
                <div className="text-[11px] flex space-x-2 font-bold">
                {params.row.roomNumbers.map(roomNumber => roomNumber)}
                </div>
            </div>
            );
        },
        },
        {
            field: "checkIn",
            headerName: "Check In",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className='text-green-600 text-[11px]'>
                    {new Date(params.row.reservedDates[0]).toDateString()}
                    </div>
                );
            },
        },
        {
            field: "checkOut",
            headerName: "Check Out",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className='text-red-600 text-[11px]'>
                    {new Date(params.row.reservedDates[params.row.reservedDates.length -1]).toDateString()}
                    </div>
                );
            },
        },
        {
            field: "ReservationDate",
            headerName: "Reservation Date",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className='text-[11px]'>
                    {new Date(params.row.createdAt).toDateString()}
                    </div>
                );
            },
        },
    ]

return (
    <div className='w-full h-full pt-4'>

    {isLoading ? "Loading..." : (
            <div className=" w-full h-full text-[12px]">
                <DataGrid
                sx={{
                border: 0, // also tried setting to none 
                borderRadius: 2,
                
                minWidth: 300,
                }}
                getRowId = {(row) => row._id}
                rows={roomData}
                disableSelectionOnClick
                columns={columns}
                autoPageSize={true}
                // pageSize={4}
                checkboxSelection
                />
            </div>
    )}
</div>
)}

export default ReservedRoomsByUser