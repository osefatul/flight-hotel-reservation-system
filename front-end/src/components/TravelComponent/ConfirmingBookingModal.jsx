import { faCircleXmark, faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { AddingBooking } from '../../features/bookingSlice/bookingAction';
import { ToggleNestModalTrue } from '../../features/bookingSlice/bookingSlice';


function ConfirmingBookingModal({setModalOpen, departureDate}) {

    const dispatch = useDispatch() 
    const {flight} = useSelector(state => state.flights)
    const {user} = useSelector(state => state.login)
    const {SelectedUsersDetail} = useSelector(state => state.flightsUserDetail)
    const [messageAlert, setMessageAlert] = useState(false)


    useEffect(()=>{
        setTimeout(()=>{
            setMessageAlert(false)
        },3000)

    },[messageAlert])


    const handleConfirmation = async (e) => {
        e.preventDefault();

        dispatch(AddingBooking({bookedUser: SelectedUsersDetail._id, accountUser:user._id, flight:flight._id, departureDate})).then(()=>(
            // setNestedModal(true) //
            dispatch(ToggleNestModalTrue())
        ))

    }


    return (
        <div className="text-black fixed top-0 left-0 right-0 bottom-0  flex items-center justify-center bg-black  bg-opacity-70 ">
            <div className='h-max w-max sm:w-1/3 bg-slate-100 flex flex-col space-y-4 px-10 py-8 relative'>
                
                <div className="absolute -top-2 -right-4 w-12 flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon
                    icon={faCircleXmark}
                    className="h-6"
                    onClick={() => setModalOpen(false)}
                    />
                </div>
    
                <div className='space-y-6'>
                    {messageAlert &&
                    <p className='flex items-center justify-center text-green-800'>Successfully Added</p>
                    }
                    <div>
                        <h1 className=' text-lg  font-bold border-b border-slate-300'>Review Details</h1>
                    </div>

                    <div className='p-2'>
                        <h1 className='w-full bg-slate-300 pl-1'>
                        <FontAwesomeIcon 
                        icon= {faPlaneDeparture}
                        /> Flight Details</h1>

                        <div className='text-[12px] space-y-3 pl-1 border pt-1 '>
                            <p className='w-max border-b border-b-amber-600 font-bold'>{flight.airline} {flight.code}</p>

                            <div>
                                <p>From:<span className="font-bold"> {flight.from}</span></p> 
                                <p>To:<span className="font-bold"> {flight.to}</span></p>
                                <p>Fare:<span className="font-bold"> ${flight.fare}</span></p>
                            </div>
                        </div>
                    </div>

                    <div className='p-2'>
                        <h1 className='w-full bg-slate-300 pl-1 '>
                            <FontAwesomeIcon 
                                icon= {faUserTie} 
                                className="pr-1"
                                />
                            Traveler Details
                        </h1>

                        <div className='text-[12px] pl-1 border pt-2'>
                                <p>Name:
                                    <span className="font-bold">{" "}
                                    {SelectedUsersDetail.firstName} {SelectedUsersDetail.lastName} 
                                    </span>
                                </p> 
                                
                                <p>Birthday:
                                    <span className="font-bold">{" "} 
                                    {new Date(SelectedUsersDetail.birthdate).toDateString()}
                                    </span>
                                </p>
                                
                        </div>
                    </div>

                    <div className='flex items-center justify-center space-x-5'>
                        <button className='text-white text-[12px] bg-blue-800 w-max px-2 p-1 rounded-sm'
                        onClick= {(e) => setModalOpen(false) }>
                            Cancel</button>

                        <button className='text-white text-[12px] bg-green-900 w-max px-2 p-1 rounded-sm'
                        onClick={(e) => handleConfirmation(e)}
                        >
                            Confirm
                        </button>
                    </div>

                </div>

            </div>
    </div>

    )

}

export default ConfirmingBookingModal