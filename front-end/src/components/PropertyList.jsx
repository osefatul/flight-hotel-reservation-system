import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchingHotelsByCity, fetchingHotelsByType } from '../features/hotelSlice/hotelAction';

function PropertyList() {

  
  const dispatch = useDispatch();
  const {isLoading,
    error,
    hotelTypes,} = useSelector(state => state.hotels)

    const images = [
      "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",

      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",

      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",

      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",

      "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
    ];
  

  useEffect(() =>{
    dispatch(fetchingHotelsByType())
  },[])



  return (

    <div className="w-full flex space-between space-x-4">

      {
        hotelTypes && images.map((image, i)=> (

          <div key = {i} className="cursor-pointer w-full "> 
        <img
          src= {image}
          alt=""
          className="w-full h-20 sm:h-36 object-cover rounded-md "/>
        <div className="">
          <h1 className="text-[12px] sm:text-md font-bold capitalize" >{hotelTypes[i]?.type}</h1>
          <h2 className="text-[11px] sm:text-md capitalize" >{hotelTypes[i]?.count + " " + hotelTypes[i]?.type} </h2>
        </div>
      </div>
          ))
        }


    </div>
  ); 
}

export default PropertyList