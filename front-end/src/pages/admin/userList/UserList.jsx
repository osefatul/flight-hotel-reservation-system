import "./userList.css";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { useState } from "react";
import { userRows } from "../../../dummyData";
import Topbar from "../../../components/adminComponents/components/topbar/Topbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../components/Navbar";
import { useDispatch } from "react-redux";
import { getUsersData } from "../../../features/usersSlice/usersAction";

export default function UserList() {

  const dispatch = useDispatch();
  //using state hook in order to comply with changing as we are deleting rows
  const [data, setData] = useState(userRows);

  useEffect(()=>{
    dispatch(getUsersData())
  },[])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id)); //map all those that are not equal to the selected row id
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },


    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/users/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];



  return (
    <div>

      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>

      <div className="flex w-full">
        <div className="w-[20%]">
          <Sidebar />
        </div>

        <div className="userList">
          <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
        />
        </div>
      </div>

    </div>

  );
}
