import React, { useState, useEffect} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Pages/Login";
import AppAuthentication from "./Pages/AppAuthentication";
import Dashboard from "./Pages/Dashboard";

function App() {
 
  const navigate = useNavigate();
   const accessToken = sessionStorage.getItem("Token");
   const loginSuccessMessage = useSelector((state) => state.loginReducer.userLoginSuccessMessage);
   useEffect(() => {
     if(loginSuccessMessage !== ""){
       sessionStorage.setItem("Token", true);
       navigate("/");
     }
   }, [loginSuccessMessage])

  return (
    <div>
        { true ? (
          <Dashboard />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<AppAuthentication Component={Login} />}
            />
            <Route
              path="/login"
              element={<AppAuthentication Component={Login} />}
            />
            <Route path="/*" element={<Navigate to="/"/>} />
          </Routes>
        )}


      {/* <Routes>
        <Route path="userdashboard" element={<UserDashboard />}/>
      </Routes> */}
    </div>
  );
}
export default App;
