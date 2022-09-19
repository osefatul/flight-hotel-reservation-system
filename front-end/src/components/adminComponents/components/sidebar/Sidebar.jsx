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
  Room
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
    {id:2, title:"Hotels", url:"hotels", Icon:Room},
    {id:3, title:"Room", url:"rooms", Icon: Storefront},
    {id:4, title:"Reserved", url:"reserved-rooms", Icon: Timeline}
] 



const handleSubmit =  (index, url) =>{
  dispatch(getSelected(index))
  navigate(`/admin/${url}`)        
  }
  return (

    <div className="homeHeight flex flex-col sticky z-50 top-[50px]">
          <h3 className="px-2 text-gray-400 font-bold pb-4">Dashboard</h3>
          <div className='flex flex-col space-y-4 text-sm '>
            {tabs.map((tab ,index)=>(
                <motion.div 
                key={index}
                
                className={`${index === selected && " border-l-4 border-blue-800 bg-slate-300 hover:shadow-md  "} w-full h-8 flex text-[12px] items-center justify-start px-2 hover:bg-slate-300 hover:shadow-md ` }
                onClick={() => handleSubmit(index, tab.url)}
                >
                    <motion.p 
                    className=" cursor-pointer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    >
                      <tab.Icon/> {tab.title}
                    </motion.p>
                </motion.div>
            ))}
          </div>
    </div>

    )
}

export default Sidebar;
