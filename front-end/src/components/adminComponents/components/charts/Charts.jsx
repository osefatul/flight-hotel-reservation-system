import "./charts.css";
import React, { PureComponent } from "react";
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

function Charts({ title, data, dataKey, grid }) {
  return (
    <div className=" bg-slate-700 rounded-md w-[100%] items-center text-white relative shadow-xl p-2 space-y-2">
      <h3 className="font-bold text-xl ">{title}</h3>
      <ResponsiveContainer height={300} width="98%">
        <AreaChart data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
        >
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis />
          {/* <Line type="monotone" dataKey={dataKey} stroke="red" /> */}
          <Area dataKey={dataKey} stroke="8884d8" fill="#8884d8" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#8884d8" strokeDasharray="3 4" />}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;
