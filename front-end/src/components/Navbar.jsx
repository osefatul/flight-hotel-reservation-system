import React, { useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"

function Navbar() {

    return (
        <div className="text-white h-[50px] bg-black flex justify-center w-[75%] mx-auto py-2">

            <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0'>

                <Link to="/">
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-2xl" >Travel & Stay Booking System
                </motion.h1>
                </Link>

                <div className=" sm:flex space-x-4 border-b border-amber-400">
                    <button className=" hover:text-amber-400 text-[12px] sm:text-[16px]">Register</button>
                    
                    <Link to="/login">
                    <button className=" hover:text-amber-400 text-[12px] sm:text-[16px]">Login</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Navbar