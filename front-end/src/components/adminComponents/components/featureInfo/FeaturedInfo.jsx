
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

    <div className="flex sm:flex-row flex-col items-center space-y-3 sm:space-y-0 sm:space-x-2">

      <div className="flex justify-between bg-slate-700 rounded-md h-max sm:h-56 space-y-4 w-full items-center text-white p-2 pt-20 sm:space-x-4 relative shadow-xl text-slate-200">

        <div className="absolute top-2 left-6 space-y-2">
          <h1 className="font-bold text-2xl">
            Overview
          </h1>
          <p className="text-sm ">How is your business performing comparatively speaking...</p>
        </div>

        <div className= "flex flex-col sm:flex-row w-full space-y-3 sm:space-y-0 sm:space-x-2">
          <OverviewComponents
          className="" 
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
      </div>

      <div className="flex items-start bg-slate-700 rounded-md h-max sm:h-56 items-center text-white relative shadow-xl text-slate-200 w-full">
      <WidgetLarge />
      </div>

    </div>
  );
}

export default FeaturedInfo;
