import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchingHotelsByFeature } from '../features/hotelSlice/hotelAction';


function FeaturedProperties() {


    const dispatch = useDispatch();
    const {hotelsFeatured} = useSelector(state => state.hotels)

    const [data, setData] = useState();

    useEffect(() =>{
        dispatch(fetchingHotelsByFeature())
    },[ dispatch])


    useEffect(() =>{
        setData(hotelsFeatured)
    },[ hotelsFeatured])



    return (
            <div className="w-full flex space-between space-x-4">
            
            {
            
            data?.map((hotel) => (

                <div key={hotel._id} className="w-full flex flex-col justify-between space-y-2 group cursor-pointer">
                    <img
                    src={hotel.photos[0]}
                    alt=""
                    className="w-full h-28 sm:h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"/>
                    
                    <div className='flex flex-col justify-between space-y-2'>

                    <span className=" text-[12px] sm:text-[15px] text-[#333] font-bold">{hotel.name}</span>
                    <span className="text-[11px] sm:text-[13px]">{hotel.city}</span>
                    <span className="text-[11px] sm:text-[13px] font-bold">Starting from ${hotel.cheapestPrice}</span>
                    
                    {hotel.rating &&     
                    <div className="">
                        <button className="bg-[#003580] text-white font-bold p-1 mr-[5px] rounded-md text-[11px] sm:text-[15px]">{hotel.rating}</button>
                        <span className='text-[11px] sm:h-[15px]'>Excellent</span>
                    </div>
                    }

                    </div>
                </div>
            
            ))
            
            }
            

            </div>
        );
}

export default FeaturedProperties