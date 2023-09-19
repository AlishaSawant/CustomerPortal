import React, { useState, useEffect} from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminLogin from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import AppAuthentication from "./Pages/AppAuthentication";

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
          <HomePage />
        ) : (
          <Routes>
            <Route
              path="/"
              element={<AppAuthentication Component={AdminLogin} />}
            />
            <Route
              path="/login"
              element={<AppAuthentication Component={AdminLogin} />}
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
