
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
    <div className="flex flex-col p-2 h-full space-y-5 text-[12px] w-full">
      <h3 className="font-bold text-2xl">Latest Transactions</h3>
      {
        latestTransactionsLoading?"Loading...":

      <div className="w-full">

        <table className="table-auto">
          <thead>
            <tr className="w-full flex space-x-12">
              <th className="widgetLargeTh">Customer</th>
              <th className="widgetLargeTh">Date</th>
              <th className="widgetLargeTh">Amount</th>
              <th className="widgetLargeTh">Status</th>
            </tr>
          </thead>

          <tbody>
            {data?.length>0 && data.map((item, index)=>(
              <tr className="w-full flex space-x-8">
              <td className="widgetLargeUser">
                <span className="">
                U{item.userId.slice(0, 10)}
                </span>
              </td>
              <td className=" widgetLargeDate">{new Date(item.createdAt).toLocaleDateString()}</td>
              <td className="widgetLargeAmount">${item.total/100}</td>
              <td className="pl-10 text-green-300">{item.payment_status}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

      }

    </div>
  );
}

export default WidgetLarge;
