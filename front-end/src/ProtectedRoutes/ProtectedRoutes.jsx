import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";



export const ProtectedRoutes = ({ children }) => {


    const dispatch = useDispatch();
    const {isAuth} = useSelector(state=> state.login)
    const {user} = useSelector(state=> state.login)
    const location = useLocation()


    return (
        <div>
            {isAuth? (
                <main>
                    <Outlet/>
                </main>
            ):
            <Navigate to="login" state={{from:location}} replace/>
            }
        </div>
    )
}