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
                <Row>
                    <Col md={7} style={{ border: "1px solid black" }}>
                        <h6>Select Your Specific Query</h6>
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

                                        <Select.Option value="demo">Demo</Select.Option>
                                    </Select>
                                </Form.Item>

                                <Form.Item className="select">
                                    <Select placeholder="Continue Selecting">

                                        <Select.Option value="demo">Demo</Select.Option>
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
                            </div>
                        </Form>
                    </Col>
                    <Col md={1} style={{ border: "1px solid black", height: "100px" }}>

                    </Col>
                    <Col md={4} style={{ border: "1px solid black", height: "100px" }}>

                    </Col>

                </Row>
            </section>
        </Row>
    );
}

export default LogNewRequest;