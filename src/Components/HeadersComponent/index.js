import React from "react";
import Marquee from "react-fast-marquee";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOGO } from "./Constants";
import { DownOutlined } from '@ant-design/icons';
import { Divider, Dropdown, Space, Typography } from 'antd';
import {
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Style.scss"

// const items = [
//   {
//     key: '1',
//     label: 'Update Profile Details',
//   },
//   {
//     key: '2',
//     label: 'Switch to Dropline',
//   },
//   {
//     key: '3',
//     label: 'Frequently Added Questions',
//   },
//   {
//     key: '4',
//     label: 'Branch Locator',
//   },
//   {
//     key: '5',
//     label: 'Manage Your Mandates ',
//   },
//   {
//     type: 'divider',
//   },
//   {
//     key: '6',
//     label: 'Change Password',
//     icon: <LogoutOutlined />,
//   },
// ];

const HeaderComponent = () => {
  return (
    <>
      <section className="top_header">
        <Container fluid>
          <Row>
            <Col xs={6} className="header_top_left_side">
              {/* CLIX CAPITAL SERVICES PRIVATE LIMITED */}
              <img width={100} src={LOGO} alt="Clix Logo" />
            </Col>
            <Col className=" text-md-end pt-1 profile_icon">
              WELCOME TARUN DARDA
              <span className="logout_button">
                <LogoutOutlined />
              </span>
            </Col>
            
            {/* <div className="col-md-6 text-md-end pt-1 profile_icon">
              <UserOutlined />
              <span className="d-inline-block px-2 "><Dropdown
                menu={{
                  items,
                  selectable: true,
                  defaultSelectedKeys: ['3'],
                }}
              >
                <Typography.Link>
                  <Space className="profile_icon">
                   WELCOME TARUN DARDA
                  </Space>
                </Typography.Link>
              </Dropdown></span>
              <span className="logout_button">
                <LogoutOutlined />
              </span>
            </div> */}

          </Row>
        </Container>
      </section>

      
    </>
  );
};

export default HeaderComponent;
