import React, { useEffect, useState } from "react";
import "./hotelDetails.css";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

import { productData } from "../../../../dummyData";
import { Publish } from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import Charts from "../../../../components/adminComponents/components/charts/Charts";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchingRooms } from "../../../../features/roomSlice/roomAction";
import { FetchingAHotel, updatingHotel } from "../../../../features/hotelSlice/hotelAction";
import axios from "axios";



function HotelDetails() {
  const dispatch = new useDispatch()
  const {id} = useParams()

  const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
  const [info, setInfo] = useState({}); //form info
  const [files, setFiles]= useState([]) //uploading pictures array

  const [selectRooms, setSelectRooms] = useState([]);
  const [filesUploaded, setFilesUploaded]= useState()


  const {isLoading, rooms} = useSelector(state => state.rooms)
  const { hotels, hotel} = useSelector(state => state.hotels)


  const uploadMultipleImages = (e)=>{
    e.preventDefault()
    let images = [];
    setFilesUploaded(e.target.files)
    for (let i=0; i< e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
    }
    setFiles([...images]);
  }
  
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // console.log(info)
  };

  const handleSelect = (e) => {
    // Create array from selectedOptions, only take value property of the option.
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    console.log(value)
    setSelectRooms(value);
  };


  const handleClick = async (e) => {
    e.preventDefault();
    
    try{
      if(filesUploaded){
        const list = await Promise.all(
          Object.values(filesUploaded).map( async file => {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "hotelReservationRooms")
  
            
            const uploadRes = await axios.post(
              "https://api.cloudinary.com/v1_1/ddgn3r0t2/image/upload",
              data, axios.defaults.withCredentials = false
            )
  
          const {url} = uploadRes.data;
          return url;
          })
          )
  
          const newHotel = {
            ...info, rooms:selectRooms, photos:list
          }
          console.log(newHotel)
          dispatch(updatingHotel(id, newHotel))
          setMessageAddedAlert(true)

          //After update refetch Rooms and hotel
          dispatch(fetchingRooms())
          dispatch(FetchingAHotel(id))

      }
      else{
        const newHotel = {
          ...info, rooms:selectRooms
        }
        console.log(newHotel)
        dispatch(updatingHotel(id, newHotel))
        setMessageAddedAlert(true)
        
        //After update refetch Rooms and hotel
        dispatch(fetchingRooms())
        dispatch(FetchingAHotel(id))
      }


    }catch(error){
      console.log(error)
    }
  }


  useEffect(() => {
    dispatch(fetchingRooms())
    dispatch(FetchingAHotel(id))
  },[])


  useEffect(()=>{
    setTimeout(()=>{
      setMessageAddedAlert(false);
    },4000)
  },[MessageAddedAlert])



  return (
  <div>
  <div className = "bg-black sticky z-50 top-0 ">
    <Navbar  />
  </div>
  
  <div className="flex w-full space-x-4">

    <div className="w-[15%]">
      <Sidebar />
    </div>

    

    <form onSubmit={handleClick} className="flex flex-col relative w-[80%]">

        {MessageAddedAlert && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{hotels?.message}</div> }

      <div className="flex flex-col sm:flex-row w-full relative">
        <h1 className=" absolute font-bold text-[18px] pt-10 pl-10">Edit Hotel</h1>
        
        {/* Left Side */}
        <div className="w-[40%] flex flex-col items-center justify-center">      
              <div className="flex flex-col items-center justify-center space-y-10">

                <div className="flex flex-wrap space-x-1">
                  {

                  files?.length>0 ?
                  files?.map(
                    file => (
                    <img
                    className="w-12 h-12 object-cover rounded-sm"
                  src={file} key={file} alt="" />
                    )):
                    hotel?.photos?.length>0 ?
                    hotel?.photos?.map(
                      file => (
                      <img
                      className="w-12 h-12 object-cover rounded-sm"
                    src={file} key={file} alt="" />
                      ))
                    : <div className="text-gray-500">No image found</div>
                  }
                </div>
              
                
                <div>
                  <label htmlFor="file" className="border rounded-md shadow-lg p-2 text-[12px]"> <DriveFolderUploadOutlinedIcon className="icon" /> Upload Images</label>
                  <input type="file"
                    id="file"
                    multiple
                    onChange={uploadMultipleImages}
                    // onChange={(e)=> setFiles(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>

                
              </div>
          </div>



        {/* Right Side */}
        <div className=" w-[60%] flex flex-col space-y-1 items-center justify-center pt-10 pr-10">
          
          <div className="flex space-x-2 w-full ">
            {/* Inputs */}
            <div className="flex flex-col space-y-2 w-full ">
              <div className="text-[12px] w-full ">
                <input 
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                type="text" 
                placeholder={hotel.type}
                id="type"
                onChange={handleChange} />
              </div>

              <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="title"
                placeholder={hotel.title}
              onChange={handleChange}/>
              </div>

              <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" 
                placeholder={hotel.name}
                id="name"
                onChange={handleChange} />
              </div>
              
              <div className="text-[12px] w-full ">
                <input type="text" 
                placeholder={hotel.distance}
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="distance"
                onChange={handleChange} />
              </div>

              <div className="text-[12px] w-full ">
                <input type="number" 
                placeholder={hotel.cheapestPrice}
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                id="cheapestPrice"
                onChange={handleChange} />
              </div>
            
              <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder={hotel.address}
                id="address"
                onChange={handleChange} />
              </div>

              <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder={hotel.city}
                id="city"
                onChange={handleChange}/>
                </div>

              <div className="text-[12px] w-full ">
                <input type="text"
                className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                placeholder="Country"
                id="country"
                onChange={handleChange}/>
              </div>

              <div className="text-[12px] w-full ">
                <textarea type="text" rows="4" cols="50"
                  placeholder={hotel.desc}
                  className="border border-1 border-black placeholder:pl-1 rounded-sm w-full"
                  id="desc"
                  onChange={handleChange} />
              </div>

            </div>              
          
          {/* Featured and rooms */}
            <div className="flex flex-col space-y-3">
                <div className="text-[12px] w-full ">
                  <label>Featured</label>
                  <select className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" id="featured" onChange={handleChange}>
                    <option value={false}>No</option>
                    <option value={true}>Yes</option>
                  </select>
                </div>

                <div className="text-[12px] w-full ">
                  <label>Rooms</label>
                  <select className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" id="rooms" multiple onChange={handleSelect}>
                    {isLoading
                      ? "loading"
                    :rooms.map((room) => (
                        <option key={room._id} value={room._id}>
                          {room.title}
                        </option>
                      ))}
                  </select>
                </div>
            </div>

          </div>
        
          {/* submit button */}
          <div className="flex flex-col items-start w-full ">
            <button 
            type="submit"
            onClick={handleClick} 
            className=" border border-1 bg-blue-800 mt-4 text-white rounded-sm w-full">Create</button>
          </div>
        </div>
      </div>

    </form>

  </div>
</div>
);

}

export default HotelDetails;
