import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchingHotelsByCity, fetchingHotelsByType } from '../features/hotelSlice/hotelAction';

function Featured() {

  const dispatch = useDispatch();
  const {isLoading,
    error,
    HotelsInTheCities,
    } = useSelector(state => state.hotels)


  useEffect(() =>{
    dispatch(fetchingHotelsByCity())
  },[])


  const cityData = [
    {photo: "https://vancouver.ca/images/cov/feature/geography-landing.jpg", 
    city:"Vancouver",
    hotelsInTheCity:HotelsInTheCities[0]
  },
    {photo: "https://www.travelandleisure.com/thmb/JWO4CNVDNSR-aLDBT93jVlHV1DQ=/1800x1200/filters:fill(auto,1)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg",
      city:"New York", hotelsInTheCity:HotelsInTheCities[1]},
    {photo: "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg",
    city: "Dubai",hotelsInTheCity:HotelsInTheCities[2]
  }
  ]


  return (
    <div className=" cursor-pointer w-full flex justify-between space-x-4">
      {cityData?.map((item,index )=>(

        <div className="group relative w-full">
          <img
            src={item.photo}
            alt=""
            className="object-cover h-full w-full rounded-lg group-hover:scale-105 transition-transform duration-200 ease-in-out"
            />
          <div className="absolute bottom-4 left-4 text-white font-bold text-[12px] space-y-2 md:text-xl lg:text-3xl">
            <h1>{item.city}</h1>
            <h2 className='text-md'>{item.hotelsInTheCity} properties</h2>
          </div>
      
        </div>
      ))}
    
    
  </div>
  )
}

export default Featured