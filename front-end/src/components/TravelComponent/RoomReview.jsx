import { faBed, faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {FaHotel} from "react-icons/fa"


function RoomReview({item}) {

    return (
        <div className=' w-full flex flex-col items-center justify-center pt-2'>
    
            <div className='p-2 w-full'>
                <div>
                    <div className='w-full bg-slate-300 pl-1 flex items-center justify-between'>
                        <div>
                            <FontAwesomeIcon 
                                icon= {faBed} 
                                className="pr-1"
                                /> 
                            <span>Hotel & Room Details</span>
                        </div>

                        <div className="bg-red-700 text-white px-2 p-1 rounded-sm cursor-pointer text-[12px]" >
                            Delete
                        </div>
                    </div>
        
                    <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                        <p className=' border-b border-b-amber-600 font-bold w-max'>{item.hotel[0].hotelName} {item.hotel[0].hotelId.slice(0,5)}</p>
            
                        <div>
                            <p>Title:<span className="font-bold"> {item.title}</span></p> 
                            <p>Room No:<span className="font-bold"> {item.selectedRoomsNumber.map(item => item)}</span></p>
                            <p>Price:<span className="font-bold"> ${item.price}</span></p>
                            
                        </div>
                    </div>


                </div>
            </div>
    
        </div>
    )
}

export default RoomReview