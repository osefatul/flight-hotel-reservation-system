import { faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFlightFromCart, removeFromCart } from '../../features/cartSlice/cartSlice'

function FlightReview({item}) {

    const dispatch = useDispatch()
    const handleDelete = async (e)=>{
        e.preventDefault()
        await dispatch(removeFlightFromCart(item))
    }

return (
    <div className=' w-full flex flex-col items-center justify-center pt-2'>

        <div className='p-2 w-full'>
            <div>
                <div className='w-full bg-slate-300 pl-1 flex items-center justify-between'>
                    <div>
                        <FontAwesomeIcon 
                        icon= {faPlaneDeparture}
                        /> Flight Details
                    </div>

                    <div className="bg-red-700 text-white px-2 rounded-sm cursor-pointer text-[12px] p-1" 
                    onClick={(e) => handleDelete(e)}
                    >
                            Delete
                    </div>
                </div>

                <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                    <div className='space-y-2'>
                        <p className=' border-b border-b-amber-600 font-bold w-max'>{item.airline} {item.code}</p>
                        <div>
                            <p>From:<span className="font-bold"> {item.from}</span></p> 
                            <p>To:<span className="font-bold"> {item.to}</span></p>
                            <p>Price:<span className="font-bold"> ${item.fare}</span></p>
                            <p>Travel Date:<span className="font-bold"> {new Date(item.departureDate.departureDate).toDateString()}</span></p>

                        </div>
                    </div>

                    <div className='space-y-2'>
                        <div className='w-full font-bold'>
                            <FontAwesomeIcon 
                                icon= {faUserTie} 
                                className="pr-1"
                                />
                            Traveler Details
                        </div>

                        <div className='text-[12px]'>
                            <p>Name:
                                <span className="">{" "}
                                {item.firstName} {item.lastName} 
                                </span>
                            </p> 
                            
                            <p>Birthday:
                                <span className="">{" "} 
                                {new Date(item.birthDate).toDateString()}
                                </span>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
)
}

export default FlightReview