import React from "react";
import Marquee from "react-fast-marquee";
import { LOGO } from "./Constants";
import {
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./Style.scss"

const HeaderComponent = () => {
  return (
    <>
      <section className="top_header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 header_top_left_side">
              {/* CLIX CAPITAL SERVICES PRIVATE LIMITED */}
              <img width={100} src={LOGO} alt="Clix Logo" />
            </div>
            <div className="col-md-6 text-md-end pt-1">
              <UserOutlined /> 
              <span className="d-inline-block px-2">Jonhson Mitchell</span> 
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
    </>
  );
};

export default HeaderComponent;
