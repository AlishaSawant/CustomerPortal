import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu, Button } from "antd";
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from "@ant-design/icons";
  import "./Style.scss";

 

const MenuTab = () => {
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
      getItem("Account Summary", "sub1", <MailOutlined />, [
        getItem("Loan Application Details", "1", <PieChartOutlined />),
        getItem("Pending Document List", "2", <DesktopOutlined />),
        // getItem("Summary 3", "7"),
        // getItem("Summary 4", "8"),
      ]),
      // getItem("Loan Application Details", "1", <PieChartOutlined />),
      // getItem("Pending Document List", "2", <DesktopOutlined />),
      getItem("Request", "3", <ContainerOutlined />,[
        getItem("Loan Statement", "4"),
        getItem("Loan Documents", "5"),
        getItem("Payment Summary", "6"),
        getItem("Service Resquest History", "7"),
  
      ]),
      
      getItem("Transact", "sub2", <AppstoreOutlined />, [
        getItem("Online Payments", "8"),
        getItem("E-Agrement", "9"),
        getItem("Pre-EMI to EMI", "10"),
        getItem("Request for Top UP", "11"),
      ]),
    ];
  
    const handleMenuClick = (item) => {
      if (item.key === "1") {
        navigate("/"); // Redirect to Home page
      } else if (item.key === "2") {
        navigate("/PendingDocumentList"); // Redirect to Home page
      }
    };

    return (
        <>
            <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
                onClick={handleMenuClick}
              />
           <Button
           className="hemburger_menu"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 39,
              height: 39,
            }}
          />
        </>
    )
}

export default MenuTab