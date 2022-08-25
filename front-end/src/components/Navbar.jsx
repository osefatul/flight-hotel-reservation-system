import React, { useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import {
    faBars,
    faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="text-white h-[50px] bg-slate-900 flex justify-center w-[75%] mx-auto">

            <div className='w-full flex justify-between items-center'>

                <Link to="/">
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-2xl" >Travel & Stay Booking System
                </motion.h1>
                </Link>

                <div className="hidden sm:flex space-x-4 ">
                    <button className="navButton hover:text-amber-400 hover:border-b hover:border-amber-400">Register</button>
                    <button className="navButton hover:text-amber-400 hover:border-b hover:border-amber-400">Login</button>
                </div>

                <div className=" sm:hidden h-[40px] relative flex items-center justify-center ]">
                    {!toggle ? (
                    <FontAwesomeIcon icon={faBars} 
                    className=" text-[#dde1e7] hover:text-[#519f8d] cursor-pointer mr-2 sm:mr-8 h-8 w-8"
                    onClick={() => setToggle(!toggle)}
                    />
                    ) : (
                    <motion.div 
                    className="container z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    <FontAwesomeIcon icon={faCircleXmark}
                        className="hoverText m-3 w-[20px] h-[20px] cursor-pointer "
                        onClick={() => setToggle(false)}
                    />
                    </motion.div>
                    )}


                    {/* SIDE BAR */}
                    <div
                        className={`fixed top-0 right-0 z-40 h-screen w-[40vw] 
                        flex flex-col justify-end items-end 
                        bg-[#0e214b] ${
                        toggle ? "translate-x-0" : "translate-x-full"
                        } ease-out duration-700  shadow-2xl`}>
                        <ul className="h-[100%] w-full flex flex-col justify-start items-start space-y-5 mt-32 pl-5"></ul>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar