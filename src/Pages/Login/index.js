import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import {loginInt, loginFailed} from "./Action";

import "./Style.scss"
import { LOGO, LOGIN_SLIDER_ONE, LOGIN_SLIDER_TWO, LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILED } from "./Constants";

const Login = () => {

  const [loading, setLoading] = useState(false);
  const disptach = useDispatch();
  const loginFailedMessage = useSelector((state) => state.loginReducer.userLoginFailedMessage);
  
  const loginWithEmailPw = (values) => {
    setLoading(true)
    disptach(loginInt(values));
  };
  const loginWithEmailPwFailed = (errorInfo) => {
    setLoading(false)
  };

  useEffect(() => {
    if(loginFailedMessage !== ""){
      setLoading(false);
      message.error(loginFailedMessage)
      disptach(loginFailed(""))
    }
  }, [loginFailedMessage])


  return (
    <Spin spinning={loading}>
      <div className="container-fluid login_main_container">
        <div className="row justify-content-center align-items-center">
          {/* Login left side image and carousal start */}
          <div className="col-md-7 login_left_side">
            {/* Carousal start */}
            <Carousel>
              <Carousel.Item interval={6000}>
                <img src={LOGIN_SLIDER_ONE} />
              </Carousel.Item>
              <Carousel.Item interval={6000}>
                <img src={LOGIN_SLIDER_TWO} />
              </Carousel.Item>
            </Carousel>
            {/* Carousal end */}
          </div>
          {/* Login left side image and carousal end */}

          {/* Login form section start */}
          <div className="col-md-5 login_right_side">
            <div className="text-center pb-md-4">
              <img src={LOGO} alt="Clix Logo" />
              <h1 className="mb-0 fw-bold mt-3"> Welcome to Clix! </h1>
              <p className="grey_color mb-2">Please Enter Your Login Credentials</p>
            </div>

              <div>
                {/* Form start */}
                <div className="login_with_emialid_pw">
                  <Form
                    name="basic"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={loginWithEmailPw}
                    onFinishFailed={loginWithEmailPwFailed}
                    autoComplete="off"
                  >
                    <Form.Item
                      className="email_phn"
                      label="Enter Registered Email ID"
                      name="username"
                      rules={[
                        {
                          // type: "email",
                          required: true,
                          message: "Please enter Email ID",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                        placeholder="Email ID"
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password
                        placeholder="********"
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                      />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox className="auth_checkbox">
                        I authorize Clix Capital to connect with me through
                        Call/Email/SMS
                      </Checkbox>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" block htmlType="submit">
                        Login
                      </Button>
                    </Form.Item>
                  </Form>
                  {/* Form end */}
                </div>
              </div>
            

          </div>
          {/* Login form section start */}
        </div>
      </div>
    </Spin>
  );
};

export default Login;
