
import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../../components/adminComponents/components/sidebar/Sidebar'
import Navbar from '../../../../components/Navbar'
import { fetchingReservedRooms, fetchingUnReservedRoomsByUser } from '../../../../features/roomSlice/roomAction';

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


  const navigateHotel = (params) =>{
    const userId = params.row.roomNumbers.filter( i => {
      return i.reservedBy !== undefined
    })
    // console.log(userId)
    navigate("/admin/hotels/" + params.row.hotel[0].hotelId)
  }


  const handleDelete = async(e, id, roomId, reservedDates)=>{
    e.preventDefault()
    await setData(data.filter((item) => item._id !== id))
    await dispatch(fetchingUnReservedRoomsByUser(id, {reservedDates , roomId}))
    await dispatch(fetchingReservedRooms())
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
              U{params?.row?.reservedBy?.slice(0,10)}
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
            R{params?.row.roomId?.slice(0,12)}
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
        <Link to={`/admin/hotels/${params.row.hotel[0].hotelId}`}>
          <div className="text-[12px] text-blue-600">
            {params?.row?.hotel[0].hotelId?.slice(0,12)}
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
            ${params.row?.totalPrice}
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
            {params.row?.roomNumbers?.map(number => number)}
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
            {params.row.reservedDates?.length}
          </div>
        );
      },
    },

    {
      field: "checkIn",
      headerName: "check in",
      width: 170,

      renderCell: (params) => {
        return (
          <div className="text-[12px] text-green-600">
            {new Date(params.row.reservedDates[0]).toDateString()}
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
            {new Date(params.row.reservedDates[params.row.reservedDates.length-1]).toDateString()}
          </div>
        );
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
      return (
      <>
          <DeleteOutline
          className="productListDelete"
          onClick={(e) => handleDelete(e, params.row._id, params.row.roomId, params.row.reservedDates )}
          />
      </>
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
                <button className="text-lg font-bold w-[15%] flex items-center justify-start text-green-800">Reserved Rooms</button>
                <hr className='w-[80%] bg-slate-300' />
          </div>
          
          {isLoading ? "Loading..." : (
          <div className="userList mt-4">
            <DataGrid
                sx={{
                border: 0, // also tried setting to none 
                borderRadius: 2,
                
                minWidth: 300,
                }}
                getRowId = {(row) => row._id+row.roomId}
                rows={data}
                disableSelectionOnClick
                columns={columns}
                autoPageSize={true}
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