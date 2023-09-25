import React from "react";
import Marquee from "react-fast-marquee";
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 header_top_left_side">
              {/* CLIX CAPITAL SERVICES PRIVATE LIMITED */}
              <img width={100} src={LOGO} alt="Clix Logo" />
            </div >
            <div className="col-md-6 text-md-end pt-1 profile_icon">
              WELCOME TARUN DARDA
              <span className="logout_button">
                <LogoutOutlined />
              </span>
            </div>
            
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

          </div>
        </div>
      </section>

      <section className="top_header_bottom">
        <div className="container-fluid">
        </div>
      </section>
    </>
  );
};

export default HeaderComponent;
