import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'

function Booking() {

    const location = useLocation()
    const date = location.state.date;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoading, error, flight} = useSelector(state => state.flights)

    console.log(date)

    useEffect(() => {
    })

return (
    <div>
        <div className ="bg-black sticky z-50 top-0 ">
            <Navbar  />
        </div>

        <div className="h-main flex sm:flex-row space-x-10 mt-10 items-start
        justify-center w-[75%] mx-auto relative">

            <div className='w-full space-y-5'>
                <div className='w-full flex flex-col space-y-4 text-black'>
                    <div className='bg-slate-600 rounded-sm text-white text-xl font-bold p-2'>
                        <h1 >Book Flight</h1>
                    </div>

                    <div className='flex flex-col space-y-4' >
                        <div className='border border-slate-400 rounded-sm p-2 space-y-2'>
                            
                            <div className='text-[10px] text-slate-700 font-bold '>
                                <p className='border-b border-amber-500 w-max'>
                                {flight.code}2342
                                </p>
                            </div>
                            
                            <div className='space-y-5'>
                                <p className='text-[16px] font-bold'>{flight.airline}</p>
                                
                                <div className='flex space-x-3 items-center justify-between text-[14px]'>
                                    <p >{flight.from}</p>

                                    <span>
                                        <svg
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                            height="25"
                                            width="25"
                                            image-rendering="optimizeQuality"
                                            shape-rendering="geometricPrecision"
                                            text-rendering="geometricPrecision"
                                            viewBox="0 0 500 500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            >
                                            <g stroke="#222">
                                                <line
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-width="30"
                                                x1="300"
                                                x2="55"
                                                y1="390"
                                                y2="390"
                                                />
                                                <path
                                                d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z"
                                                fill="#222"
                                                stroke-linejoin="round"
                                                stroke-width="10"
                                                />
                                            </g>
                                        </svg>
                                    </span>

                                    <p>{flight.to}</p>
                                    <p className='font-bold'>${flight.fare}</p>
                                    <p className=''>{date}</p>

                                </div>

                            </div>

                        </div>
                        
                    </div>

                </div>

                <hr className='bg-black'/>

                <div className='p-2'>
                    <h1 className='text-xl font-bold'>
                        Booking Flight List
                    </h1>

                    
                </div>

            </div>





        </div>

    </div>
)
}

export default Booking