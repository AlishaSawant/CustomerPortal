import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGO } from "./Constants";
import {
  UserOutlined,
  LogoutOutlined,
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Marquee from "react-fast-marquee";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import { Navigate, Route, Routes } from "react-router-dom";
import LoanAccountsDetails from "../LoanAccountsDetails";
import PendingDocumentList from "../PendingDocumentList";

import "./Styles.scss";

const HomePage = () => {
  const navigate = useNavigate();
  const logout = () => {
    sessionStorage.removeItem("Token");
    navigate("/");
  };

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Account Summary", "sub1", <MailOutlined />, [
      getItem("Summary 1", "5"),
      getItem("Summary 2", "6"),
      getItem("Summary 3", "7"),
      getItem("Summary 4", "8"),
    ]),
    getItem("Loan Application Details", "1", <PieChartOutlined />),
    getItem("Pending Document List", "2", <DesktopOutlined />),
    getItem("Option 3", "3", <ContainerOutlined />),
    
    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]),
    ]),
  ];

  const handleMenuClick = (item) => {
    if (item.key === "1") {
      navigate("/loanaccountdetails"); // Redirect to Home page
    } else if (item.key === "2") {
      navigate("/PendingDocumentList"); // Redirect to Home page
    }
  };

  return (
    <>
      <section className="top_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 header_top_left_side">
              CLIX CAPITAL SERVICES PRIVATE LIMITED
            </div>
            <div className="col-md-6 text-md-end">
              <UserOutlined />{" "}
              <span className="d-inline-block px-2">Jonhson Mitchell</span>{" "}
              <LogoutOutlined />
            </div>
          </div>
        </div>
      </section>

      <section className="top_header_bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <small className="d-inline-block pt-2">
                Welcome JONSHON MITCHELL, your last visit was on 19 Sep 2022
                4:03 PM
              </small>
            </div>
            <div className="col-md-8 annoucement_sec">
              <Marquee pauseOnHover={true} loop={0} delay={1}>
                <p className="mb-0">
                  We’ve crossed paths, so we should probably introduce
                  ourselves! Here goes: We’re a smart, contemporary lending firm
                  that uses technology to make loans simpler, faster, and more
                  accessible for our customers. What does that mean? Minimum
                  paperwork. Faster sanctions. Maximum peace of mind! Sounds too
                  good to be true? Reach out to us and we’ll convince you!
                </p>
              </Marquee>
            </div>
          </div>
        </div>
      </section>

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
              <Menu
                defaultSelectedKeys={["1"]}
                // defaultOpenKeys={["sub1"]}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
                onClick={handleMenuClick}
              />
            </div>

            <div className="col-md-9">
              <Routes>
                <Route
                  path="/loanaccountdetails"
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
      {/* <button onClick={logout}>Logout</button>  */}
    </>
  );
};

export default HomePage;
