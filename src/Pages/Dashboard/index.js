import React, { useEffect, useState } from "react";
import { Layout, message } from "antd";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoanAccounts from "../LoanAccounts";
import PendingDocumentList from "../PendingDocumentList";
import HeaderComponent from "../../Components/HeadersComponent";
import MenuTab from "../../Components/MenuTab";
import LoanAccountsDetails from "../LoanAcountsDetails";
import PersonalDetails from "../PersonalDetails";
import "./Style.scss";


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
                  <div>
                  <Routes>
                    <Route path="/" element={<LoanAccounts />} />
                    <Route
                      path="/personaldetails"
                      element={<PersonalDetails />}
                    />
                     <Route 
                      path="/loanaccountsdetails/:id" 
                      element={<LoanAccountsDetails />} />  
                    <Route 
                      path="/*" 
                      element={<Navigate to="/" />} />
                  </Routes>
                  </div>
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
