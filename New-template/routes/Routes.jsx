import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Profile from "../pages/profile";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/profile" element={<Profile/>} />
            </Routes>
        </BrowserRouter>
        
    )
    }
export default AppRoutes;