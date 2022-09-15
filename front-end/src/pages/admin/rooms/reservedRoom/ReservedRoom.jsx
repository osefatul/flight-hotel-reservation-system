
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../../components/adminComponents/components/sidebar/Sidebar'
import Navbar from '../../../../components/Navbar'
import { fetchingReservedRooms } from '../../../../features/roomSlice/roomAction';

function ReservedRoom() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoading, error, reservedRooms} = useSelector(state => state.rooms)
  const [data, setData] = useState(reservedRooms);
  


  useEffect(()=>{
    dispatch(fetchingReservedRooms())
  },[])


  useEffect(()=>{
    setData(reservedRooms)
  },[reservedRooms])


  const navigateUser = (params) =>{
    const userId = params.row.roomNumbers.filter( i => {
      return i.reservedBy !== undefined
    })
    // console.log(userId)
    navigate("/admin/users/" + userId[0].reservedBy)
  }



  const columns = [
    {
      field: "reservedBy",
      headerName: "Reserved By",
      width: 140,
      renderCell: (params) => {
        return (
            <Link to={`/admin/users/${params.row.reservedBy}`}>
            <div className="text-[12px] text-blue-600">
              U{params.row.reservedBy.slice(0,10)}
            </div>
            </Link>
        );
      },
    },
    { field: "roomId", headerName: "Room ID", width: 140,
    renderCell: (params) => {
      return (
        <Link to={`/admin/rooms/${params.row.roomId}`}>
          <div className="text-[12px] text-blue-600">
            R{params.row.roomId.slice(0,12)}
          </div>
        </Link>
      );
    }},

    
    {
      field: "hotelId",
      headerName: "Hotel ID",
      width: 140,
      renderCell: (params) => {
        return (
          <Link to ={`/admin/hotels/${params.row.hotel[0].hotelId}`}>
          <div className="text-[12px] text-blue-600">
            {params.row.hotel[0].hotelId.slice(0,12)}
          </div>
          </Link>
        );
      },
    },
    
    {
      field: "totalPrice",
      headerName: "Total Price",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            ${params.row.totalPrice}
          </div>
        );
      },
    },

    {
      field: "roomNumbers",
      headerName: "Room No.",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.roomNumbers[0]}
          </div>
        );
      },
    },

    {
      field: "Total No. of Days",
      headerName: "Days",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.reservedDates.length}
          </div>
        );
      },
    },

    {
      field: "checkIn/checkOut",
      headerName: "checkIn/checkOut",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="text-[12px] text-green-600">
            {new Date(params.row.reservedDates[0]).toLocaleString()}
          </div>
        );
      },
    },

    {
      field: "checkOut",
      headerName: "Check out",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="text-[12px] text-red-600">
            {new Date(params.row.reservedDates[params.row.reservedDates.length-1]).toLocaleString()}
          </div>
        );
      },
    },

  ];

  return (
    <div>
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>
      
      <div className="flex w-full">
          <div className="w-[15%]">
          <Sidebar />
          </div>

        <div className="flex flex-col w-[85%]  mt-10 ">

          
          <div className="pl-2 pt-2 flex items-center w-[100%]">
                <button className="text-lg font-bold w-[15%] flex items-center justify-start">Reserved Rooms</button>
                <hr className='w-[80%]' />
          </div>
          
          {isLoading ? "Loading..." : (
          <div className="userList mt-4">
            <DataGrid
            sx={{
              border: 0, // also tried setting to none 
              borderRadius: 0,
              
              minWidth: 200,
            }}
            getRowId = {(row) => row._id}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ReservedRoom