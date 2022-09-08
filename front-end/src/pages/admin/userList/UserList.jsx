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
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../../../features/usersSlice/usersAction";

export default function UserList() {

  const dispatch = useDispatch();
  //using state hook in order to comply with changing as we are deleting rows
  // const [data, setData] = useState(userRows);
  const {isLoading, users} = useSelector(state => state.users);
  const [data, setData] = useState(users);



  useEffect(()=>{
    dispatch(getUsersData())
    setData(users)
  },[ dispatch])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id)); //map all those that are not equal to the selected row id
  };

  const columns = [
    { field: "id", headerName: "ID", width: 180,
    renderCell: (params) => {
      return (
        // <Link to={`/ticket_communication/${params.row._id}`}>
          <div >U- {params.row._id.slice(0,10)}...</div>
        // </Link>
      );
    }},

    {
      field: "username",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {/* <img className="userListImg" src={params.row.avatar} alt="" /> */}
            {params.row.username}
          </div>
        );
      },
    },


    { field: "email", headerName: "Email", width: 200,
    renderCell : (params) => {
      return (
        <div>
          {params.row.email}
        </div>
      )
    }
  },
    {
      field: "country",
      headerName: "Country",
      width: 120,
      renderCell : (params) => (
        <div>
          {params.row.country}
        </div>
      )
    },
    // {
    //   field: "transaction",
    //   headerName: "Transaction Volume",
    //   width: 160,
    // },
    // {
    //   field: "action",
    //   headerName: "Action",
    //   width: 150,
    //   renderCell: (params) => {
    //     return (
    //       <>
    //         <Link to={"/admin/users/" + params.row._id}>
    //           <button className="userListEdit">Edit</button>
    //         </Link>
    //         <DeleteOutline
    //           className="userListDelete"
    //           onClick={() => handleDelete(params.row.id)}
    //         />
    //       </>
    //     );
    //   },
    // },
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

        {isLoading ? "Loading..." : (

        <div className="userList">
          <DataGrid
          sx={{
            border: 0, // also tried setting to none 
            borderRadius: 2,
            p: 2,
            minWidth: 200,
          }}
          getRowId = {(row) => row._id}
          rows={users}
          disableSelectionOnClick
          columns={columns}
          pageSize={8}
          checkboxSelection
          />
          </div>
        )}
      </div>

    </div>

  );
}
