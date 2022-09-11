import React, { useState } from "react";
import Sidebar from "../../../../components/adminComponents/components/sidebar/Sidebar";
import Navbar from "../../../../components/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./newUser.css";
import { TrySharp } from "@mui/icons-material";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EraseRegistrationError, registrationError, registrationPending, registrationSuccess } from "../../../../features/authSlice/registerSlice";
import { userRegistration } from "../../../../api/userApi";
import { loginFail } from "../../../../features/authSlice/loginSlice";
import { useEffect } from "react";



function NewUser() {

  const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
  const {isLoading, status, message} = useSelector(state => state.register)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [file, setFile]= useState("")
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = async (e)=>{
    e.preventDefault()
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "hotelReservation");

    try {
      const uploadRes = await axios.post(
        //I used the foldername as: hotelReservation/newUser in the cloudinary
        "https://api.cloudinary.com/v1_1/ddgn3r0t2/image/upload",
        data
      );

      const { url } = uploadRes.data;
      const newUser = {
        ...info,
        img: url,
      };

        dispatch(registrationPending());
        try {
        const res = await userRegistration(newUser)
        const AuthResponse = res?.response?.data?.message

        //Error
        if (AuthResponse){
            setMessageAddedAlert(true)//To turn on message alert
            return dispatch(loginFail(AuthResponse))
        }

        dispatch(registrationSuccess(res));
        setMessageAddedAlert(true)//To turn on message alert
        setInfo({})


        } catch (err) {
            dispatch(registrationError(err))
        }

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    setTimeout(()=>{
      setMessageAddedAlert(false);
      dispatch(
        EraseRegistrationError()
      )
    },5000)
  },[ MessageAddedAlert])

  return (
    <div>
    
      <div className = "bg-black sticky z-50 top-0 ">
        <Navbar  />
      </div>

      {MessageAddedAlert && <div className=" bg-green-600 w-full text-white text-small rounded flex items-center justify-center m-2">{message}</div> }
      
      <div className="flex w-full">

        <div className="">
        <Sidebar />
        </div>

        <form className="flex w-full relative">
          <h1 className=" absolute font-bold text-[18px] pt-10 pl-10">Create New User</h1>
          <div className="w-[40%] flex flex-col items-center justify-center">      
            <div className="flex flex-col items-center justify-center space-y-10">
              
              <img
              className="w-56 h-56 borderRadius object-cover"
              src={file? URL.createObjectURL(file): "https://dcpcsb.org/themes/copycat/images/profile.png"} alt="" />
              
              <div>
                <label htmlFor="file" className="border rounded-md shadow-lg p-2">Upload Image: <DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input type="file"
                  id="file"
                  onChange={(e)=> setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              
            </div>
          </div>

          <div className="newUser pr-2 flex flex-col items-center justify-center">
              <div className="newUserItem text-[12px]">
                <label>Username</label>
                <input type="text" 
                placeholder="Username"
                id="username"
                onChange={handleChange} />
              </div>
              
              <div className="newUserItem text-[12px]">
                <label>Email</label>
                <input type="email" placeholder="Email Address"
              id="email"
              onChange={handleChange} />
              </div>
              <div className="newUserItem text-[12px]">
                <label>Password</label>
                <input type="password"
                id="password"
              placeholder="Password"
              onChange={handleChange}/>
              </div>
              <div className="newUserItem text-[12px]">
                <label>Phone</label>
                <input type="number"
              placeholder="Phone number"
              id="phone"
              onChange={handleChange} />
              </div>
              <div className="newUserItem text-[12px]">
                <label>city</label>
                <input type="text"
              placeholder="City"
              id="city"
              onChange={handleChange}/>
              </div>
              <div className="newUserItem text-[12px]">
                <label>Country</label>
                <input type="text"
              placeholder="Country"
              id="country"
              onChange={handleChange}/>
              </div>

              <div className="newUserItem text-[12px]">
                {/* <label>Admin</label>
                <select className="newUserSelect border rounded-sm" name="active" id="active">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select> */}
                <button  onClick={handleClick} className="newUserButton w-full ">Create</button>
              </div>
          </div>

        </form>

      

      </div>

    </div>



  );
}

export default NewUser;
