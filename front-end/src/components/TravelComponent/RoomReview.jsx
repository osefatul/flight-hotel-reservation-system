import { faBed, faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {FaHotel} from "react-icons/fa"


function RoomReview({item}) {

    return (
        <div className=' w-full flex flex-col items-center justify-center pt-6'>
    
            <div className='p-2 w-full'>
                <details>
                    <summary className='w-full bg-slate-300 pl-1'>
                    <FontAwesomeIcon 
                        icon= {faBed} 
                        className="pr-1"
                    /> 
                    <span>Hotel & Room Details</span>
                    </summary>
        
                    <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                    <p className=' border-b border-b-amber-600 font-bold w-max'>{item.hotel[0].hotelName} {item.hotel[0].hotelId.slice(0,5)}</p>
        
                    <div>
                        <p>Title:<span className="font-bold"> {item.title}</span></p> 
                        <p>Room No:<span className="font-bold"> {item.selectedRoomsNumber.map(item => item)}</span></p>
                        <p>Price:<span className="font-bold"> ${item.price}</span></p>
                        
                    </div>
                </div>
                </details>
            </div>
    
            <div className='p-2 w-full'>
        
                <details>
                    <summary className='w-full bg-slate-300 pl-1 '>
                    <FontAwesomeIcon 
                        icon= {faUserTie} 
                        className="pr-1"
                        />
                    Guest Details
                    </summary>
                    <div className='text-[12px] pl-1 border-x pt-2'>
                        <p>Name:
                            <span className="font-bold">{" "}
                            {/* {SelectedUsersDetail.firstName} {SelectedUsersDetail.lastName}  */}
                            </span>
                        </p> 
                        
                        <p>Birthday:
                            <span className="font-bold">{" "} 
                            {/* {new Date(SelectedUsersDetail.birthdate).toDateString()} */}
                            </span>
                        </p>
                        
                </div>
                </details>
        
        
                {/* 
                        <div className='pt-10 flex items-center justify-center font-bold text-[15px]'>
                            <p>Total:<span > ${cartItems[0].fare}</span></p>
                        </div>
        
                        <div>
                            <StripeCheckout/>
                        </div> */}
            </div>
    
        </div>
    )
}

export default RoomReview