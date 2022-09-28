import "./userList.css";
import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeletingUser, getUsersData } from "../../../../features/usersSlice/usersAction";
import Navbar from "../../../../components/Navbar";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";

export default function UserList() {

  const dispatch = useDispatch();
  const {isLoading, users} = useSelector(state => state.users);
  const [data, setData] = useState(users);


  useEffect(() =>{
    dispatch(getUsersData())
  },[])

  useEffect(()=>{
    setData(users)
  },[users])


  const handleDelete = async (id) => {
    await dispatch(DeletingUser(id))
    setData(data.filter((item) => item._id !== id));
    //map all those that are not equal to the selected row id
    dispatch(getUsersData())

  };



  const columns = [
    { field: "id", headerName: "ID", width: 180,
    flex: 1,
    renderCell: (params) => {
      return (
        // <Link to={`/ticket_communication/${params.row._id}`}>
          <div className="text-[12px]">
            U{params.row._id.slice(0,10)}...
          </div>
        // </Link>
      );
    }},

    {
      field: "username",
      headerName: "User",
      width: 120,
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="flex text-[12px] items-center">
            <img className="userListImg" src={params.row.img ? params.row.img : "https://dcpcsb.org/themes/copycat/images/profile.png"  } alt="" />
            {params.row.username}
          </div>
        );
      },
    },


    { field: "email", headerName: "Email", width: 200,
    flex: 1,
    renderCell : (params) => {
      return (
        <div className="text-[12px]">
          {params.row.email}
        </div>
      )
    }
  },
    {
      field: "country",
      headerName: "Country",
      width: 120,
      flex: 1,
      renderCell : (params) => (
        <div className="text-[12px]">
          {params.row.country}
        </div>
      )
    },
    {
      field: "city",
      headerName: "City",
      width: 120,
      flex: 1,
      renderCell : (params) => (
        <div className="text-[12px]">
          {params.row.city}
        </div>
      )
    },
    {
      field: "phone",
      headerName: "Phone Number",
      width: 120,
      flex: 1,
      renderCell : (params) => (
        <div className="text-[12px]">
          +{params.row.phone}
        </div>
      )
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      flex: 1,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/users/" + params.row._id}>
              <button className="bg-green-800 w-max px-2 py-[3px] rounded-sm text-white text-[11px]">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    }
  ];




  return (
    <div>

      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>

      <div className="flex w-full">

        <div className="w-[15%]">
          <Sidebar />
        </div>

        <div className="flex flex-col w-[85%]  mt-10 ">
          <div className=" pl-5">
              <Link to="/admin/newUser">
                <button className="w-24 bg-green-900 text-white rounded-sm">Create</button>
              </Link>
          </div>



          {isLoading ? "Loading..." : (

          <div className="userList ">
            <DataGrid
            sx={{
              border: 0, // also tried setting to none 
              borderRadius: 2,
              p: 2,
              minWidth: 200,
            }}
            getRowId = {(row) => row._id}
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={8}
            checkboxSelection
            />
            </div>
          )}
        </div>

      </div>

    </div>

  );
}
