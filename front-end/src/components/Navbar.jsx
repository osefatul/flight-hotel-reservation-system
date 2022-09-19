import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import { loginSuccess } from '../features/authSlice/loginSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminPanelMode, NotAdminPanelMode } from '../features/adminPanel/adminPanel';
import { useCookies } from "react-cookie"; 

function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //We get user data from localStorage as they are saved there after authentication..
    //Home page doesn't go through protected routes so it doesn't get user data from there. we need to request user data again.
    const [users, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    const [userToken, setUserToken] = useState(
        sessionStorage.getItem("accessJWT")
        );
    
    const {user} = useSelector(state => state.login);//we are using this to get user from redux
    const {isAdminPanel} = useSelector(state => state.adminPanelMode);

    
    useEffect(() => {
        if(users && userToken) dispatch(loginSuccess(users));
    },[users,userToken ])


    const handleLogout = ()=>{
            setUser (localStorage.removeItem("user"));
            setUserToken(sessionStorage.removeItem("accessJWT"));
            document.cookie = "access_token = ; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
            window.location.reload()
    }

    const handleAdminPanel = ()=>{
        if (!isAdminPanel) {
            dispatch(AdminPanelMode())
            navigate("/admin")
        }
        else{
            dispatch(NotAdminPanelMode())
            navigate("/")
        }
    }


    
    return (
        <div className={`text-white h-[50px] bg-black flex flex-col justify-center ${isAdminPanel ? "w-full px-2" : "w-[75%]"} mx-auto `}>

            <div className='w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0'>
                <Link to ={isAdminPanel? "/admin" : "/"}>
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-xl" >
                        {!isAdminPanel? "Travel & Stay Booking System": "Travel & Stay Admin Panel" }
                </motion.h1>
                </Link>

                <div className='flex items-center justify-center space-x-5 '>
                    {user.isAdmin && (
                        <motion.h1 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            className='font-bold text-green-500 border-r border-amber-400 pr-4 cursor-pointer hover:text-amber-400 text-md w-max mx-auto '
                            onClick={handleAdminPanel}
                            >
                                {!isAdminPanel? "Admin Panel": "T&S Home" }
                        </motion.h1>
                        )
                        }
                    
                    {userToken && user ? 
                    <div onClick = {handleLogout} className='cursor-pointer text-[12px] sm:text-md hover:text-amber-400'>
                        Welcome @{user.username} 
                    </div> :
                    <div className=" sm:flex space-x-4 border-b border-amber-400">
                        <button className=" hover:text-amber-400 text-[12px] sm:text-[14px]">Register</button>
                        
                        <Link to="/login">
                        <button className=" hover:text-amber-400 text-[12px] sm:text-[14px]">Login</button>
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