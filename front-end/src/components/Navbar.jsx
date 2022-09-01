import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import { loginSuccess } from '../features/authSlice/loginSlice';
import { useDispatch, useSelector } from "react-redux";

function Navbar() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userToken, setUserToken] = useState(
        sessionStorage.getItem("accessJWT")
        );

    const dispatch = useDispatch();

    console.log(user, userToken)
    useEffect(() => {
    
        user && userToken && dispatch(loginSuccess(user));
    },[user,userToken ])


    const handleLogout = ()=>{
        setUser (localStorage.removeItem("user"));
        setUserToken(sessionStorage.removeItem("accessJWT"));
    }

    return (
        <div className="text-white h-[40px] bg-black flex justify-center w-[75%] mx-auto">

            <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0'>

                <Link to="/">
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-2xl" >Travel & Stay Booking System
                </motion.h1>
                </Link>

                {userToken && user ? 
                <div onClick = {handleLogout} className='cursor-pointer text-[12px] sm:text-[16px] hover:text-amber-400'>
                    Welcome @{user.username} 
                </div> :
                <div className=" sm:flex space-x-4 border-b border-amber-400">
                    <button className=" hover:text-amber-400 text-[12px] sm:text-[16px]">Register</button>
                    
                    <Link to="/login">
                    <button className=" hover:text-amber-400 text-[12px] sm:text-[16px]">Login</button>
                    </Link>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar