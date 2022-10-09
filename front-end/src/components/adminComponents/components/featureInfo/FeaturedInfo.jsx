
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersStats } from "../../../../features/usersSlice/usersAction";
import {FetchingOrdersRevenue, FetchingOrdersStats} from"../../../../features/ordersSlice/ordersAction"
import "./featuredInfo.css";
import OverviewComponents from "./OverviewComponents";
import WidgetLarge from "../widgetLarge/WidgetLarge";


function FeaturedInfo() {

  const {isLoading,usersStats} = useSelector(state => state.users)
  const {isStatsLoading,ordersStats} = useSelector(state => state.orders)
  const {isRevenueLoading,ordersRevenue} = useSelector(state => state.orders)



  return (

    <div className="flex items-center">

      <div className="flex justify-between bg-slate-700 rounded-md w-max items-center text-white p-2 pt-20 space-x-4 relative shadow-xl text-slate-200">

        <div className="absolute top-2 left-6">
          <h1 className="font-bold text-2xl">
            Overview
          </h1>
          <p className="text-sm ">How is your business performing comparatively speaking...</p>
        </div>

        <OverviewComponents 
        dataType="Revenue" 
        fetchStats={FetchingOrdersRevenue} 
        arrayData={ordersRevenue} 
        loading ={isRevenueLoading}/>

        <OverviewComponents 
        dataType="Users" 
        fetchStats={getUsersStats} 
        arrayData={usersStats} 
        loading ={isLoading}/>
        
        <OverviewComponents 
        dataType="Bookings" 
        fetchStats={FetchingOrdersStats} 
        arrayData={ordersStats}
        loading ={isStatsLoading}/>

      </div>


      <WidgetLarge />
    </div>
  );
}

export default FeaturedInfo;
