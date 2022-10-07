import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchingBooking, FetchingBookingBasedOnBookingId } from '../../features/bookingSlice/bookingAction';
import { FetchingAnOrder } from '../../features/ordersSlice/ordersAction';

function FlightHistory({user, setBookingId, bookingId, setModalOpen, setFlightId}) {
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



    const handleBooking = (e, product)=>{
        e.preventDefault()
            if(product.bookingId){
                setBookingId(product.bookingId)
                setFlightId(product.productId)
            }
        return setModalOpen(true)
    }

    useEffect(()=>{
        bookingId && dispatch(FetchingBookingBasedOnBookingId(bookingId))
    },[bookingId, dispatch])



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
        {
            field: "productType",
            headerName: "Type",
            width: 100,
            renderCell: (params) => {
            return (
                <div className="flex flex-col space-y-2 text-[12px] items-center">
                    {params.row.products.map((product) =>(
                    <div className="text-black ">
                        {product.productType}
                    </div>
                    ))}
                </div>
            );
            },
        },
        
        
        { field: "productsId", headerName: "Products ID", width: 200,
        renderCell : (params) => {
            return (
            <div className='flex flex-col space-y-2'>
                {params.row.products.map((product) =>(
                    <div className="text-black">
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
            <div className='flex flex-col space-y-2'>
                {params.row.products.map((product) =>(
                    <div className="text-black">
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
                <div className='flex flex-col space-y-2 py-2'>

                    {
                    params.row.products.map((product) =>(
                        product.productType === "Travel" &&
                        <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]"
                        // onClick ={(e) => handleBooking(e,params)}
                        onClick ={(e) => handleBooking(e,product)}

                        >
                        View Booking
                    </button>
                    ))}
                </div>
            );
            },
        }
        ];


return (
        <div className="w-full h-full pt-4">

            {isLoading ? "Loading..." : (
                    <div className=" w-full h-full text-[12px]">
                        <DataGrid
                        getRowHeight={() => 'auto'}
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