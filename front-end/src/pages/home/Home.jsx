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
            <div className='sticky z-50 top-0'>
            <Navbar/>
            <Header />
            </div>
            <div className="mt-10 flex flex-col items-center space-y-4 w-[80%] mx-auto ">
                <Featured/>
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList/>
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties/>
                <MailList/>
                <Footer/>
            </div>
        </div>
    )
}

export default Home 