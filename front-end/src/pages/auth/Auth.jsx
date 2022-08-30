import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import { loginFail, loginPending, loginSuccess } from "../../features/authSlice/loginSlice";
import { loginUser } from "../../api/userApi";
import { useEffect, useState } from "react";

const Auth = () => {

    const[MessageAddedAlert, setMessageAddedAlert] = useState(false)

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

      //Redux states
    const {isLoading, isAuth, error, demoAdminLogin, demoUserLogin} = useSelector(state => state.login)

    const navigate = useNavigate()
    const dispatch = useDispatch();



    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch(loginPending());
        try {

        const res = await loginUser(credentials)
        const AuthResponse = res?.response?.data?.message
        //Error
        if (AuthResponse){
            setMessageAddedAlert(true)//To turn on message alert
            return dispatch(loginFail(AuthResponse))
        }

        //console.log(isAuth)
        dispatch(loginSuccess(res.details));
        navigate("/")
        } catch (err) {
            dispatch(loginFail(err))
        }
    };


    useEffect(()=>{
        setTimeout(()=>{
            setMessageAddedAlert(false)
        },5000)
    },[MessageAddedAlert])

    return (
        <div className="login bg-black">
        <div className="lContainer">

        {MessageAddedAlert && <div className=" bg-red-400 w-[80%] text-white text-small rounded flex items-center justify-center m-2">{error}</div> }
            <input
            type="text"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
            />
            <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
            />
            <button  onClick={handleClick} className="lButton">
            Login
            </button>
            {error && <span>{error.message}</span>}
        </div>
        </div>
    );
};

export default Auth;