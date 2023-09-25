import React, { useEffect, useState } from "react";
import { Layout, message } from "antd";

import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import LoanAccountsDetails from "../LoanAccountsDetails";
import PendingDocumentList from "../PendingDocumentList";
import HeaderComponent from "../../Components/HeadersComponent";
import MenuTab from "../../Components/MenuTab";
import "./Style.scss";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Dashboard = () => {

  const loginSuccessMessage = useSelector(
    (state) => state.loginReducer.userLoginSuccessMessage
  );

  useEffect(() => {
    if (loginSuccessMessage !== "") {
      message.success(loginSuccessMessage);
    }
  }, [loginSuccessMessage]);

  return (
    <Layout>

      {/* Header Section Start */}
      <HeaderComponent />
      {/* Header Section End */}


      <section className="menu_tabs">
      <Tabs
        defaultActiveKey="My Relations"
        transition={false}
        id="noanim-tab-example"
      >
        <Tab eventKey="My Relations" title="My Relations">
        <div className="container-fluid ps-0">
          <div className="row">
            <div
              className="col-md-3"
            >
              <MenuTab />
            </div>

            <div className="col-md-9">
              <Routes>
              <Route
                  path="/"
                  element={<LoanAccountsDetails />}
                />
                <Route
                  path="/pendingdocumentlist"
                  element={<PendingDocumentList />}
                />
              </Routes>
            </div>
          </div>
          </div>
        </Tab>

        <Tab eventKey="payments" title="Payments">
          Payments
        </Tab>

      </Tabs>
      </section>

        {/* All Pages Calling here start */}
       {/*  <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loanaccountdetails" element={<LoanAccountsDetails />} />
          <Route path="/pendingdocumentlist" element={<PendingDocumentList />} />
          <Route path="/*" element={<Navigate to="/" />} />    
        </Routes> */}
        {/* All Pages Calling here end */}
      </ Layout>
  );
};

export default Dashboard;
