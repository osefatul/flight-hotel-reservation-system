import React, { useEffect } from "react";
import "./hotelList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deletingHotel, fetchingHotels } from "../../../../features/hotelSlice/hotelAction";



function HotelList() {

  const dispatch = useDispatch();
  const {isLoading, hotels} = useSelector(state => state.hotels)
  const [data, setData] = useState(hotels);


  useEffect(()=>{
    dispatch(fetchingHotels())
  },[])


  useEffect(()=>{
    setData(hotels)
  },[hotels])


  const handleDelete = async (id) => {
    await dispatch(deletingHotel(id))
    setData(data.filter((item) => item._id !== id));
    //map all those that are not equal to the selected row id
    dispatch(fetchingHotels())

  };



  const columns = [
    { field: "id", headerName: "ID", width: 180,
    renderCell: (params) => {
      return (
        // <Link to={`/ticket_communication/${params.row._id}`}>
          <div className="text-[12px]">
            H{params.row._id.slice(0,10)}...
          </div>
        // </Link>
      );
    }},

    {
      field: "name",
      headerName: "Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "type",
      headerName: "Type",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.type}
          </div>
        );
      },
    },
    {
      field: "rooms",
      headerName: "Rooms",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.rooms.length}
          </div>
        );
      },
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.city}
          </div>
        );
      },
    },
    {
      field: "address",
      headerName: "Address",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.address}
          </div>
        );
      },
    },
    {
      field: "distance",
      headerName: "Distance",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            {params.row.distance}
          </div>
        );
      },
    },
    {
      field: "price",
      headerName: "Cheapest Price",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="text-[12px]">
            ${params.row.cheapestPrice}
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
            <Link to={"/admin/hotels/" + params.row._id}>
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
          <div className="w-[15%]">
          <Sidebar />
          </div>

          <div className="flex flex-col w-[85%]  mt-10 ">
          <div className=" pl-5 flex items-center   justify-between sm:justify-start px-2 sm:px-0">
            <p className='font-bold sm:hidden text-xl text-green-800'>Hotels</p>
              <Link to="/admin/new-hotel">
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

export default HotelList;
