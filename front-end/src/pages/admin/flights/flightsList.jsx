import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchingFlights } from "../../../features/flightsSlice/flightAction";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";


export default function FlightsList() {

const dispatch = useDispatch();
const {isLoading, flights} = useSelector(state => state.flights);
const [data, setData] = useState(flights);


useEffect(() =>{
dispatch(FetchingFlights())
},[])

useEffect(()=>{
setData(flights)
},[flights])


const handleDelete = async (id) => {
// await dispatch(DeletingUser(id))
// setData(data.filter((item) => item._id !== id));
// //map all those that are not equal to the selected row id
// dispatch(FetchingFlights())

};



const columns = [
{ field: "id", headerName: "ID", width: 180,
flex: 1,
renderCell: (params) => {
    return (
    // <Link to={`/ticket_communication/${params.row._id}`}>
        <div className="text-[12px]">
        F{params.row._id.slice(0,10)}...
        </div>
    // </Link>
    );
}},

{
    field: "airline",
    headerName: "Airline",
    width: 120,
    flex: 1,
    renderCell: (params) => {
    return (
        <div className="flex text-[12px] items-center">
        {params.row.airline}
        </div>
    );
    },
},


{ field: "code", headerName: "Airline Code", width: 200,
flex: 1,
renderCell : (params) => {
    return (
    <div className="text-[12px]">
        {params.row.code}
    </div>
    )
}
},
{
    field: "from",
    headerName: "From",
    width: 120,
    flex: 1,
    renderCell : (params) => (
    <div className="text-[12px]">
        {params.row.from}
    </div>
    )
},
{
    field: "to",
    headerName: "To",
    width: 120,
    flex: 1,
    renderCell : (params) => (
    <div className="text-[12px]">
        {params.row.to}
    </div>
    )
},
{
    field: "fare",
    headerName: "Fare",
    width: 120,
    flex: 1,
    renderCell : (params) => (
    <div className="text-[12px]">
        ${params.row.fare}
    </div>
    )
},
{
    field: "action",
    headerName: "Action",
    width: 150,
    flex: 1,
    renderCell: (params) => {
    return (
        <>
        <Link to={"/admin/flights/" + params.row._id}>
            <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]">Edit</button>
        </Link>
        <DeleteOutline
            className="productListDelete"
            onClick={() => handleDelete(params.row._id)}
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
