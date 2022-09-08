import React from "react";
import Sidebar from "../../../components/adminComponents/components/sidebar/Sidebar";
import Topbar from "../../../components/adminComponents/components/topbar/Topbar";
import Navbar from "../../../components/Navbar";
import "./newUser.css";
function NewUser() {
  return (
    <div>
    
    <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>
      
      <div className="flex w-full">
        <div className="w-[20%]">
        <Sidebar />
        </div>

        <div className="newUser mt-20">
          <h1 className="font-bold text-[18px]">New User</h1>
          <form className="newUserForm">
            <div className="newUserItem text-[12px]">
              <label>Username</label>
              <input type="text" placeholder="john" />
            </div>
            <div className="newUserItem text-[12px]">
              <label>Full Name</label>
              <input type="text" placeholder="John Smith" />
            </div>
            <div className="newUserItem text-[12px]">
              <label>Email</label>
              <input type="email" placeholder="john@gmail.com" />
            </div>
            <div className="newUserItem text-[12px]">
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className="newUserItem text-[12px]">
              <label>Phone</label>
              <input type="text" placeholder="+1 123 456 78" />
            </div>
            <div className="newUserItem text-[12px]">
              <label>Address</label>
              <input type="text" placeholder="New York | USA" />
            </div>
            <div className="newUserItem text-[12px]">
              <label>Gender</label>
              <div className="newUserGender text-[12px]">
                <input className="newUserGender text-[12px]" type="radio" name="gender" id="male" value="male" />
                <label className="newUserGender"  for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
              </div>
            </div>
            <div className="newUserItem text-[12px]">
              <label>Active</label>
              <select className="newUserSelect border rounded-sm" name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className="newUserButton ">Create</button>
          </form>
        </div>

    </div>
    </div>



  );
}

export default NewUser;
