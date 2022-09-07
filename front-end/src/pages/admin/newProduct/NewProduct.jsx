import "./newProduct.css";
import React from "react";
import Topbar from "../../../components/adminComponents/components/topbar/Topbar";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../components/Navbar";

export default function NewProduct() {
  return (

    <div>
       <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>

      <div className="flex w-full">

        <div className="w-[20%]">
        <Sidebar />
        </div>

        <div className="newProduct">
          <h1 className="addProductTitle">New Product</h1>
          <form className="addProductForm">
            <div className="addProductItem">
              <label>Image</label>
              <input type="file" id="file" />
            </div>
            <div className="addProductItem">
              <label>Name</label>
              <input type="text" placeholder="Apple Airpods" />
            </div>
            <div className="addProductItem">
              <label>Stock</label>
              <input type="text" placeholder="123" />
            </div>
            <div className="addProductItem">
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="addProductButton">Create</button>
          </form>
        </div>
      </div>
    </div>


  );
}
