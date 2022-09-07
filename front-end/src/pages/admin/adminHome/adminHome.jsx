import React, { useEffect, useState } from "react";
import WidgetLarge from "../../../components/adminComponents/components/widgetLarge/WidgetLarge";
import WidgetSmall from "../../../components/adminComponents/components/widgetSmall/WidgetSmall";
import Charts from "../../../components/adminComponents/components/charts/Charts";
import FeaturedInfo from "../../../components/adminComponents/components/featureInfo/FeaturedInfo";
import Topbar from "../../../components/adminComponents/components/topbar/Topbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import { userData } from "../../../dummyData";
import "./adminHome.css";
import CopyRightMark from "../../../components/CopyRightMark";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../../features/authSlice/loginSlice";
import Navbar from "../../../components/Navbar";



function AdminHome() {
    const navigate = useNavigate()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userToken, setUserToken] = useState(
        sessionStorage.getItem("accessJWT")
        );
    const dispatch = useDispatch();

    useEffect(() => {
      /* we don't use API to fetch data for redux slice after loggings. 
      we received user data from localStorage and then send it to redux */
        if(user && userToken) dispatch(loginSuccess(user));

    },[user,userToken ])
  return (

    <div>
      
      {/* <Topbar className = "" />
       */}
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>
      
      <div className="flex w-full">
        <div className="w-[20%]">
        <Sidebar />
        </div>

        <div className="w-[70%] mt-2 ">
              <FeaturedInfo />
              <Charts
                data={userData}
                title="User Analytics"
                grid
                dataKey="Active User"
                />
              <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
              </div>
        </div>
      
      
      </div>

      <CopyRightMark />
    </div>
    
    
  );
}

export default AdminHome;
