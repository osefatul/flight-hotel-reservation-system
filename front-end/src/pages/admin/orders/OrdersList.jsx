import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import { FetchingOrders } from "../../../features/ordersSlice/ordersAction";



export default function OrdersList() {

const dispatch = useDispatch();
const {isLoading, orders} = useSelector(state => state.orders);
const [data, setData] = useState(orders);


useEffect(() =>{
dispatch(FetchingOrders())
},[])

useEffect(()=>{
setData(orders)
},[orders])


const handleDelete = async (id) => {
// await dispatch(DeletingUser(id))
// setData(data.filter((item) => item._id !== id));
// //map all those that are not equal to the selected row id
// dispatch(FetchingFlights())

};



const columns = [
{ field: "id", headerName: "ID", width: 150,

renderCell: (params) => {
    return (
    // <Link to={`/ticket_communication/${params.row._id}`}>
        <div className="text-[12px]">
        O{params.row._id.slice(0,10)}...
        </div>
    // </Link>
    );
}},

{
    field: "user",
    headerName: "User ID",
    width: 150,
    renderCell: (params) => {
    return (
        <div className="flex text-[12px] items-center">
        U{params.row.userId.slice(0,10)}..
        </div>
    );
    },
},


{ field: "productsId", headerName: "Products ID", width: 200, height: 400, 
renderCell : (params) => {
    return (
    <div className="text-[12px] ">
        {params.row.products.map((product) =>(
            <div className="text-black space-y-2">
                {product.productId}
            </div>
        ))}
    </div>
    )
}
},

{ field: "productsName", headerName: "Products Name", width: 200,
renderCell : (params) => {
    return (
    <div className="text-[12px] ">
        {params.row.products.map((product) =>(
            <div className="text-black space-y-2">
            {product.productName}
            </div>
        ))}
    </div>
    )
}
},
{
    field: "total",
    headerName: "Total Amount",
    width: 120,
    renderCell : (params) => (
    <div className="text-[12px]">
        ${params.row.total/100}
    </div>
    )
},
{
    field: "paymentStatus",
    headerName: "Payment Status",
    width: 120,
    renderCell : (params) => (
    <div className="text-[12px] text-green-500">
        {params.row.payment_status}
    </div>
    )
},
{
    field: "deliveryStatus",
    headerName: "Delivery Status",
    width: 120,
    renderCell : (params) => (
    <div className="text-[12px]">
        {params.row.delivery_status}
    </div>
    )
},

{
    field: "OrderDone",
    headerName: "Order time",
    width: 160,
    renderCell : (params) => (
    <div className="text-[12px]">
        {new Date(params.row.createdAt).toLocaleString()}
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

        {isLoading ? "Loading..." : (

        <div className="userList ">
        <DataGrid
        getRowHeight={() => 'auto'}
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
