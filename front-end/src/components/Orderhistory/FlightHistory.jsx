import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchingBooking, FetchingBookingBasedOnBookingId } from '../../features/bookingSlice/bookingAction';
import { FetchingAnOrder } from '../../features/ordersSlice/ordersAction';

function FlightHistory({user, setBookingId, bookingId, setModalOpen}) {
    const dispatch = useDispatch();
    // const {isLoading, bookingData} = useSelector(state => state.booking);
    // const [data, setData] = useState(bookingData)
    const {isLoading, orders} = useSelector(state => state.orders);
    const [data, setData] = useState(orders);


    useEffect(()=>{
        // dispatch(FetchingBooking(user._id)) 
        dispatch(FetchingAnOrder(user._id))
    },[])

    useEffect(()=>{
        setData(orders)
        },[orders])



    const handleBooking = (e, params)=>{
        e.preventDefault()
        params.row.products.map(product=>{
            if(product.bookingId){
                setBookingId(product.bookingId)
            }
        })
        return setModalOpen(true)
    }

    useEffect(()=>{
        bookingId && dispatch(FetchingBookingBasedOnBookingId(bookingId))
    },[bookingId, dispatch])


    // const columns = [
    //     { field: "id", headerName: "Booking ID", width: 120, weight:"bold",
    //     flex: 1,
    //     renderCell: (params) => {
    //         return (
    //             <div className="text-[11px]">
    //                 {params.row.bookingId }
    //             </div>
    
    //         );
    //     }},
    
    //     {
    //     field: "Booked User",
    //     headerName: "Booked User Details",
    //     width: 160,
    //     flex: 1,
    //     renderCell: (params) => {
    //         return (
    //         <div className="text-[11px]">
    //             {params.row.bookedUser}
    //         </div>
    //         );
    //     },
    //     },
    
    //     {
    //     field: "flight",
    //     headerName: "Flight ID",
    //     width: 160,
    //     flex: 1,
    //     renderCell: (params) => {
    //         return (
    //             <div className='text-[11px]'>
    //                 {params.row.flight}
    //             </div>
    //         );
    //     },
    //     },

    //     {
    //         field: "Date",
    //         headerName: "Departure",
    //         width: 160,
    //         flex: 1,
    //         renderCell: (params) => {
    //             return (
    //                 <div className='text-[11px]'>
    //                 {new Date(params.row.departureDate).toDateString()}
    //                 </div>
    //             );
    //         },
    //         },
    //     {
    //         field: "bookingDate",
    //         headerName: "Booking Date",
    //         width: 160,
    //         flex: 1,
    //         renderCell: (params) => {
    //             return (
    //                 <div className="text-green-600 text-[11px]">
    //                 {new Date(params.row.openAt).toDateString()}
    //                 </div>
    //             );
    //         },
    //         },
    // ]


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
        
        
        { field: "productsId", headerName: "Products ID", width: 200,
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
        // {
        //     field: "deliveryStatus",
        //     headerName: "Status",
        //     width: 120,
        //     renderCell : (params) => (
        //     <div className="text-[12px]">
        //         {params.row.delivery_status}
        //     </div>
        //     )
        // },
        {
            field: "OrderDone",
            headerName: "Booking time",
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
                {/* <Link to={"/admin/users/" + params.row._id}> */}
                    <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]"
                    onClick ={(e) => handleBooking(e,params )}
                    >
                        View Booking
                    </button>
                {/* </Link> */}
                {/* <DeleteOutline
                    className="productListDelete"
                    onClick={() => handleDelete(params.row._id)}
                /> */}
                </>
            );
            },
        }
        ];


return (
        <div className="w-full h-full pt-4">

            {isLoading ? "Loading..." : (
                    <div className=" w-full h-full text-[12px]">
                        <DataGrid
                        sx={{
                        border: 0, // also tried setting to none 
                        borderRadius: 2,
                        minWidth: 300,
                        }}
                        getRowId = {(row) => row._id}
                        rows={data}
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

export default FlightHistory