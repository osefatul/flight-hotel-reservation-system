import React from 'react'
import { motion } from "framer-motion"
function Navbar() {
    return (
        <div className="text-white h-[50px] bg-slate-900 flex justify-center">

            <div className='w-full flex justify-between items-center px-10 '>
                <motion.h1 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.9 }}
                    className="font-bold border-b border-golden-700 cursor-pointer hover:text-amber-700" >Best Hotel Booking Site
                </motion.h1>
                
                <div className="space-x-4 ">
                    <button className="navButton hover:text-amber-700 border-b border-golden-700">Register</button>
                    <button className="navButton hover:text-amber-700 border-b border-golden-700">Login</button>
                </div>
            </div>

        </div>
    )
}

export default Navbar