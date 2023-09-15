import React, { useEffect, useState } from "react";
import { Layout, message } from "antd";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Style.scss";

import HomePage from "../HomePage";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const loginSuccessMessage = useSelector(
    (state) => state.loginReducer.userLoginSuccessMessage
  );

  useEffect(() => {
    if (loginSuccessMessage !== "") {
      message.success(loginSuccessMessage);
    }
  }, [loginSuccessMessage]);

  return (
    <div>
        {/* All Pages Calling here start */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<HomePage />} />
          <Route path="/*" element={<Navigate to="/" />} />    
        </Routes>
        {/* All Pages Calling here end */}
      </div>
  );
};

export default Dashboard;
