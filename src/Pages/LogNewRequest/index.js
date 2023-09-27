import React, { useState } from "react";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import {
    Button,
    Form,
    Select,
    Checkbox,
} from 'antd';
import "./Style.scss"

const LogNewRequest = () => {


    return (
        <Row>
            <Heading name="Support Sevices For You" />
            <section className="supportServices" >
                <Row className="supportquries">
                    <Col md={7} className="col_quries">
                        <Row className="specificQuery" >Select Your Specific Query</Row>
                        <Form
                            labelCol={{
                                span: 4,
                            }}
                            wrapperCol={{
                                span: 14,
                            }}
                            layout="horizontal"

                            style={{
                                maxWidth: 600,
                            }}
                            className="query_form"
                        >
                            <div>
                                <Form.Item className="select">
                                    <Select placeholder="Start Selection Here">
                                        <Select.Option value="demo">Flexi Loan Related </Select.Option>
                                        <Select.Option value="demo">Refund Related Quries</Select.Option>
                                        <Select.Option value="demo">Update Personal Details/Loan Details</Select.Option>
                                        <Select.Option value="demo">Loans</Select.Option>
                                        <Select.Option value="demo">Payment & Repayments</Select.Option>
                                        <Select.Option value="demo">Fees & Charges</Select.Option>
                                        <Select.Option value="demo">Portal Login Process</Select.Option>
                                        <Select.Option value="demo">Branch Locator</Select.Option>
                                        <Select.Option value="demo">Insurance and Other Value Added Service </Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item className="select">
                                    <Select placeholder="Continue Selecting">
                                    <Select.Option value="demo">Overdue Charges</Select.Option>
                                        <Select.Option value="demo">Processing Fees</Select.Option>
                                        <Select.Option value="demo">Bounce Charges</Select.Option>
                                        <Select.Option value="demo">ECS Return Charges</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item >
                                    <Select placeholder="Choose Your Query">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item >
                                    <Select placeholder="Select Specific">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item >
                                    <Select placeholder="Select LAN(s)">
                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>

                                <div className="submitCancelButton">
                                    <Button className="submit">Submit</Button>
                                    <Button className="cancel">Cancel</Button>
                                </div>
                            </div>
                        </Form>
                    </Col>
                    <Col md={1}>

                    </Col>
                    <Col md={4} className="links">
                        <Row className="quickLink" >Quick Link</Row>
                        <div>
                            <h6>Loan Account Details</h6>
                            <hr></hr>
                            <h6>Loan Statement</h6>
                            <hr></hr>
                            <h6>Service Resquest History</h6>
                            <hr></hr>
                            <h6>Online Payment</h6>
                            <hr></hr>
                            <h6>Request for Top-up</h6>
                        </div>
                    </Col>

                </Row>
            </section>
        </Row>
    );
}

export default LogNewRequest;