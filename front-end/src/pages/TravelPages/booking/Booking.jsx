import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import { DataGrid } from '@mui/x-data-grid';
import { getCurrentUserData } from '../../../features/usersSlice/usersAction';
import { AddingFlightsUserDetails, FetchingAFlightUserDetail, FetchingUserDetail } from '../../../features/flightUserDetails/flightUserDetailsAction';
import { addNewUserDetails } from '../../../api/TravelApi/userDetails';
import ConfirmingBookingModal from '../../../components/TravelComponent/ConfirmingBookingModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneArrival, faPlaneDeparture, faPlaneUp, faTicket, faTrash, } from '@fortawesome/free-solid-svg-icons';
import { GiCommercialAirplane } from 'react-icons/gi';
import {MdAirplaneTicket} from "react-icons/md"
import { motion } from "framer-motion"





function Booking() {

    const initialValue = {
        firstName: "",
        lastName: "",
        birthdate: "",
    }


    const location = useLocation()
    const date = location.state.date;
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [addPassenger, setAddPassenger] = useState(false)
    const [formData, setFormData] = useState(initialValue)
    const [modalOpen, setModalOpen] = useState(false);


    const {user} = useSelector(state => state.login);
    const {flight} = useSelector(state => state.flights)
    const { isLoading, UsersDetail} = useSelector(state => state.flightsUserDetail)

    useEffect(  () => {
            dispatch(getCurrentUserData(user._id))
            dispatch(FetchingAFlightUserDetail(user._id))
    },[])


    const confirmBooking = (e, id) =>{
        e.preventDefault();
        setModalOpen(true);
        dispatch(FetchingUserDetail(id))
    }

    const handleChange = (e) =>{
        setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
        console.log(formData)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const lastForm = {...formData, flights:flight._id}

        await dispatch(AddingFlightsUserDetails(user._id, lastForm))
        await dispatch(FetchingAFlightUserDetail(user._id))
        setFormData(initialValue)
        setAddPassenger(false)
    }



    const columns = [
        { field: "firstName", headerName: "Name", width: 180, flex: 1, weight:"bold",
        renderCell: (params) => {
            return (
                <div className="text-[12px]">
                    {params.row.firstName + " " + params.row.lastName}
                </div>
    
            );
        }},
    
        {
        field: "birthday",
        headerName: "Birthday",
        width: 180,
        flex: 1,
        renderCell: (params) => {
            return (
            <div className="text-[12px]">
                {new Date(params.row.birthdate).toDateString()}
            </div>
            );
        },
        },
    
        {
        field: "booking",
        headerName: "Booking",
        width: 160,
        flex: 1,
        renderCell: (params) => {
            return (
                <div className=" w-full flex space-x-3">
                <motion.button className="bg-green-700 hover:bg-green-800 w-full flex items-center justify-center space-x-2 px-2 py-[3px] rounded-sm text-white text-[12px]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => confirmBooking(e , params.row._id)}>
                    <MdAirplaneTicket 
                    className="text-[22px]"
                    />
                    <span className='text-white '>
                    Book Ticket
                    </span>
                </motion.button>

                <motion.button className="bg-green-700 hover:bg-green-800 w-full flex items-center justify-center space-x-2 px-2 py-[3px] rounded-sm text-white  text-[13px]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => confirmBooking(e , params.row._id)}
                >    
                    <FontAwesomeIcon 
                        icon= {faTrash}
                        className=""
                    />
                    <span className='text-white'>
                        Delete
                    </span>
                </motion.button>
                
                </div>
            );
        },
        },
    ]






return (
    <div className='relative'>
        
        <div className ="bg-black sticky z-50 top-0 ">
            <Navbar  />
        </div>

        <div className="h-main flex sm:flex-row space-x-10 items-start
        justify-center w-[75%] mx-auto relative">

            <div className='w-full space-y-3 h-full pt-5'>
                <div className='w-full flex flex-col space-y-4 text-black'>
                    <div className='bg-slate-600 rounded-sm text-white text-xl font-bold p-2'>
                        <h1>Book Flight</h1>
                    </div>

                    <div className='flex flex-col space-y-4' >
                        <div className='border border-slate-400 rounded-sm p-2 space-y-2'>
                            
                            <div className='text-[10px] text-slate-700 font-bold '>
                                <p className='border-b border-amber-500 w-max'>
                                {flight.code}2342
                                </p>
                            </div>
                            
                            <div className='space-y-5'>
                                <p className='text-[18px] font-bold'>{flight.airline}</p>
                                
                                <div className='flex space-x-3 items-center justify-between text-[14px] font-semibold'>
                                    <p >
                                    {flight.from}
                                    <FontAwesomeIcon 
                                    icon= {faPlaneDeparture}
                                    className="text-[20px] pl-2"
                                    />
                                    </p>

                                    <GiCommercialAirplane 
                                    className="text-[50px]"
                                    />
                                    
                                    <p >
                                    {flight.to}
                                    <FontAwesomeIcon 
                                    icon= {faPlaneArrival}
                                    className="text-[20px] pl-2"
                                    />
                                    </p>

                                    <p className='font-bold'>${flight.fare}</p>
                                    <p className=''>{date}</p>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

                <hr className='bg-black'/>

                <div className=' space-y-1 w-full'>
                    <h1 className='text-xl font-bold'>
                        Booking Flight List
                    </h1>

                    {isLoading ? "Loading..." : (
                    <div className=" w-full h-56">
                        <DataGrid
                        sx={{
                        border: 0, // also tried setting to none 
                        borderRadius: 2,
                        
                        minWidth: 300,
                        }}
                        getRowId = {(row) => row._id}
                        rows={UsersDetail}
                        disableSelectionOnClick
                        columns={columns}
                        autoPageSize={true}
                        checkboxSelection
                        />
                    </div>
                    )}

                    {!addPassenger && 
                        <div className='' >
                            <motion.button className='bg-slate-600 w-max p-1 text-white rounded-sm px-2 hover:bg-black'
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            onClick = {(e) => setAddPassenger(true)}
                            >
                                Add Traveler
                            </motion.button>
                        </div>
                    }
                </div>

                {addPassenger && 
                    <div className=' flex w-[60%] mx-auto mt-4'>
                    <form className="flex flex-col space-y-3 pb-10 w-full pr-10 text-[12px]"    onSubmit = {handleSubmit} >

                        <h1 className='mx-auto font-bold text-lg'>Add New Traveler </h1>
                        <input className='border pl-1'  type="text" name="firstName" id="firstName" 
                        placeholder='Enter Passenger first name'
                        onChange={handleChange}
                        />

                        <input className='border pl-1' type="text" name="lastName" id="lastName" 
                        placeholder='Enter passenger last name'
                        onChange={handleChange}

                        />

                        <div className='flex flex-col text-slate-400'>
                            <label htmlFor="birthdate">Enter passenger birth date:</label>
                            <input className='border pl-1' type="date" name="birthdate" id="birthdate"
                            onChange={handleChange}

                            />
                        </div>

                        <button type="submit" className='w-full p-1 bg-green-800 text-white'>Submit</button>
                    </form>
                    </div>
                }

            </div>


        </div>

        {
            modalOpen && <ConfirmingBookingModal setModalOpen={setModalOpen} />
        }

    </div>
)
}

export default Booking