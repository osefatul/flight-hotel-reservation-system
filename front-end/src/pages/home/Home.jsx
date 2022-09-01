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

    // const user = JSON.parse(localStorage.getItem("user"))
    // const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     user && dispatch(loginSuccess(user));
    // },[])

    
    return (
        <div className="relative">
            <div className="sticky z-30 top-0 bg-black " >
            <Navbar/>
            <Header />
            </div>
            
            <div className="mt-2 sm:mt-10 flex flex-col items-center space-y-4 w-[75%] mx-auto relative">
                <Featured/>
                <h1 className="w-full font-bold text-[14px] lg:text-2xl">Browse by property type</h1>
                <PropertyList/>
                <h1 className="w-full font-bold text-[14px] lg:text-2xl">Homes guests love</h1>
                <FeaturedProperties/>
            </div>
                <MailList/>
                <Footer/>
                <CopyRightMark />
                
        </div>
    )
}

export default Home 