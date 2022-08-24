import React from 'react'
import Featured from '../../components/Featured'
import FeaturedProperties from '../../components/FeaturedProperties'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import MailList from '../../components/MailList'
import Navbar from '../../components/Navbar'
import PropertyList from '../../components/PropertyList'


function Home() {
    return (
        <div className="relative">

            <div className="sticky z-50 top-0 bg-slate-900 " >
            <Navbar />
            </div>

            <div className='sticky z-50 top-0 bg-slate-900 '>
                <Header className="" />
            </div>
            
            <div className="mt-10 flex flex-col items-center space-y-4 w-[75%] mx-auto relative">
                <Featured/>
                <h1 className="w-full font-bold text-2xl">Browse by property type</h1>
                <PropertyList/>
                <h1 className="w-full font-bold text-2xl">Homes guests love</h1>
                <FeaturedProperties/>
            </div>
                <MailList/>
                
                <Footer/>
        </div>
    )
}

export default Home 