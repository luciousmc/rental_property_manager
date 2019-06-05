import React from 'react';
import { Row, Col } from 'reactstrap';


export default (props)=>(
    <React.Fragment>
        <Row>
            <Col>
                <h1>{props.propertyDetail.streetAddress}</h1>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2>Property Summary</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>{props.propertyDetail.image}</div>
            </Col>
            <Col>
                <Row>
                    <h3>Location: {props.propertyDetail.city}, {props.propertyDetail.state}</h3>
                </Row>
                <Row>
                    <h3>Square Ft: {props.propertyDetail.footage}</h3>
                </Row>
                <Row>
                    <h3>Tenants: </h3>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
                <h1>Property Details</h1>
            </Col>
        </Row>
        <Row>
            <Container>
                <Row>
                    
                </Row>
            </Container>
        </Row>
    </React.Fragment>
);