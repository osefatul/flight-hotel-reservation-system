import React, { useEffect, useState } from "react";
import "./topbar.css";
import { useDispatch, useSelector } from "react-redux";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../../../features/authSlice/loginSlice";

function Topbar() {

  const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userToken, setUserToken] = useState(
        sessionStorage.getItem("accessJWT")
        );
    const dispatch = useDispatch();

    useEffect(() => {
        if(user && userToken) dispatch(loginSuccess(user));

    },[user,userToken ])




  return (
    <div className="topbar bg-black mb-2 ">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="text-white font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-2xl">T&S Booking Admin Panel </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img
            src="http://conciergeunlimited.com/wp-content/uploads/2016/04/Office-Managers.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
