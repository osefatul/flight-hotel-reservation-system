import { DeleteOutline } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/adminComponents/components/sidebar/Sidebar';
import Navbar from '../../../../components/Navbar';
import { deletingRoom, fetchingRooms } from '../../../../features/roomSlice/roomAction';

function RoomsList() {

  const dispatch = useDispatch();
  const {isLoading, error, rooms} = useSelector(state => state.rooms)
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
      width: 200,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
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
      headerName: "No. of People",
      width: 120,
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
      width: 160,
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
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.desc.slice(0,10)}...
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
            <Link to={"/admin/rooms/" + params.row._id}>
            <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]">Edit</button>
            </Link>
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
          <div className="w-[20%]">
          <Sidebar />
          </div>

        <div className="flex flex-col w-full  mt-10 ">
          <div className=" pl-5">
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