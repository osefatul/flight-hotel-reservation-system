import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../../../components/adminComponents/components/sidebar/Sidebar';
import Navbar from '../../../../components/Navbar';
import { deletingRoom, fetchingRooms } from '../../../../features/roomSlice/roomAction';

function RoomsList() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLoading, rooms} = useSelector(state => state.rooms)
  const [data, setData] = useState(rooms);


  useEffect(()=>{
    dispatch(fetchingRooms())
  },[])


  useEffect(()=>{
    setData(rooms)
  },[rooms])



  const handleDelete = async (id) => {
    await dispatch(deletingRoom(id))
    setData(data.filter((item) => item._id !== id));
  };



  const columns = [
    { field: "id", headerName: "ID", width: 180,

    renderCell: (params) => {
      return (
        // <Link to={`/ticket_communication/${params.row._id}`}>
          <div className="text-[12px]">
            R{params.row._id.slice(0,10)}...
          </div>
        // </Link>
      );
    }},

    {
      field: "title",
      headerName: "Title",
      width: 130,
  
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "hotelName",
      headerName: "Hotel",
      width: 300,
  
      renderCell: (params) => {
        return (
          <div className="flex flex-col text-[12px] space-y-1">
            {params.row.hotel.map( i => {
              return (

                <div className="text-[12px]">
                {i.hotelName.length <50 ? i.hotelName : <>{i.hotelName.slice(0,50)}...</> } 
                </div>

              )
            })}
          </div>
        );
      },
    },
    {
      field: "hotelId",
      headerName: "Hotel ID",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="flex flex-col text-[12px] space-y-1">
            {params.row.hotel.map( i => {
              return (
                <Link to ={`/admin/hotels/${i.hotelId}`}>
                <div className="text-[12px] text-blue-600">
                H{i.hotelId.slice(0,10)} 
                </div>
                </Link>
              )
            })}
          </div>
        );
      },
    },
  
    {
      field: "price",
      headerName: "Price",
      width: 100,
  
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            ${params.row.price}
          </div>
        );
      },
    },
    {
      field: "maxPeople",
      headerName: "Max People",
      width: 100,
  
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.maxPeople}
          </div>
        );
      },
    },
    {
      field: "roomNumbers",
      headerName: "No. of Room",
      width: 100,
  
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.roomNumbers.length}
          </div>
        );
      },
    },
    {
      field: "des",
      headerName: "Description",
      width: 150,
  
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.desc.slice(0,20)}.
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
            {/* <Link to={"/admin/rooms/" + params.row._id}>
            <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]">Edit</button>
            </Link> */}
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
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
          <div className=" pl-5 flex items-center   justify-between sm:justify-start px-2 sm:px-0">
            <p className='font-bold sm:hidden text-xl text-green-800'>Rooms</p>

            <Link to="/admin/new-room">
                <button className="w-24 bg-green-900 text-white rounded-sm">Create</button>
            </Link>
          </div>
          
          {isLoading ? "Loading..." : (
          <div className="userList">
            <DataGrid
            sx={{
              border: 0, // also tried setting to none 
              borderRadius: 2,
              p: 2,
              minWidth: 200,
            }}
            getRowHeight={() => 'auto'}
            getRowWidth={() => 'auto'}
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

  );
}

export default RoomsList