import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ToggleNestModalFalse } from '../../features/bookingSlice/bookingSlice'
import { addToCart } from '../../features/cartSlice/cartSlice'

function NestedConfirmingModal(departureDate) {

    const {bookingData, nestedModal} = useSelector(state => state.booking)
    const {flight} = useSelector(state => state.flights)
    const {SelectedUsersDetail} = useSelector(state => state.flightsUserDetail)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [data, setData] = useState(bookingData)
    let newObj;

    useEffect(()=>{
        setData(bookingData)

        newObj =  {...flight}
        newObj["name"] = `Flight on ${flight.airline} `;
        newObj["desc"] = `Airline ticket`;
        newObj["price"]= newObj["fare"]
        newObj["type"] = "Travel"
        newObj.departureDate= `${departureDate}`

    },[])

    useEffect(()=>{
        setData(bookingData)
    },[bookingData])



    const handleConfirmation = async(e) => {
        e.preventDefault()
        const joinedObj = await {...newObj, bookingId:data?.bookingId, firstName:SelectedUsersDetail.firstName, lastName:SelectedUsersDetail.lastName, birthDate:SelectedUsersDetail.birthdate, departureDate}
        dispatch(addToCart(joinedObj))
            
        setTimeout(()=>{
            navigate("/cart")
        },2000)
    }


return (
    <div className="text-black fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black  bg-opacity-70 ">
        <div className='h-max w-max bg-slate-100 flex flex-col items-center justify-center space-y-4 px-10 py-8 relative'>
            <p>Are you sure?</p>
            <div className='flex  items-center justify-center space-x-5'>
                <button className='text-white text-[12px] bg-blue-800 w-max px-2 p-1 rounded-sm'
                onClick={(e) => dispatch(ToggleNestModalFalse())}>
                No</button>
                <button className='text-white text-[12px] bg-green-900 w-max px-2 p-1 rounded-sm'
                onClick={(e) => handleConfirmation(e)}
                >Yes</button>
            </div>

        </div>
    </div>

)
}

export default NestedConfirmingModal