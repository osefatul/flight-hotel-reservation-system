import { faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../../components/Navbar'
import {motion} from "framer-motion"
// import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import {  useNavigate } from 'react-router-dom'
import StripeCheckout from './stripeCheckout/StripeCheckout'

const MySwal = withReactContent(Swal);


function Payments() {

    const {flight} = useSelector(state => state.flights)
    const navigate = useNavigate()
    const { isLoading, SelectedUsersDetail} = useSelector(state => state.flightsUserDetail)


return (
    <div className='relative'>
        
        <div className ="bg-black sticky z-50 top-0 ">
            <Navbar  />
        </div>

        <div className="h-main flex sm:flex-row space-x-10 items-start
        justify-center w-[75%] mx-auto relative">

            <div className=' w-full flex flex-col items-center justify-center pt-6'>
                    <div className=' w-full pb-5'>
                        <h1 className=' text-lg font-bold border-b border-slate-300'>Review Details</h1>
                    </div>

                    <div className='p-2 w-full'>
                        <h1 className='w-full bg-slate-300 pl-1'>
                        <FontAwesomeIcon 
                        icon= {faPlaneDeparture}
                        /> Flight Details</h1>

                        <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                            <p className=' border-b border-b-amber-600 font-bold w-max'>{flight.airline} {flight.code}</p>

                            <div>
                                <p>From:<span className="font-bold"> {flight.from}</span></p> 
                                <p>To:<span className="font-bold"> {flight.to}</span></p>
                                
                            </div>
                        </div>
                    </div>

                    <div className='p-2 w-full'>
                        <h1 className='w-full bg-slate-300 pl-1 '>
                            <FontAwesomeIcon 
                                icon= {faUserTie} 
                                className="pr-1"
                                />
                            Traveler Details
                        </h1>

                        <div className='text-[12px] pl-1 border-x pt-2'>
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


                        <div className='pt-10 flex items-center justify-center font-bold text-[15px]'>
                            <p>Total:<span > ${flight.fare}</span></p>
                        </div>

                        <div>
                            <StripeCheckout/>
                        </div>
                    </div>

            </div>

        
        </div>


    </div>

)
}

export default Payments