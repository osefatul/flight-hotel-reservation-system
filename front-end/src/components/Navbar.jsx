import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import {Link} from "react-router-dom"
import { loginSuccess } from '../features/authSlice/loginSlice';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AdminPanelMode, NotAdminPanelMode } from '../features/adminPanel/adminPanel';
import { useCookies } from "react-cookie"; 
import {BsFillCartFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"
import {MdAdminPanelSettings} from "react-icons/md"



function Navbar() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectOption, setSelectOption] = useState(false)


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
            setSelectOption(false)
            setUser (localStorage.removeItem("user"));
            setUserToken(sessionStorage.removeItem("accessJWT"));
            document.cookie = "access_token = ; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
            window.location.reload()
    }

    const handleAdminPanel = ()=>{
        setSelectOption(false)
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
        <div className={`text-white h-[65px] sm:h-[50px] bg-black flex flex-col justify-center ${isAdminPanel ? "w-full px-2" : "w-[75%]"} mx-auto `}>

            <div className='w-full flex sm:flex-row justify-between items-center sm:items-center space-y-1 sm:space-y-0'>

                <Link to ={isAdminPanel? "/admin" : "/"}>
                    <motion.h1 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.9 }}
                        className="pt-2 sm:pt-0 font-bold sm:border-b border-amber-400 cursor-pointer hover:text-amber-400 text-lg sm:text-xl" >
                            {!isAdminPanel? "Travel & Stay Booking System": "Travel & Stay Admin Panel" }
                    </motion.h1>
                </Link>

                <div className='flex items-center justify-between sm:justify-center space-x-5 '>
                    
                    {user.isAdmin && (
                        <motion.h1 
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.9 }}
                            className='hidden sm:flex font-bold text-green-500 border-r border-amber-400 pr-4 cursor-pointer hover:text-amber-400 text-sm sm:text-md w-max mx-auto '
                            onClick={handleAdminPanel}
                            >
                                {!isAdminPanel? "Admin Panel": "T&S Home" }
                        </motion.h1>
                        )
                    }
                    
                    {userToken && user ? 
                    <div 
                        className='flex items-center justify-center cursor-pointer text-[12px] sm:text-md hover:text-amber-400 relative'>
                        <img className='w-8 h-8 rounded-full object-cover' src={user.img} alt="" 
                        onClick={(e) => setSelectOption(!selectOption)}
                        />
                        {selectOption &&
                        <div className='absolute z-50 bg-white text-black -right-4 sm:right-6 top-6 h-max sm:h-20 w-max sm:w-20 p-2 sm:p-3 space-y-3 rounded-md font-bold '>
                            <motion.p
                            className='pt-1 flex sm:hidden font-bold text-green-500 cursor-pointer hover:text-amber-400 text-sm sm:text-md w-max mx-auto '
                            onClick={handleAdminPanel}
                            >
                                {!isAdminPanel? 
                                
                                <div className="flex items-center">
                                    <MdAdminPanelSettings/> Admin Panel
                                </div>:
                                
                                "T&S Home" }
                            </motion.p>


                            <Link to="/cart">
                                <motion.p
                                className='flex space-x-1 items-center border-y sm:border-0 border-black pt-1 sm:py-0'
                                onClick={(e) => setSelectOption(false)}
                                >
                                    <span>
                                        <BsFillCartFill/>
                                    </span> 
                                    
                                    <span>
                                        Cart
                                    </span>
                                </motion.p>
                            </Link>

                            <motion.p
                            className="flex space-x-1 items-center"
                            onClick = {handleLogout} 
                            >
                                <span>
                                    <FiLogOut/>
                                </span> 
                                    
                                <span>
                                    Logout
                                </span>

                            </motion.p>

                        </div>
                        }
                    </div> :
                    <div className=" sm:flex items-center justify-center space-x-4 border-b w-max border-amber-400">
                        <button className="hidden sm:flex hover:text-amber-400 text-[12px] sm:text-[14px]">Register</button>
                        
                        <Link to="/login">
                        <button className="hover:text-amber-400 text-[12px] sm:text-[14px]">Login</button>
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