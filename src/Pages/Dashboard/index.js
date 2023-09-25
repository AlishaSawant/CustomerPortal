import React, { useEffect, useState } from "react";
import { Layout, message } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoanAccounts from "../LoanAccounts";
import PendingDocumentList from "../PendingDocumentList";
import HeaderComponent from "../../Components/HeadersComponent";
import MenuTab from "../../Components/MenuTab";
import "./Style.scss";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import LoanAccountsDetails from "../LoanAcountsDetails";

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
            <Container fluid className="container-fluid ps-0">
              <Row>
                <Col md={3}>
                  <MenuTab />
                </Col>

                <Col md={9}>
                  <Routes>
                    <Route path="/" element={<LoanAccounts />} />
                    <Route
                      path="/pendingdocumentlist"
                      element={<PendingDocumentList />}
                    />
                     <Route 
                      path="/loanaccountsdetails/:id" 
                      element={<LoanAccountsDetails />} />  
                    <Route 
                      path="/*" 
                      element={<Navigate to="/" />} />
                  </Routes>
                </Col>
              </Row>
            </Container>
          </Tab>

          <Tab eventKey="payments" title="Payments">
            Payments
          </Tab>
        </Tabs>
      </section>

    </Layout>
  );
};

export default Dashboard;
