import React from 'react'
import { motion } from "framer-motion"
function Navbar() {
    return (
        <div className="text-white h-[50px] bg-slate-900 flex justify-center w-[75%] mx-auto">

            <div className='w-full flex justify-between items-center'>
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-amber-400 cursor-pointer hover:text-amber-400 text-xl" >Best Hotel Booking Site
                </motion.h1>
                
                <div className="space-x-4 ">
                    <button className="navButton hover:text-amber-400 hover:border-b hover:border-amber-400">Register</button>
                    <button className="navButton hover:text-amber-400 hover:border-b hover:border-amber-400">Login</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar