import React from 'react'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; 
import { useState } from "react";
import StaysOptions from './StaysOptions';
import { useSelector } from 'react-redux';

function Header({type}) {

const {user} = useSelector(state => state.login);

    return (
        <div className="bg-black text-white flex flex-col py-3 pt-4 w-[75%] mx-auto ">
            
            <div className={type === "list"? "w-full": "space-y-4" }>



                <div className="flex justify-between items-center space-x-4">
                    <motion.div className="flex items-center space-x-2 pl-2 cursor-pointer w-full bg-amber-500 text-black rounded-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </motion.div>

                    <motion.div className="flex items-center space-x-2 pl-2 cursor-pointer w-full bg-amber-500 text-black rounded-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.9 }}>
                        <FontAwesomeIcon icon={faPlane} />
                        <Link to ="/flights" >
                        <span>Travels</span>
                        </Link>
                    </motion.div >
                </div>

                {type !== "list" && (
                <div className='space-y-6'>
                    <StaysOptions/>
                </div>)}

            </div>
        </div>
    )
}

export default Header