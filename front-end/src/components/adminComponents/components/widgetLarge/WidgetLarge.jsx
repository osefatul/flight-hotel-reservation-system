import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLatestOrdersTransactions } from "../../../../features/ordersSlice/ordersAction";
import "./widgetLarge.css";

function WidgetLarge() {

  const dispatch = useDispatch();
  const {latestTransactionsLoading, latestTransactions} = useSelector(state=> state.orders)
  const [data, setData] = useState()
  console.log(data)


  useEffect(()=>{
    dispatch(fetchingLatestOrdersTransactions())
  },[])

  useEffect(()=>{
    setData(latestTransactions)
  },[latestTransactions])

  return (
    <div className="flex flex-col p-2 h-full space-y-5 text-[12px]">
      <h3 className="font-bold text-2xl">Latest Transactions</h3>
      {
        latestTransactionsLoading?"Loading...":

      <table className="w-full ">
        <tr className="w-full flex space-x-12">
          <th className="">Customer</th>
          <th className="">Date</th>
          <th className="">Amount</th>
          <th className="">Status</th>
        </tr>

        {data?.length>0 && data.map((item, index)=>(
          <tr className="w-full flex space-x-8">
          <td className="">
            <span className="">
            U{item.userId.slice(0, 10)}
            </span>
          </td>
          <td className=" ">{new Date(item.createdAt).toLocaleDateString()}</td>
          <td className="pr-2">${item.total/100}</td>
          <td className="pl-4 text-green-300">{item.payment_status}</td>
        </tr>
        ))}
      </table>
      }

    </div>
  );
}

export default WidgetLarge;
