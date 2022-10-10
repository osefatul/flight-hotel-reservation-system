import "./charts.css";
import React, { PureComponent, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchingWeeklyOrdersRevenue } from "../../../../features/ordersSlice/ordersAction";

function Charts({ title, dataKey, grid }) {

  const dispatch = useDispatch()
  const {ordersWeeklyLoading, ordersWeeklyRevenue} = useSelector(state=> state.orders)
  const [data, setData] = useState(ordersWeeklyRevenue)
  
  useEffect(()=>{
    dispatch(FetchingWeeklyOrdersRevenue())
  },[])


  useEffect(()=>{
    setData(ordersWeeklyRevenue)
  },[ordersWeeklyRevenue])


  return (

    ordersWeeklyLoading? <div>"loading..."</div>
    :<div className=" bg-slate-700 rounded-md w-[100%] items-center text-white relative shadow-xl p-2 space-y-2">
      <h3 className="font-bold text-xl ">{title}</h3>
      <ResponsiveContainer height={300} width="98%">
        <AreaChart 
          data={data}
          margin={{
            top: 20, 
            right: 20, 
            bottom: 20, 
            left: 20,
          }}
        >
          <XAxis dataKey="day" stroke="#fff" />
          <YAxis />
          <Legend />
          {/* <Line type="monotone" dataKey={dataKey} stroke="red" /> */}
          <Area dataKey="day" stroke="8884d8" fill="#8884d8" activeDot={{ r: 8 }} />
          <Tooltip />
          {grid && <CartesianGrid stroke="#8884d8" strokeDasharray="3 4" />}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
