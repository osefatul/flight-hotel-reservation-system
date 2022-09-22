import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AddingFlightsUserDetails, FetchingAFlightUserDetail } from '../../features/flightUserDetails/flightUserDetailsAction'



function AddTraveler({setAddPassenger, flight, user}) {

    const initialValue = {
        firstName: "",
        lastName: "",
        birthdate: "",
    }


    const dispatch = useDispatch()
    const [formData, setFormData] = useState(initialValue)


    const handleChange = (e) =>{
        setFormData(prev => ({...prev, [e.target.name]:e.target.value}))
        // console.log(formData)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const lastForm = {...formData, flights:flight._id}

        await dispatch(AddingFlightsUserDetails(user._id, lastForm))
        await dispatch(FetchingAFlightUserDetail(user._id))
        setFormData(initialValue)
        setAddPassenger(false)
    }




return (
    <div className=' flex w-[60%] mx-auto mt-4'>
        <form className="flex flex-col space-y-3 pb-10 w-full pr-10 text-[12px]"    onSubmit = {handleSubmit} >

            <h1 className='mx-auto font-bold text-lg w-max border-b border-amber-500'>Add New Traveler </h1>
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
)
}

export default AddTraveler