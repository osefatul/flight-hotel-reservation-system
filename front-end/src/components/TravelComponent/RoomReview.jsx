import { faBed, faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {FaHotel} from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { removeFromCart, removeHotelFromCart } from '../../features/cartSlice/cartSlice'


function RoomReview({item}) {

    const dispatch = useDispatch()

    const handleDelete = async (e, item)=>{
        e.preventDefault()
        await dispatch(removeHotelFromCart(item))
    }


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

                        <div className="bg-red-700 text-white px-2 p-1 rounded-sm cursor-pointer text-[12px]" 
                        onClick={(e) => handleDelete(e, item)}
                        >
                            Delete
                        </div>
                    </div>
        
                    <div className='text-[12px] space-y-3 pl-1 border-x pt-1 '>
                        <p className=' border-b border-b-amber-600 font-bold w-max'>{item?.name} {item?.id?.slice(0,5)}</p>
            
                        <div className='grid grid-cols-4 items-center '>

                            <div>
                                <p>Title:<span className="font-bold"> {item.title}</span></p>
                                <p className='flex items-center space-x-2'>
                                    <span>
                                    Room No:
                                    </span>
                                    <span className="font-bold flex items-center space-x-2">
                                    {item?.selectedRoomsNumber?.map(item =>
                                    <div className=''>
                                        {item}
                                    </div>
                                    )}
                                </span>
                                </p>
                            
                                <p>Stay:<span className="font-bold"> {item.days} Day/s</span></p> 
                            </div>

                            <div>
                                <p>Price:<span className="font-bold"> ${item.roomPrice}</span></p>
                                <p>Total Price:<span className="font-bold"> ${item.price}</span></p>
                            </div>
                            
                        </div>
                    </div>


                </div>
            </div>
    
        </div>
    )
}

export default RoomReview