import React from "react";
import "./productList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
// import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productRows } from "../../../dummyData";
import Topbar from "../../../components/adminComponents/components/topbar/Topbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../components/Navbar";

function ProductList() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/products/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
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

        <div className="productList">
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

export default ProductList;
