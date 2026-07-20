import React, {useEffect} from "react";
import {useRoutes, useNavigate} from "react-router-dom";
import { useAuth } from "../context/authContext";
import SignUp from "../components/authentication/SignUp";
import Login from "../components/authentication/Login";
import Dashboard from "../components/dashboard/Dashboard";
import Profile from "../components/user/Profile";

const AppRoutes = () => {
    const {CurrentUser, SetCurrentUser} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        
        if(userId && !CurrentUser){
            SetCurrentUser(userId);
        }; 

        if(!userId && !["/auth", "/create-account"].includes(window.location.pathname)){
            navigate("/auth");
        };

        if(userId && (window.location.pathname == "/auth" || window.location.pathname == "/create-account")){
            navigate("/");
        };
    }, [CurrentUser, navigate, SetCurrentUser]);

    const route_element = useRoutes([
        {
            path: "/create-account",
            element: <SignUp/>
        }, 
        {
            path: "/auth", 
            element: <Login/>
        },
        {
            path: "/dashboard", 
            element: <Dashboard/>
        }, 
        {
            path: "/profile", 
            element: <Profile/>
        },
    ]);

    return route_element;
};

export default AppRoutes;