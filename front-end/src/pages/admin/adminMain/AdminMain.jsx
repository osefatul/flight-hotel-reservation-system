import React from 'react'
import Sidebar from '../../../components/adminComponents/components/sidebar/Sidebar'
import Topbar from '../../../components/adminComponents/components/topbar/Topbar'
import AdminHome from '../adminHome/adminHome'

function AdminMain({children}) {

    return (
        <div>
            <Topbar className = "" />

            <div className="flex w-full">
                <div className="w-[15%]">
                <Sidebar />
                </div>

                <div className="w-[85%] mt-2">
                    <AdminHome />
                </div>

            </div>
        </div>
    )
}

export default AdminMain