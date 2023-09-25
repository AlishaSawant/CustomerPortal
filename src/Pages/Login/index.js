import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import { UserOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";

import {loginInt, loginFailed} from "./Action";

import "./Style.scss"
import { LOGO, BG_IMG} from "./Constants";

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
    // <Spin spinning={loading}>
    <div className="login_bg_img">
 
      <div className="login_main_container">
        
          {/* Login form section start */}
          <div className="login_right_side">
            <div className="text-center pb-md-4">
              <img width={170} src={LOGO} alt="Clix Logo" />
              <h2 className="mb-0 fw-bold mt-3"> Welcome to Clix! </h2>
              <p className="grey_color mb-2">Please Enter Your Login Credentials</p>
            </div>

              <Spin spinning={loading}>
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
                      label="Enter Registered Mobile Number"
                      name="username"
                      rules={[
                        {
                          // type: "email",
                          required: true,
                          message: "Please enter Mobile Number",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input
                      className="mt-1"
                        placeholder="Mobile Number"
                        prefix={
                          <PhoneOutlined className="site-form-item-icon phn_icon" />
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
                        Login With OTP
                      </Button>
                    </Form.Item>
                  </Form>
                  {/* Form end */}
                </div>
              </Spin>
            

          </div>
          {/* Login form section start */}
      
      </div>
    </div>
    // </Spin>
  );
};

export default Login;
