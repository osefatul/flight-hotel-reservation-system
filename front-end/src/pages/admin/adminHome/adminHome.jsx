import React, { useEffect, useState } from "react";
import Charts from "../../../components/adminComponents/components/charts/Charts";
import FeaturedInfo from "../../../components/adminComponents/components/featureInfo/FeaturedInfo";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import { userData } from "../../../dummyData";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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
      
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>
      
      <div className="flex w-full space-x-4 justify-between">
        <div className="w-[10%] ">
        <Sidebar />
        </div>

        <div className="w-[85%] mt-2 p-2 px-8 space-y-4">
              <FeaturedInfo />
              <Charts
                data={userData}
                title="Last 7 Days Revenue"
                grid
                dataKey="Active User"
                />
        </div>
      
      
      </div>
    </div>
    
    
  );
}

export default AdminHome;
