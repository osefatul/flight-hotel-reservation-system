import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPDFTicket } from '../../api/TravelApi/checkInTicket'
import { FetchingBooking, FetchingBookingBasedOnBookingId } from '../../features/bookingSlice/bookingAction'
import { FetchingAFlight } from '../../features/flightsSlice/flightAction'
import { FetchingUserDetail } from '../../features/flightUserDetails/flightUserDetailsAction'


function ViewBooking({setModalOpen, flightId}) {
    const {bookingData} = useSelector(state => state.booking)
    const {isLoading, flight} = useSelector(state => state.flights)
    const [flightData, setFlightData] = useState(flight)
    const dispatch = useDispatch()

    const {isLoading:userLoading, SelectedUsersDetail} = useSelector(state => state.flightsUserDetail)
    const [userData, setUserData] = useState(SelectedUsersDetail)


    useEffect(()=>{
        bookingData[0]?.bookedUser && dispatch(FetchingUserDetail(bookingData[0]?.bookedUser))
        bookingData[0]?.flight && flightId && dispatch(FetchingAFlight(flightId))
    },[dispatch,bookingData])


    useEffect(()=>{
        setFlightData(flight)
        setUserData(SelectedUsersDetail)
    },[flight, SelectedUsersDetail])


    const handleCheckIn= async (e)=>{
        e.preventDefault();

        const formData = {
            airline:flightData?.airline,
            to:flightData?.to,
            from:flightData?.from,
            code:flightData?.code,
            firstName:userData?.firstName,
            lastName:userData?.lastName,
            date:new Date (bookingData[0]?.departureDate).toDateString()
        }

        const res = await createPDFTicket(formData)
        console.log(res)
        setModalOpen(false);
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

            <div className='flex flex-col space-y-3'>
                <h1 className='font-bold text-sm'>View Booking Details:</h1>

                <div className='text-[12px]'>
                    <p>Booking ID:{" "}
                        <span className='font-bold'>
                            {bookingData[0]?.bookingId}
                        </span>
                    </p>

                    <p>Airline:{" "}
                        <span className='font-bold'>
                        {isLoading ? "loading": flightData?.airline} {" "} {isLoading ? "loading": flightData.code}
                        </span>
                    </p>

                    <p>Flight:{" "}
                        <span className='font-bold'>
                            From {isLoading ? "loading":flightData?.from} to {isLoading ? "loading":flightData?.to}
                        </span>
                    </p>
                    
                    <p>Passenger Name:{" "}
                        <span className='font-bold'>
                            {userLoading? "loading..." : userData?.firstName} {" "} {userLoading? "loading..." :userData?.lastName}
                        </span>
                    </p>


                    <p>Departing Date:{" "}
                        <span className='font-bold'>
                            {new Date (bookingData[0]?.departureDate).toDateString()}
                        </span>
                    </p>
                </div>

                <div className='flex items-center justify-start space-x-4 text-white'>
                    <button className='border px-2 py-1 bg-blue-600 rounded-sm'>Cancel Booking</button>
                    <button className='border px-2 py-1 bg-green-600 rounded-sm'
                    onClick = {(e)=> handleCheckIn(e)}
                    >Check In</button>

                </div>

            </div>
            

        </div>
    </div>

)
}

export default ViewBooking