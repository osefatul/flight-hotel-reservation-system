import React, { useEffect } from "react";
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
import { getUserData } from "../../../../features/usersSlice/usersAction";
import Navbar from "../../../../components/Navbar";

function User() {
  const dispatch = useDispatch()
  const {id} = useParams()
  const {isLoading ,error, requestedUser} = useSelector(state => state.users)


  useEffect(()=>{
    dispatch(getUserData(id))
  },[])



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
              <form className="userUpdateForm">

                <div className="userUpdateLeft">
                  <div className="userUpdateItem">
                    <label>Username</label>
                    <input
                      type="text"
                      placeholder={requestedUser.username}
                      className="userUpdateInput"
                    />
                  </div>

                  <div className="userUpdateItem">
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder={requestedUser.email}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Phone</label>
                    <input
                      type="text"
                      placeholder={`+ ${requestedUser.phone}`}
                      className="userUpdateInput"
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder={`${requestedUser.city} | ${requestedUser.country}`}
                      className="userUpdateInput"
                    />
                  </div>
                </div>

                <div className="userUpdateRight">
                  <div className="userUpdateUpload">
                    <img
                      className="userUpdateImg"
                      src={requestedUser.img? requestedUser.img : "https://dcpcsb.org/themes/copycat/images/profile.png"}
                      alt=""
                    />
                    <label htmlFor="file">
                      <Publish className="userUpdateIcon" />
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} />
                  </div>
                  <button className="userUpdateButton">Update</button>
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
