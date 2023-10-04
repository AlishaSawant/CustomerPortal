import React, { useEffect, useState } from "react";
import { Layout, message } from "antd";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoanAccounts from "../LoanAccounts";
import PendingDocumentList from "../PendingDocumentList";
import HeaderComponent from "../../Components/HeadersComponent";
import SideBar from "../../Components/SideBar";
import LoanAccountsDetails from "../LoanAcountsDetails";
import PersonalDetails from "../PersonalDetails";
import LogNewRequest from "../LogNewRequest";
import ExistingRequest from "../ExestingRequest";
import "./Style.scss";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const collapseData = (data) => {
    setCollapsed(data);
  };

  const loginSuccessMessage = useSelector(
    (state) => state.loginReducer.userLoginSuccessMessage
  );

  useEffect(() => {
    if (loginSuccessMessage !== "") {
      message.success(loginSuccessMessage);
    }
  }, [loginSuccessMessage]);

  return (
    <> 
  
    <Layout hasSider className="dashboard_container">

      {/* Sidebar Start */}
      <SideBar siderCollapseVal={collapsed} />
      {/* Sidebar End */}

      <Layout
        className="site-layout"
        style={{
          // marginLeft: collapsed ? 80 : 290,
          transition: "all 0.2s,background 0s",
        }}
      >
         <HeaderComponent 
            sendCollapsedVal={collapseData}
            collapseValue={collapsed}
         />

        {/* All Pages Calling here start */}
        <Routes>
          <Route path="/" element={<LoanAccounts />} />
          <Route path="/personaldetails" element={<PersonalDetails />} />
          <Route
            path="/loanaccountsdetails/:id"
            element={<LoanAccountsDetails />}
          />
          <Route path="/lognewrequest" element={<LogNewRequest />} />
          <Route path="/existingrequest" element={<ExistingRequest />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        {/* All Pages Calling here end */}
        
      </Layout>
    </Layout>
    </>
  );
};

export default Dashboard;
