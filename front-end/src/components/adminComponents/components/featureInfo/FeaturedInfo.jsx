import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
// import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
// import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.css";
function FeaturedInfo() {
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

      <div className="p-2 bg-slate-900 rounded-lg space-y-3">
        <span className="font-bold text-md">Users</span>
        <div className="flex items-center justify-between space-x-4">
          <span className="font-bold text-lg">10</span>
          <span className="text-green-600 flex items-center text-[12px] ">
            +11.4 
          </span>
        </div>
        <span className="text-slate-400 text-[10px]">Compared to last month</span>
      </div>

      {/* <div className="p-2 bg-slate-900 rounded-lg space-y-3">
        <span className="font-bold text-md">Sales</span>
        <div className="flex items-center justify-between space-x-4">
          <span className="font-bold text-lg">$2,550</span>
          <span className="text-red-600 flex items-center text-[12px] ">
            -1.4 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div> */}


      <div className="p-2 bg-slate-900 rounded-lg space-y-3">
        <span className="font-bold text-md">Bookings</span>
        <div className="flex items-center justify-between space-x-4">
          <span className="font-bold text-lg">25</span>
          <span className="text-green-600 flex items-center text-[12px] ">
            +2.4
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

    </div>
  );
}

export default FeaturedInfo;
