import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchingReservedRoomsByUser } from '../../features/roomSlice/roomAction';

function ReservedRoomsByUser({user}) {

    const dispatch = useDispatch();
    const {isLoading, reservedRooms} = useSelector(state => state.rooms);
    const [roomData, setRoomData] = useState(reservedRooms)



    const columns = [
        { field: "roomId", headerName: "Room ID", width: 150, weight:"bold",
        renderCell: (params) => {
            return (
                <div className="text-[12px]">
                    {params.row.roomId.slice(0,10)}
                </div>
    
            );
        }},
    
        {
        field: "roomNumbers",
        headerName: "Room No",
        width: 80,
        flex: 1,
        renderCell: (params) => {
            return (
            <div className="text-[12px] flex space-x-2">
                {params.row.roomNumbers.map(roomNumber => roomNumber)}
            </div>
            );
        },
        },
    
        {
        field: "hotel",
        headerName: "Hotel ID",
        width: 160,
        flex: 1,
        renderCell: (params) => {
            return (
                <div>
                    {params.row.hotel[0].hotelName}
                </div>
            );
        },
        },

        {
            field: "reservedDates",
            headerName: "Reservation Date",
            width: 160,
            flex: 1,
            renderCell: (params) => {
                return (
                    <div>
                    {/* {new Date(params.row.departureDate).toDateString()} */}
                    {params.row.reservedDates.map(date => (
                        new Date(date).toDateString()
                    ))}
                    </div>
                );
            },
            },
    ]


    useEffect(()=>{
        dispatch(fetchingReservedRoomsByUser(user._id))
        setRoomData(reservedRooms)
    },[])




return (

    <div className='w-full h-[40%]'>
        <h1 className=' text-[15px] font-bold '>
            Room Reservation History
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
                rows={roomData}
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

export default ReservedRoomsByUser