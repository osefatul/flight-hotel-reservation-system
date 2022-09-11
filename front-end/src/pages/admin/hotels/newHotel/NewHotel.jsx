import "./newHotel.css";
import React from "react";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../../components/Navbar";

export default function NewHotel() {
  return (

    <div>
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>

      <div className="flex w-full">

        <div className="w-[20%]">
        <Sidebar />
        </div>

        <div className="newProduct mt-10 pl-24">
          <h1 className="addProductTitle font-bold text-[20px] mb-10">New Hotel</h1>
          <form className="addProductForm ">
            <div className="addProductItem text-[12px]">
              <label>Image</label>
              <input type="file" id="file" />
            </div>
            <div className="addProductItem text-[12px]">
              <label>Name</label>
              <input className="border text-[12px]" type="text" placeholder="Apple Airpods" />
            </div>
            <div className="addProductItem text-[12px]">
              <label>Stock</label>
              <input  className="border text-[12px]" type="text" placeholder="123" />
            </div>
            <div className="addProductItem text-[12px]">
              <label>Active</label>
              <select className="border text-[12px]" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="addProductButton flex w-44 items-center justify-center">Create</button>
          </form>
        </div>
      </div>
    </div>


  );
}
