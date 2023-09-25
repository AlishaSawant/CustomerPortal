import React from "react";
import Heading from "../../Components/Heading";
import { Container, Row, Col } from "react-bootstrap";

import "./Style.scss"


const LoanAccountsDetails = () => {
    return (
        <>
            <Heading name="My Closed Loans | Variable Personal Loans" />
            <Container >
                <div style={{border : "1px solid black"}}>
                <Row className="loandetails">
                    
                    <Col className="col-md-3">
                        <h6>Loan Amount</h6>
                        <h5>Rs. 6,94,000.00</h5>
                    </Col>
                    <Col className="col-md-3">
                        <h6>Loan Amount</h6>
                        <h5>30 Months</h5>
                    </Col>
                    <Col className="col-md-3">
                        <h6>Loan Amount</h6>
                        <h5>Rs. 0</h5>
                    </Col>
                    <Col className="col-md-3">
                        <h6>Loan Amount</h6>
                        <h5>7.90 %</h5>
                    </Col>
                </Row>
                   <div>
                    <Col className="col-md-4 currentLoanDetails">

                    </Col>

                    <Col className="cold-md-8 repaymentStatus">

                    </Col>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default LoanAccountsDetails;