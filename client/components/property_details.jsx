import React from 'react';
import { Container, Row, Col, NavItem, Nav, NavLink } from 'reactstrap';
import UnitItems from './unit_items';

export default (props)=>(
    <div>
        <Row>
            <h1 className="property-detail-header mx-auto">{props.propertyDetail.street_address}</h1>
        </Row>
        <Row>
            <Col className="details-header text-center py-2">
                <Container>
                    <Nav pills>
                        <Col>
                            <a className="detail-link p-2 my-1" href="/manager-main">Property Summary</a>
                        </Col>
                        <Col>
                            <a className="detail-link p-2 my-1" href="/add-unit-page">Add Unit</a>
                        </Col>
                        <Col>
                            <a className="detail-link p-2 my-1" href="#">Maintenence</a>
                        </Col>
                        <Col>
                            <a className="detail-link p-2 my-1" href="#">Repair Requests</a>
                        </Col>
                    </Nav>
                </Container>
            </Col>
        </Row>
        <Row className="p-5">
            <Col>
                <div>{props.propertyDetail.image}</div>
            </Col>
            <Col>
                <Row>
                    <h5>Property Name: {props.propertyDetail.property_name}</h5>
                </Row>
                <Row>
                    <h5>Address: {props.propertyDetail.street_address}, {props.propertyDetail.city}, {props.propertyDetail.state} {props.propertyDetail.zip}</h5>
                </Row>
                <Row>
                    <h5>Property Type: {props.propertyDetail.property_type}</h5>
                </Row>
                <Row>
                    <h5>Units: </h5>
                </Row>
                <Row>
                    <h5>Square ft: {props.propertyDetail.sqft}</h5>
                </Row>
                <Row>
                    <h5>Parking Spaces: {props.propertyDetail.parking_spaces} </h5>
                </Row>
                <Row>
                    <h5>Manager Name: {props.propertyDetail.manager_contact} </h5>
                </Row>
                <Row>
                    <h5>Manager Number: {props.propertyDetail.manager_phone} </h5>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col className="mb-5">
                <h2 className="text-center details-header">Unit Details</h2>
            </Col>
        </Row>
        <Container>
            <Row>
                <UnitItems unitList={props.unitList} />
            </Row>
        </Container>
    </div>
);
