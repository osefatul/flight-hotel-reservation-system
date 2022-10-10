import React, { useEffect } from 'react'
import CopyRightMark from '../../components/CopyRightMark'
import Featured from '../../components/Featured'
import FeaturedProperties from '../../components/FeaturedProperties'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import MailList from '../../components/MailList'
import Navbar from '../../components/Navbar'
import PropertyList from '../../components/PropertyList'
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from '../../features/authSlice/loginSlice'


function Home() {


    
    return (
        <div className="relative bg-slate-100">
            <div className="sticky z-30 top-0 bg-black " >
                <Navbar/>
                <Header />
            </div>
            
            <div className="mt-2 sm:mt-10 flex flex-col items-center space-y-4 w-[75%] mx-auto relative ">
                <Featured/>
                <div className="pl-2 pt-2 flex items-center w-[100%]">
                    <h1 className="w-[30%] font-bold text-[13px] lg:text-xl">Explore by property type</h1>
                    <hr className='w-[70%] border-slate-400' />
                </div>
                
                <PropertyList/>
                <div className="pl-2 pt-2 flex items-center w-[100%]">
                    <h1 className="w-[30%] font-bold text-[13px] lg:text-xl">Homes guests love</h1>
                    <hr className='w-[70%] border-slate-400' />
                </div>
                <FeaturedProperties/>
            </div>
                <MailList/>
                <Footer/>
                <CopyRightMark />
        </div>
    )
}

export default Home 