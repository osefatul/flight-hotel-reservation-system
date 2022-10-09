import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function OverviewComponents({fetchStats, arrayData, dataType , }) {

    const dispatch = useDispatch()

    const [Data, setData] = useState(arrayData)
    const [Percentage, setPercentage] = useState(((Data[0]?.total - Data[1]?.total)/Data[1]?.total)*100)


    useEffect(()=>{
        const dispatchingData = async ()=>{
        await dispatch(fetchStats()).then(()=>(setData(arrayData))).then(()=> (
        setPercentage(((Data[0]?.total - Data[1]?.total)/Data[1]?.total)*100)
        ))
        }
        dispatchingData()
    
    },[])

useEffect(()=>{
    setData(arrayData)
    setPercentage(((Data[0]?.total - Data[1]?.total)/Data[1]?.total)*100)
},[arrayData, Data, Percentage])


return (

    <div>

        <div className="p-2 bg-slate-900 rounded-lg space-y-3">
                <span className="font-bold text-md">{dataType && dataType}</span>
                <div className="flex items-center justify-between space-x-4">
                <span className="font-bold text-lg">{dataType==="Revenue"? "$":""}{Data && Data[0]?.total}</span>
                <span className={`${Percentage>0? "text-green-600":"text-red-600" }  flex items-center text-[12px]`}>
                    {Percentage && Percentage?.toFixed(2)}%
                </span>
            </div>
            <span className="text-slate-400 text-[10px]">Compared to last month</span>
        </div>

    </div>
)
}

export default OverviewComponents