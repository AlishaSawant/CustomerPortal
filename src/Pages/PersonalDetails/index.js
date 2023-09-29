import React from "react";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import "./Style.scss"

import {
    IdcardOutlined,
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    CalendarOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
  import "./Style.scss"

import {
    FIRST_NAME,
    EMAIL,
    PHONE_NUMBER,
    DOB,
    PAN,
    ID,
    LAST_NAME,
    PROFILE_PICTURE,
} from "./Constants";

const PersonalDetails = () => {
    return (
        <Row className="personalDetailsContainer">
            <Heading name="Personal Details" />
            <Row>
                <Col md={4} className="personal_details_column">
                    <div>
                        <img className="profile_image" src={PROFILE_PICTURE} alt="Registered Name" />
                    </div>
                    <div>
                        <h5 className="user_info">User Details </h5>
                        <hr></hr>
                    </div>
                    <div className="user_details">
                        <div className="personal_details">
                            {/* <img src={ID} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span><IdcardOutlined /></span> */}
                            <span className="header">Customer ID :</span>
                            <span className="data">1234</span>
                        </div>
                        <div className="personal_details">
                            {/* <img src={FIRST_NAME} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span><UserOutlined /></span> */}
                            <span className="header">First Name :</span>
                            <span className="data">Rakesh</span>
                        </div>
                        <div className="personal_details">
                            {/* <img src={LAST_NAME} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span><UserOutlined /></span> */}
                            <span className="header">Last Name :</span>
                            <span className="data">Patil</span>
                        </div>
                        <div className="personal_details">
                            {/* <img src={EMAIL} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span><MailOutlined /></span> */}
                            <span className="header">Email :</span>
                            <span className="data">rakesh@clix.com</span>
                        </div>
                        <div className="personal_details ">
                            {/* <img src={PHONE_NUMBER} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span>< PhoneOutlined className="phn_icon"/ ></span> */}
                            <span className="header">Mobile Number :</span>
                            <span className="data">9405825721</span>
                        </div>
                        <div className="personal_details">
                            {/* <img src={DOB} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span><CalendarOutlined /></span> */}
                            <span className="header">DOB :</span>
                            <span className="data">16.01.1988</span>
                        </div>
                        <div className="personal_details pan">
                            {/* <img src={PAN} alt="Registered Name" className="personal_details_icon" /> */}
                            {/* <span><ProfileOutlined /></span> */}
                            <span className="header">PAN :</span>
                            <span className="data">HXRS00012</span>
                        </div>

                    </div>
                </Col>
                <Col md={6} className="loan_details_column">
                    <h5 className="loan_details">Loan Details</h5>
                    <hr></hr>
                    <div className="loan_details_info">
                        <span className="loan_header">Loan Type :</span>
                        <span className="loan_data">Personal Loan</span>
                    </div>
                    <div className="loan_details_info">
                        <span className="loan_header">Loan Account Number :</span>
                        <span className="loan_data">100025631021</span>
                    </div>
                    <div className="loan_details_info">
                        <span className="loan_header">Loan Amount :</span>
                        <span className="loan_data">35,000,00</span>
                    </div>
                    <div className="loan_details_info">
                        <span className="loan_header">Tenure :</span>
                        <span className="loan_data">1 month</span>
                    </div>
                    <div className="loan_details_info">
                        <span className="loan_header">EMI :</span>
                        <span className="loan_data">20,000</span>
                    </div>
                    <div className="loan_details_info">
                        <span className="loan_header">Next Due Date :</span>
                        <span className="loan_data">30.09,2023   </span>
                    </div>
                </Col>
            </Row>

        </Row>

    )
}

export default PersonalDetails;