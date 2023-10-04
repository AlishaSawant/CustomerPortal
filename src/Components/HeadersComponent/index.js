import React from "react";
import {Row, Col} from "react-bootstrap";
import { Layout } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import "./Style.scss";

const { Header } = Layout;

const HeaderComponent = (props) => {
  console.log(props, "props");
  const { sendCollapsedVal, collapseValue } = props;

  const collapseData = () => {
    sendCollapsedVal(!collapseValue);
  };

  return (
    <>
      <Header className="header_sec">
        {/* <Button
        type="text"
        icon={collapseValue ? <CloseOutlined /> : <MenuFoldOutlined /> }
        className="hemburger_menu"
        onClick={collapseData}
      /> */}
        <Row>
          <Col className="fw-medium text-md-end profile_icon">
            WELCOME TARUN DARDA &nbsp;&nbsp;
            <span className="logout_button">
            <PoweroffOutlined />
            </span>
          </Col>
        </Row>
      </Header>
    </>
  );
};

export default HeaderComponent;
