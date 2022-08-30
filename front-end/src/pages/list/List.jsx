import React from 'react'
import Navbar from "../../components/Navbar";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from '../../components/SearchItem';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBed,
    faCalendarDays,
    faCircleXmark,
    faPerson,
} from "@fortawesome/free-solid-svg-icons";
import ListPageSidebar from '../../components/ListPageSidebar';



function List() {
    const [toggle, setToggle] = useState(false);


    return (
    <div className='relative'>

        <div className='bg-black text-white sticky z-50 top-0 bg-black '>
            <Navbar />
            <Header type="list" />
        </div>

        <div className="flex justify-center mt-4  px-4 sm:px-0 w-full sm:w-[75%] sm:mx-auto">
            <div className="w-full flex space-x-5">
            
            {/* Sticky Sidebar left for large screens*/}
            <div className="sticky z-50 h-max top-36 hidden sm:flex">
            <ListPageSidebar/>
            </div>
            
                {/* Sidebar Icons for small screens */}
                <div className=" sm:hidden h-[40px] relative flex items-center justify-end ">

                    {!toggle ? (
                    <FontAwesomeIcon icon={faBars} 
                    className="fixed text-black hover:text-[#519f8d] cursor-pointer ml-2 sm:mr-8 h-5 w-5"
                    onClick={() => setToggle(!toggle)}
                    />
                    ) : (
                    <motion.div 
                    className=" z-50"
                    >
                    <FontAwesomeIcon icon={faCircleXmark}
                        className="fixed left-[140px] top-38 w-[25px] h-[25px] cursor-pointer "
                        onClick={() => setToggle(false)}
                    />
                    </motion.div>
                    )}

                    <div
                    className={`fixed top-40 left-0 z-40  w-[40%] 
                    flex flex-col justify-start items-start ${
                        toggle ? "translate-x-0" : "-translate-x-80"
                    } ease-out duration-700  shadow-2xl`}
                    >
                    <ListPageSidebar/>
                    </div>
                    
                </div>


                {/*Right Side  */}
                <div className="">
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                    <SearchItem />
                </div>
            
            </div>
        </div>
    </div>

    )
}

export default List