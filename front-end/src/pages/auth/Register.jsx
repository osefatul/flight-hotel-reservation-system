import React from 'react'
import { useNavigate,useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import { loginFail, loginPending, loginSuccess } from "../../features/authSlice/loginSlice";
import { loginUser, userRegistration } from "../../api/userApi";
import { useEffect, useState } from "react";
import { registrationError, registrationPending, registrationSuccess } from '../../features/authSlice/registerSlice';

function Register() {

    const[MessageAddedAlert, setMessageAddedAlert] = useState(false)
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
        phone: undefined,
        city: undefined,
        country: undefined,
        email: undefined,
    });

      //Redux states
    const {isLoading, status, message} = useSelector(state => state.register)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"


    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        dispatch(registrationPending());
        try {
        const res = await userRegistration(credentials)
        const AuthResponse = res?.response?.data?.message

        //Error
        if (AuthResponse){
            setMessageAddedAlert(true)//To turn on message alert
            return dispatch(loginFail(AuthResponse))
        }

        //console.log(isAuth)
        dispatch(registrationSuccess(res));
        navigate(from , {replace:true})

        } catch (err) {
            dispatch(registrationError(err))
        }
    };


    useEffect(()=>{
        setTimeout(()=>{
            setMessageAddedAlert(false)
        },5000)
    },[MessageAddedAlert])



    return (
        <div className="login bg-black flex flex-col space-y-4">
        <div className="lContainer">

        {MessageAddedAlert && <div className=" bg-red-400 w-[80%] text-white text-small rounded flex items-center justify-center m-2">{message}</div> }
            <input
            type="text"
            placeholder="Username"
            id="username"
            onChange={handleChange}
            className="lInput"
            />
            <input
            type="email"
            placeholder="Email Address"
            id="email"
            onChange={handleChange}
            className="lInput"
            />
            <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="lInput"
            />
            <input
            type="number"
            placeholder="Phone number"
            id="phone"
            onChange={handleChange}
            className="lInput"
            />
            <input
            type="text"
            placeholder="City"
            id="city"
            onChange={handleChange}
            className="lInput"
            />
            <input
            type="text"
            placeholder="Country"
            id="country"
            onChange={handleChange}
            className="lInput"
            />
            <button  onClick={handleClick} className="lButton">
            Register
            </button>
            {message && <span>{message}</span>}
        </div>

        <div className="text-white pl-8">
            <p>Already have an account?
                <Link to="/login">
                <span className="text-green-500">{" "}Sign in</span> 
                </Link>
            </p>
        </div>
        </div>
    );
}

export default Register