import React, { useEffect, useState } from "react";
import "./sidebar.css";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
  Room,
  Flight,
  HolidayVillage,
  MenuBook,
  ProductionQuantityLimits,
  AddBusiness
} from "@mui/icons-material";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { getSelected } from "../../../../features/selectedSidebar/selectedSidebarSlice";

function Sidebar() {

  // UseState doesn't work in this case as it has delay.
  const {selected}  = useSelector(state => state.selectedSidebar)

  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const tabs = [
    {id:0, title:"Home", url:"" ,Icon: LineStyle },
    {id:1, title:"Users", url:"users", Icon:PermIdentity}, 
    {id:2, section:"Stays", title:"Hotels", url:"hotels", Icon:HolidayVillage},
    {id:3, title:"Rooms", url:"rooms", Icon: Storefront},
    {id:4, title:"Reserved Rooms", url:"reserved-rooms", Icon: AddBusiness},
    {id:6, section:"Travel", title:"Flights", url:"flights", Icon: Flight},
    {id:7, title:"Bookings", url:"bookings", Icon: MenuBook},
    {id:8, section:"Cart", title:"Orders", url:"orders", Icon: ProductionQuantityLimits}



] 



const handleSubmit =  (index, url) =>{
  dispatch(getSelected(index))
  navigate(`/admin/${url}`)        
  }
  return (

    <div className="homeHeight pb-4 flex flex-col sticky z-50 top-[70px]">
          <h1 className="px-2 text-xl text-slate-700 font-bold pb-4">Dashboard</h1>
          <div className='flex flex-col space-y-2 text-sm '>
            {tabs.map((tab ,index)=>(
              <div>
                {"section" in tab? 
                <h2 className="px-2 text-gray-400 font-bold pb-1">{tab.section}</h2> 
                : " "}
                <motion.div 
                  key={index}
                  className={`${index === selected && " border-l-4 border-blue-800 bg-slate-300 hover:shadow-md  "} w-full h-8 flex text-[10px] items-center justify-start px-2 hover:bg-slate-300 hover:shadow-md ` }
                  onClick={() => handleSubmit(index, tab.url)}>
                    <motion.p 
                    className=" cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    >
                      <tab.Icon/> {tab.title}
                    </motion.p>
                </motion.div>
              </div>

            ))}
          </div>
          <h2></h2>
    </div>

    )
}

export default Sidebar;
