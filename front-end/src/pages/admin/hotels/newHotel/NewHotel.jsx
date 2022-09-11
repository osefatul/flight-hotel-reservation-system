import "./newHotel.css";
import React, { useState } from "react";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../../components/Navbar";
import { useSelector } from "react-redux";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

export default function NewHotel() {
  const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
  const {isLoading, status, message} = useSelector(state => state.register)

  const [file, setFile]= useState("")
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (

    // <div>
    //   <div className = "bg-black sticky z-50 top-0 ">
    //     <Navbar  />
    //   </div>

    //   <div className="flex w-full">

    //     <div className="w-[20%]">
    //     <Sidebar />
    //     </div>

    //     <div className="newProduct mt-10 pl-24">
    //       <h1 className="addProductTitle font-bold text-[20px] mb-10">New Hotel</h1>
    //       <form className="addProductForm ">
    //         <div className="addProductItem text-[12px]">
    //           <label>Image</label>
    //           <input type="file" id="file" />
    //         </div>
    //         <div className="addProductItem text-[12px]">
    //           <label>Name</label>
    //           <input className="border text-[12px]" type="text" placeholder="Apple Airpods" />
    //         </div>
    //         <div className="addProductItem text-[12px]">
    //           <label>Stock</label>
    //           <input  className="border text-[12px]" type="text" placeholder="123" />
    //         </div>
    //         <div className="addProductItem text-[12px]">
    //           <label>Active</label>
    //           <select className="border text-[12px]" name="active" id="active">
    //             <option value="yes">Yes</option>
    //             <option value="no">No</option>
    //           </select>
    //         </div>
    //         <button className="addProductButton flex w-44 items-center justify-center">Create</button>
    //       </form>
    //     </div>
    //   </div>
    // </div>


      <div>
      
        <div className = "bg-black sticky z-50 top-0 ">
          <Navbar  />
        </div>
  
        {MessageAddedAlert && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{message}</div> }
        
        <div className="flex w-full">
  
          <div className="">
          <Sidebar />
          </div>
  
          <form className="flex w-full relative">
            <h1 className=" absolute font-bold text-[18px] pt-10 pl-10">Create New User</h1>
            
            <div className="w-[40%] flex flex-col items-center justify-center">      
              <div className="flex flex-col items-center justify-center space-y-10">
                
                <img
                className="w-56 h-56 borderRadius object-cover"
                src={file? URL.createObjectURL(file): "https://dcpcsb.org/themes/copycat/images/profile.png"} alt="" />
                
                <div>
                  <label htmlFor="file" className="border rounded-md shadow-lg p-2"> <DriveFolderUploadOutlinedIcon className="icon" /> Upload Images</label>
                  <input type="file"
                    id="file"
                    onChange={(e)=> setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
  
                
              </div>
            </div>
  
            <div className=" addProductForm flex flex-col gap-0 gap-y-0 items-center justify-center">

                <div className="addProductItem text-[12px]">
                  <input 
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                  type="text" 
                  placeholder="Type"
                  id="type"
                  onChange={handleChange} />
                </div>

                <div className="addProductItem text-[12px]">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                  id="title"
                placeholder="Title"
                onChange={handleChange}/>
                </div>

                <div className="addProductItem text-[12px]">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm" 
                  placeholder="Name"
                  id="name"
                  onChange={handleChange} />
                </div>
                
                <div className="addProductItem text-[12px]">
                  <input type="text" placeholder="Distance"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                id="distance"
                onChange={handleChange} />
                </div>
                <div className="addProductItem text-[12px]">
                  <input type="number" placeholder="Cheapest Price"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                id="cheapestPrice"
                onChange={handleChange} />
                </div>
              
                <div className="addProductItem text-[12px]">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                placeholder="Address"
                id="address"
                onChange={handleChange} />
                </div>
                <div className="addProductItem text-[12px]">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                placeholder="City"
                id="city"
                onChange={handleChange}/>
                </div>
                <div className="addProductItem text-[12px]">
                  <input type="text"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                placeholder="Country"
                id="country"
                onChange={handleChange}/>
                </div>

                <div className="addProductItem text-[12px]">
                  <textarea type="text" row="5" placeholder="Description"
                  className="border border-1 border-black placeholder:pl-1 rounded-sm"
                  id="description"
                  onChange={handleChange} />
                </div>
  
                <div className="addProductItem text-[12px]">
                
                  <button  
                  // onClick={handleClick} 
                  className="newUserButton w-full ">Create</button>
                </div>
            </div>
  
          </form>
  
        
  
        </div>
  
      </div>
  
  


  );
}
