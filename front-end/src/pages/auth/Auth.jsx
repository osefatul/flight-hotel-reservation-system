import axios from "axios";

import { useNavigate,useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./auth.css";
import { loginFail, loginPending, loginSuccess } from "../../features/authSlice/loginSlice";
import { loginUser } from "../../api/StaysApi/userApi";
import { useEffect, useState } from "react";

const Auth = () => {

    const[MessageAddedAlert, setMessageAddedAlert] = useState(false)

    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

      //Redux states
    const {error, isAuth, user} = useSelector(state => state.login)

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/"

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
        localStorage.setItem("user", JSON.stringify(res.details))
        dispatch(loginSuccess(res.details));
        navigate(from , {replace:true})

        } catch (err) {
            dispatch(loginFail(err))
        }
    };

    useEffect(()=>{
        isAuth && user && navigate(from , {replace:true})
    },[isAuth, user])


    useEffect(()=>{
        setTimeout(()=>{
            setMessageAddedAlert(false)
        },5000)
    },[MessageAddedAlert])

    return (
        <div className="login bg-black flex flex-col space-y-4">
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

        <div className="text-white pl-8">
            <p>Don't have any account?
                <Link to="/register">
                <span className="text-green-500">{" "}Sign up</span> 
                </Link>
            </p>
        </div>
        </div>
    );
};

export default Auth;