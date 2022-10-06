
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStats } from "../../../../features/usersSlice/usersAction";
import {FetchingOrdersStats} from"../../../../features/ordersSlice/ordersAction"
import "./featuredInfo.css";
import OverviewComponents from "./OverviewComponents";


function FeaturedInfo() {

  const {usersStats} = useSelector(state => state.users)
  const {ordersStats} = useSelector(state => state.orders)




  return (
    <div className="flex justify-between bg-slate-700 rounded-md w-max items-center text-white p-2 pt-20 space-x-4 relative shadow-xl text-slate-200">

      <div className="absolute top-2 left-6">
        <h1 className="font-bold text-2xl">
          Overview
        </h1>
        <p className="text-sm ">How is your business performing comparatively speaking...</p>
      </div>

      <div className="p-2  bg-slate-900 rounded-lg space-y-3">
        <span className="font-bold text-md">Revenue</span>
        <div className="flex items-center justify-between space-x-4">
          <span className="font-bold text-lg">$2,550</span>
          <span className="text-red-600 negative flex items-center text-[12px] ">
            -11.4%
          </span>
        </div>
        <span className="text-slate-400 text-[10px]">Compared to last month</span>
      </div>

      <OverviewComponents dataType="Users" fetchStats={getUsersStats} arrayData={usersStats}/>

      <OverviewComponents dataType="Bookings" fetchStats={FetchingOrdersStats} arrayData={ordersStats}/> 

    </div>
  );
}

export default FeaturedInfo;
