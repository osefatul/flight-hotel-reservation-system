import React, { useEffect, useState } from "react";
import "./user.css";
import {
  PermIdentity,
  CalendarToday,
  PhoneAndroid,
  MailOutline,
  LocationSearching,
  Publish,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { getUserData, UpdatingAUser } from "../../../../features/usersSlice/usersAction";
import Navbar from "../../../../components/Navbar";
import axios from "axios";

function User() {
  const dispatch = useDispatch()
  const {id} = useParams()

  const [file, setFiles] = useState()
  const [info, setInfo] = useState({});
  const[MessageAddedAlert, setMessageAddedAlert] = useState(false)

  const {isLoading ,error, usersStats, requestedUser} = useSelector(state => state.users)


  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    console.log(info)

  };



  const handleClick = async (e)=>{
    e.preventDefault()
    const data = new FormData();
    
    try {
      
      if(file){
        data.append("file", file);
        data.append("upload_preset", "hotelReservation");

        const uploadRes = await axios.post(
          //I used the foldername as: hotelReservation/newUser in the cloudinary
          "https://api.cloudinary.com/v1_1/ddgn3r0t2/image/upload",
          data,
          data, axios.defaults.withCredentials = false
        );
  
        const { url } = uploadRes.data;
        const updateUser = {
          ...info,
          img: url,
        };
        
        dispatch(UpdatingAUser(id, updateUser ))
        setMessageAddedAlert(true)//To turn on message alert
        dispatch(getUserData(id))

      }
      else{
        dispatch(UpdatingAUser(id, info ))
        setMessageAddedAlert(true)//To turn on message alert
        dispatch(getUserData(id))

      }
        // setInfo({})
      // dispatch(getUserData(id))


    } catch (err) {
      console.log(err);
    }
  };


  useEffect(()=>{
    dispatch(getUserData(id))
  },[])

  
  useEffect(()=>{
    setTimeout(()=>{
      setMessageAddedAlert(false);
    },5000)
  },[MessageAddedAlert])



  return (
    <div>
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>
      
      <div className="flex w-full">

        <div className="w-[15%]">
          <Sidebar />
        </div>

        <div className="user w-[85%]">

          {MessageAddedAlert && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{usersStats}</div> }

          <div className="userTitleContainer">
            <h1 className="userTitle font-bold">Edit User</h1>
          </div>

          <div className="userContainer">

            <div className="userShow">
              <div className="userShowTop">
                <img
                  src={requestedUser.img? requestedUser.img : "https://dcpcsb.org/themes/copycat/images/profile.png"}
                  alt=""
                  className="userShowImg"
                />
              
              </div>
              <div className="userShowBottom">
                <span className="userShowTitle">Account Details</span>
                <div className="userShowInfo">
                  <PermIdentity className="userShowIcon" />
                  <span className="userShowInfoTitle">{requestedUser.username}</span>
                </div>
                <div className="userShowInfo">
                  <CalendarToday className="userShowIcon" />
                  <span className="userShowInfoTitle">13-08-1994</span>
                </div>
                <span className="userShowTitle">Contact Details</span>
                <div className="userShowInfo">
                  <PhoneAndroid className="userShowIcon" />
                  <span className="userShowInfoTitle">+1 {requestedUser.phone}</span>
                </div>
                <div className="userShowInfo">
                  <MailOutline className="userShowIcon" />
                  <span className="userShowInfoTitle">{requestedUser.email}</span>
                </div>
                <div className="userShowInfo">
                  <LocationSearching className="userShowIcon" />
                  <span className="userShowInfoTitle">{requestedUser.city}, {requestedUser.country}</span>
                </div>
              </div>
            </div>


            <div className="userUpdate">
              <span className="userUpdateTitle">Edit</span>
              <form className="userUpdateForm" onSubmit={handleClick}>

                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      id="username"
                      type="text"
                      onChange={handleChange}
                      placeholder={requestedUser.username}
                      className="!outline-none userUpdateInput "
                    />
                  </div>

                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      id="email"
                      onChange={handleChange}
                      placeholder={requestedUser.email}
                      className=" !outline-none userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      id="phone"
                      placeholder={`+ ${requestedUser.phone}`}
                      className="!outline-none userUpdateInput"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      onChange={handleChange}
                      id="city"
                      placeholder={`${requestedUser.city}`}
                      className="!outline-none userUpdateInput"
                    />
                  </div>

                  <div className="userUpdateItem">
                    <label>isAdmin</label>
                    <select className="border border-1 border-black placeholder:pl-1 rounded-sm w-full" id="isAdmin" defaultValue
                      onChange={handleChange}>
                      <option disabled value> {`${requestedUser.isAdmin}`} </option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </select>
                  </div>
                </div>

                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src={file ? URL.createObjectURL(file) : requestedUser.img ? requestedUser.img: "https://dcpcsb.org/themes/copycat/images/profile.png" }
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" onChange= {(e) => setFiles(e.target.files[0])} style={{ display: "none" }} />
                  </div>
                  <button type="submit" className="userUpdateButton">Update</button>
                </div>
                
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>


  );
}

export default User;
