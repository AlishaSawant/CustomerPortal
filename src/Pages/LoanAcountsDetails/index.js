import React from "react";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space, Tooltip } from 'antd';

import "./Style.scss"


const LoanAccountsDetails = () => {

    const handleButtonClick = (e) => {
        message.info('Click on left button.');
        console.log('click left button', e);
    };
    const handleMenuClick = (e) => {
        console.log('click', e);
    };
    const items = [
        {
            label: '1st menu item',
            key: '134234543523',
            icon: <UserOutlined />,
        },
        {
            label: '2nd menu item',
            key: '223423',
            icon: <UserOutlined />,
        },
        {
            label: '3rd menu item',
            key: '355656',
            icon: <UserOutlined />,
            danger: true,
        },
        {
            label: '4rd menu item',
            key: '423434',
            icon: <UserOutlined />,
            danger: true,
            disabled: true,
        },
    ];
    const menuProps = {
        items,
        onClick: handleMenuClick,
    };



    return (
        <>
            <Row className="closedPersonalLoan">
                <Col md={6} >
                    <Heading name="My Closed Loans | Variable Personal Loans" />
                </Col>
                <Col md={6} className="text-end">
                    <Dropdown menu={menuProps}>
                        <Button className="selectLoanAccountButton">
                            Select Loan Account
                            <DownOutlined />
                        </Button>
                    </Dropdown>
                </Col>
            </Row>
            <section className="myClosedLoans" >
                <Row className="loandetails">
                    <Col md={3}>
                        <div className="loanAmount">Loan Amount</div>
                        <h6 className="loanAmountSection">Rs. 6,94,000.00</h6>
                    </Col>
                    <Col md={3}>
                        <div className="tenor">Tenor</div>
                        <h6 className="tenorSection">30 Months</h6>
                    </Col>
                    <Col md={3}>
                        <div className="emiAmount">EMI Amount</div>
                        <h6 className="emiAmountSection">Rs. 0</h6>
                    </Col>
                    <Col md={3}>
                        <div className="rateOfIntrest">Rate of Intrest</div>
                        <h6 className="rateOfIntrestSection">7.90 %</h6>
                    </Col>
                </Row>

                <Row className="allDetails">
                    <Col md={4} className="currentLoanDetails" >
                        <h6>Current Loan Details</h6>
                        <p className="lan">Loan Account Number : H401VPL0224025</p>
                        <hr></hr>

                        <div className="d-flex justify-content-between">
                            <p>Total Amount Sanctioned : </p>
                            <p className="landetails">6,94,000.00</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p>Rate of Intrest :</p>
                            <p className="landetails"> 7.90%</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p>Loan Tenor : </p>
                            <p className="landetails">30 Months</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p>EMI Amount : </p>
                            <p className="landetails">0</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p>Intrest Outstanding : </p>
                            <p className="landetails">0</p>
                        </div>

                        <div className="d-flex justify-content-between">
                            <p>Total Amount Repaid :</p>
                            <p className="landetails"> 8,22,234.00</p>
                        </div>
                        <hr></hr>
                        <p className="viewMoreDetails">View More Details</p>
                    </Col>

                    <Col md={1}>
                    </Col>

                    <Col md={7}>
                        <Col md={12} className="details">
                            <div className= "d-flex justify-content-between">
                            <h6 className="repaymentStatus">Repayment Status</h6>
                            <span className="nextEmiDate">Next EMI Due On 5 May 2022</span>
                            </div>
                            <hr></hr>
                            <div className="d-flex">
                                <div>
                                    <span>Repaid Loan Amount: </span>
                                    <span className="detailsection">  Rs. 8,22,234.00</span>
                                </div>
                            </div>
                        </Col>
                        <Col md={12} className="details">
                            <h6 className="disbAmount">Disbursement Details</h6>
                            <div className="d-flex justify-content-between">
                                <p>Rate of Intrest:</p>
                                <p className="detailsection"> 7.90%</p>
                                <span>Last Disbursement Date:</span>
                                <p className="detailsection"> 31 Oct 2029 </p>
                                <span className="viewMoreDetails">View More Details</span>
                            </div>
                        </Col>
                        <Col md={12} className="details">
                            <h6 className="feeDeatils">Fee Details</h6>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span>Total Fee Paid: </span>
                                    <span className="detailsection">Rs.0</span>
                                </div>
                                <span className="viewMoreDetails">View More Details</span>
                            </div>
                        </Col>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default LoanAccountsDetails;