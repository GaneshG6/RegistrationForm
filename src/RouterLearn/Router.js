import React from "react";
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
export default function Router() {
    return (
       <>
 <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
       </Routes>
       </BrowserRouter>
       </>
    )
}