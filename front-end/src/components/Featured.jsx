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


  return (
    <div className="w-full flex justify-between space-x-2 ">
      
      <div className="relative w-full">
        <img
          src="https://vancouver.ca/images/cov/feature/geography-landing.jpg"
          alt=""
          className="object-cover h-full w-full rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white font-bold text-[12px] space-y-2 md:text-xl lg:text-3xl">
          <h1>Vancouver</h1>
          <h2 className='text-md'>{HotelsInTheCities[0]} properties</h2>
        </div>
      
      </div>
    
      <div className="relative w-full">
        <img
          src="https://www.travelandleisure.com/thmb/JWO4CNVDNSR-aLDBT93jVlHV1DQ=/1800x1200/filters:fill(auto,1)/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"
          alt=""
          className="object-cover h-full w-full rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white font-bold text-[12px] space-y-2 md:text-xl lg:text-3xl">
          <h1>New York</h1>
          <h2>{HotelsInTheCities[1]} properties</h2>
        </div>
      </div>

      <div className="relative w-full">
        <img
          src="https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"
          alt=""
          className="object-cover h-full w-full rounded-lg"
        />
        <div className="absolute bottom-4 left-4 text-white font-bold text-[12px] space-y-2 md:text-xl lg:text-3xl">
          <h1>Dubai</h1>
          <h2>{HotelsInTheCities[2]} properties</h2>
        </div>
      </div>
  </div>
  )
}

export default Featured