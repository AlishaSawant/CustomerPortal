import React from "react";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";
import { Table, Divider } from 'antd';
import "./Style.scss"


const ExistingRequest = () => {

    const columns = [
        {
            title: 'SR Number',
            dataIndex: 'srno',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
        },
        {
            title: 'Source',
            dataIndex: 'source',
        },
        {
            title: 'Status',
            dataIndex: 'status',
        },
        {
            title: 'Request Date',
            dataIndex: 'requestdate',
        },
        {
            title: 'Last Updated On',
            dataIndex: 'lastupdatedon',
        },
    ];

    const data = [
        {
            key: '1',
            srno: 'SR67760788',
            subject: 'Others',
            source: 'PORTAL WEB',
            status: 'Closed',
            requestdate: '17 Jan 2022 02:21 PM',
            lastupdatedon: '18 Jan 2022 07:24 AM'
        },
        {
            key: '2',
            srno: 'SR46306491',
            subject: 'Change in ROI',
            source: 'PORTAL WEB',
            status: 'Closed',
            requestdate: '21 Dec 2020 11:53 AM',
            lastupdatedon: '04 Jan 2021 01:57 AM'
        },
    ];
    return (

        <Col md={12} style={{ padding: "20px 20px" }}>
            <Row>
                <Heading name="Raised Request Status" />
                <section className="exestingResquest">
                    <Row className="title_requeststatus">Click on SR number to check latest updates of service resquest</Row>
                    <div className="srResquestTable" >
                        <Table className="srtable" columns={columns} dataSource={data} size="middle" />
                    </div>
                </section>
            </Row>
        </Col>
    )
}

export default ExistingRequest;