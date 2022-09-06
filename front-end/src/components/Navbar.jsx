import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import { loginSuccess } from '../features/authSlice/loginSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Navbar() {

    //We get user data from localStorage as they are saved there after authentication..
    //Home page doesn't go thourgh protected routes so it doesn't get user data from there. we need to request user data again.
    const [users, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userToken, setUserToken] = useState(
        sessionStorage.getItem("accessJWT")
        );
    const dispatch = useDispatch();

    const {user} = useSelector(state => state.login);


    useEffect(() => {
        if(users && userToken) dispatch(loginSuccess(users));
    },[users,userToken ])



    const handleLogout = ()=>{
            setUser (localStorage.removeItem("user"));
            setUserToken(sessionStorage.removeItem("accessJWT"));
            window.location.reload()
    }

    
    return (
        <div className="text-white h-[80px] bg-black flex flex-col justify-center w-[75%] mx-auto pt-2">

            <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0'>
                <Link to="/">
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-2xl" >Travel & Stay Booking System
                </motion.h1>
                </Link>

                <div className='flex items-center justify-center space-x-5 '>

                    {user.isAdmin && (
                        <Link to="/admin">
                        <motion.h1 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            className='font-bold text-green-500 border-r border-amber-400 pr-4 cursor-pointer hover:text-amber-400 text-md sm:text-xl w-max mx-auto ' >Admin Panel
                        </motion.h1>
                        </Link>
                        )
                        }

                    
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

            <div>
            
            </div>
        </div>
    )
}

export default Navbar