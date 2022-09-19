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
import { FetchingAHotel } from "../../../../features/hotelSlice/hotelAction";



function HotelDetails() {
  const dispatch = new useDispatch()
  const {id} = useParams()
  const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
  const [info, setInfo] = useState({});
  const [selectRooms, setSelectRooms] = useState([]);

  const {isLoading, error, rooms} = useSelector(state => state.rooms)
  const { hotel} = useSelector(state => state.hotels)

  
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    // Create array from selectedOptions, only take value property of the option.
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    setSelectRooms(value);
  };

  useEffect(() => {
    dispatch(fetchingRooms())
    dispatch(FetchingAHotel(id))
  },[])

  // return (

  //   <div>
  //     <div className = "bg-black sticky z-50 top-0 ">
  //       <Navbar  />
  //     </div>

  //     <div className="flex w-full">
  //         <div className="w-[15%]">
  //           <Sidebar />
  //         </div>



  //         <div className="w-[85%] product ">
  //           <div className="productTitleContainer px-5 mt-10">
  //             <h1 className="productTitle font-bold">Hotel</h1>
            
  //           </div>
  //           <div className="productTop">
  //             <div className="productTopLeft">
  //               <Charts data={productData} dataKey="Sales" title="Sales Performance" />
  //             </div>
  //             <div className="productTopRight">
  //               <div className="productInfoTop">
  //                 <img
  //                   src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  //                   alt=""
  //                   className="productInfoImg"
  //                 />
  //                 <span className="productName">Apple Airpods</span>
  //               </div>
  //               <div className="productInfoBottom">
  //                 <div className="productInfoItem">
  //                   <span className="productInfoKey">id:</span>
  //                   <span className="productInfoValue">123</span>
  //                 </div>
  //                 <div className="productInfoItem">
  //                   <span className="productInfoKey">sales:</span>
  //                   <span className="productInfoValue">5123</span>
  //                 </div>
  //                 <div className="productInfoItem">
  //                   <span className="productInfoKey">active:</span>
  //                   <span className="productInfoValue">yes</span>
  //                 </div>
  //                 <div className="productInfoItem">
  //                   <span className="productInfoKey">in stock:</span>
  //                   <span className="productInfoValue">no</span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="productBottom">
  //             <form className="productForm">
  //               <div className="productFormLeft">
  //                 <label>Product Name</label>
  //                 <input type="text" placeholder="Apple AirPod" />
  //                 <label>In Stock</label>
  //                 <select name="inStock" id="idStock">
  //                   <option value="yes">Yes</option>
  //                   <option value="no">No</option>
  //                 </select>
  //                 <label>Active</label>
  //                 <select name="active" id="active">
  //                   <option value="yes">Yes</option>
  //                   <option value="no">No</option>
  //                 </select>
  //               </div>
  //               <div className="productFormRight">
  //                 <div className="productUpload">
  //                   <img
  //                     src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  //                     alt=""
  //                     className="productUploadImg"
  //                   />
  //                   <label for="file">
  //                     <Publish />
  //                   </label>
  //                   <input type="file" id="file" style={{ display: "none" }} />
  //                 </div>
  //                 <button className="productButton">Update</button>
  //               </div>
  //             </form>
  //           </div>
  //         </div>
  //     </div>
  //   </div>

  // );

  return (
  <div>
  <div className = "bg-black sticky z-50 top-0 ">
    <Navbar  />
  </div>
  
  <div className="flex w-full space-x-4">

    <div className="w-[15%]">
      <Sidebar />
    </div>

    <form className="flex flex-col sm:flex-row w-[85%] relative">
      <h1 className=" absolute font-bold text-[18px] pt-10 pl-10">Edit Hotel</h1>
      
      {/* Left Side */}
      <div className="w-[20%] flex flex-col items-center justify-center">      
        <div className="flex flex-col items-center justify-center space-y-10">
        
          
          <div>
            <label htmlFor="file" className="border rounded-md shadow-lg p-2 tex-[9px] sm:text-[12px]"> <DriveFolderUploadOutlinedIcon className="icon" /> Upload Images</label>
            <input type="file"
              id="file"
              multiple
              onChange= ""
              // onChange={(e)=> setFiles(e.target.files[0])}
              style={{ display: "none" }}
            />
          </div>

          
        </div>
      </div>



      {/* Right Side */}
      <div className=" w-[70%] flex flex-col space-y-1 items-center justify-center pt-10">
        
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
          // onClick={handleClick} 
          className=" border border-1 bg-blue-800 mt-4 text-white rounded-sm w-full">Create</button>
        </div>
      </div>

    </form>

  </div>
</div>
);

}

export default HotelDetails;
