import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar"
import { deletingBooking, FetchingBookings } from "../../../features/bookingSlice/bookingAction";
import Navbar from "../../../components/Navbar";


export default function BookingList() {

const dispatch = useDispatch();
const {isLoading, bookings} = useSelector(state => state.booking);
const [data, setData] = useState(bookings);


useEffect(() =>{
dispatch(FetchingBookings())
},[])

useEffect(()=>{
setData(bookings)
},[bookings])


const handleDelete = async (e, id, flightId) => {
    e.preventDefault();
    await dispatch(deletingBooking(id, flightId))
    setData(data.filter((item) => item._id !== id));
    //map all those that are not equal to the selected row id
    dispatch(FetchingBookings())
};



const columns = [
{ field: "id", headerName: "ID", width: 150,
renderCell: (params) => {
    return (
    // <Link to={`/ticket_communication/${params.row._id}`}>
        <div className="text-[12px]">
        B{params.row._id.slice(0,10)}...
        </div>
    // </Link>
    );
}},

{
    field: "bookingId",
    headerName: "Booking ID",
    width: 120,
    renderCell: (params) => {
    return (
        <div className="flex text-[12px] items-center">
        {params.row.bookingId}
        </div>
    );
    },
},


{ field: "bookedUser", headerName: "Booked User", width: 200,
renderCell : (params) => {
    return (
    <div className="text-[12px]">
        {params.row.bookedUser}
    </div>
    )
}
},
{
    field: "accountUser",
    headerName: "Registered Account",
    width: 200,
    renderCell : (params) => (
    <div className="text-[12px]">
        U{params.row.accountUser}
    </div>
    )
},
{
    field: "flightId",
    headerName: "Flight ID",
    width: 200,
    renderCell : (params) => (
    <div className="text-[12px]">
        F{params.row.flight}
    </div>
    )
},
{
    field: "departingDate",
    headerName: "Departing Date",
    width: 160,
    renderCell : (params) => (
    <div className="text-[12px]">
        {new Date(params.row.departureDate).toDateString()}
    </div>
    )
},
{
    field: "bookingDate",
    headerName: "Booking Date",
    width: 120,
    renderCell : (params) => (
    <div className="text-[12px]">
        {new Date(params.row.openAt).toDateString()}
    </div>
    )
},
{
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
    return (
        <>
        <Link to={"/admin/users/" + params.row._id}>
            <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]">Edit</button>
        </Link>
        <DeleteOutline
            className="productListDelete"
            onClick={(e) => handleDelete(e, params.row._id, params.row.flight)}
        />
        </>
    );
    },
}
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
        <div className=" pl-5">
            <Link to="/admin/newFlight">
            <button className="w-24 bg-green-900 text-white rounded-sm">Create</button>
            </Link>
        </div>



        {isLoading ? "Loading..." : (

        <div className="userList ">
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
