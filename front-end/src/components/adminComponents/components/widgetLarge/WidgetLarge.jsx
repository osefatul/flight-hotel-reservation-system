
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingLatestOrdersTransactions } from "../../../../features/ordersSlice/ordersAction";
import "./widgetLarge.css";
import moment from "moment";
import { Link } from "react-router-dom";

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
        
        <div className="w-full">
          <div className="w-full">
              <div className="w-full flex justify-between font-bold pb-2 ">
                <p className="">Customer</p>
                <p className="">Date</p>
                <p className="">Amount</p>
                <p className="pl-2">Status</p>
              </div>

            { latestTransactionsLoading?"Loading...":
              data?.length>0 && data.map((item, index)=>(
                <div className="w-full flex items-center justify-between pb-1">
                  <Link to ={`/admin/users/${item.userId}`}>
                    <p className="">
                      <span className="underline text-yellow-500">
                      U{item.userId.slice(0, 10)}
                      </span>
                    </p>
                  </Link>
                  <p className="">
                    {moment(item.createdAt).fromNow()}..
                  </p>
                  <p className="pr-8">
                    ${item.total/100}
                  </p>
                  <p className={`text-green-300`}>
                    {item.payment_status}
                  </p>
              </div>
              ))}
          </div>
      </div>

    </div>
  );
}

export default WidgetLarge;
