import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../HeadersComponent/Constants";
import { Layout, Menu, Button } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    UserOutlined,
    MailOutlined,
    PieChartOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from "@ant-design/icons";
  import "./Style.scss";

  const { Sider } = Layout;

const SideBar = ({siderCollapseVal}) => {
    const navigate = useNavigate();

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
      getItem("Personal Details" , "1", <UserOutlined />),

      getItem("Account Summary", "sub1", <MailOutlined />, [
        getItem("Loan Application Details", "2", <PieChartOutlined />),
      
      ]),
      getItem("Request", "3", <ContainerOutlined />,[
        getItem("Log New Resquest", "4"),
        getItem("Existing Request", "5"),
  
      ]),
 
    ];
  
    const handleMenuClick = (item) => {
      if (item.key === "1") {
        navigate("/personaldetails"); // Redirect to Home page
      } else if (item.key === "2") {
        navigate("/loanaccountsdetails"); // Redirect to Loan Account Page
      } else if (item.key === "4") {
        navigate("/lognewrequest"); // Redirect to New Request Page
      }
       else if (item.key === "5") {
      navigate("/existingrequest"); // Redirect to New Request Page
      }
    };

    return (
        <>
<Sider
      width={270}
      style={{
        overflowX: "hidden",
        overflowY: "visible",
        // height: "100vh",
        // position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
      trigger={null}
      collapsible
      collapsed={siderCollapseVal}
    >
      <div
        className="demo-logo-vertical"
        style={{
          width: siderCollapseVal ? 0 : 290,
          justifyContent: "flex-start",
          background: "#fff"
        }}
      >
        {siderCollapseVal ? (
          <div className="collapsed_mobile_logo">CLIX</div>
        ) : (
          <img
            className="sidebar_logo"
            src={LOGO}
            alt="Company Logo"
          />
        )}
         
      </div>
      <Menu
        className="siderbar_menu"
        defaultSelectedKeys={["2"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        onClick={handleMenuClick}
      />
    </Sider>
 
        </>
    )
}

export default SideBar ;