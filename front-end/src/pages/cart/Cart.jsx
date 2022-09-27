import { faPlaneDeparture, faUserTie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar'
import FlightReview from '../../components/TravelComponent/FlightReview'
import RoomReview from '../../components/TravelComponent/RoomReview'
import { getTotals } from '../../features/cartSlice/cartSlice'
import StripeCheckout from '../TravelPages/payments/stripeCheckout/StripeCheckout'



function Cart() {

    const dispatch = useDispatch() 
    const{cartTotalAmount} = useSelector(state => state.cart)

    useEffect(()=>{
        dispatch(getTotals())
    })

    const {cartItems} = useSelector(state => state.cart)
    return (
        <div className='relative'>
            
            <div className ="bg-black sticky z-50 top-0 ">
                <Navbar  />
            </div>


            <div className="h-main flex flex-col items-start
            justify-start pt-10 w-[75%] mx-auto relative">


                <div className=' w-full pb-5'>
                    <h1 className=' text-lg font-bold border-b border-slate-300'>Review Details</h1>
                </div>

                {cartItems.map((item)=>(
                    Object.keys(item).includes("airline")
                    ?
                    <div className='w-full space-y-2'>
                        <FlightReview item={item}/>
                        <hr className='border border-yellow-700 w-full'/>
                    </div>
                    :

                    <div className='w-full space-y-2'>
                        <RoomReview item={item}/>
                        <hr className='border border-yellow-700 w-full'/>
                    </div>
                ))}


                    <div className='pt-10 flex flex-col w-full items-center justify-center font-bold text-[15px]'>
                        <p>Total:<span > ${cartTotalAmount}</span></p>
                        
                        <div className="w-full">
                        <StripeCheckout/>
                        </div>
                    </div>
            </div>
        </div>
    
    )
}

export default Cart