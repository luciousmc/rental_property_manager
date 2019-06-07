import React from 'react';
import {Container, Row, Col, NavItem, Nav, NavLink, CardImg} from 'reactstrap';
import UnitItems from './unit_items';

export default (props)=> {
    return (
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
            <Row>
                <Col>
                    <CardImg src={props.propertyDetail.image}/>
                </Col>
                <Col>
                    <Row>
                        <h4>Property: {props.propertyDetail.property_name}</h4>
                    </Row>
                    <Row>
                        <h4>Address: {props.propertyDetail.street_address} {props.propertyDetail.city}, {props.propertyDetail.state} {props.propertyDetail.zip}</h4>
                    </Row>
                    <Row>
                        <h4>Property Type: {props.propertyDetail.property_type}</h4>
                    </Row>
                    <Row>
                        <h4>Units: {props.propertyDetail.units ? props.propertyDetail.units.length : ''}</h4>
                    </Row>
                    <Row>
                        <h4>Square ft: {props.propertyDetail.sqft}</h4>
                    </Row>
                    <Row>
                        <h4>Parking Spaces: {props.propertyDetail.parking_spaces} </h4>
                    </Row>
                    <Row>
                        <h4>Manager Name: {props.propertyDetail.manager_contact} </h4>
                    </Row>
                    <Row>
                        <h4>Manager Number: {props.propertyDetail.manager_phone} </h4>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col className="details-header py-2">
                    <Container>
                        <Nav pills>
                            <Row>
                            <h3 className="p-2 my-1">Unit Details</h3>
                                
                            </Row>
                        </Nav>
                    </Container>
                </Col>
            </Row>
            <Container>
                <Col>
                    <h4>
                        <a href="/add-unit-page">+ Add Unit</a>
                    </h4>
                </Col>
            </Container>
            <Container>
                <Row>
                    <UnitItems unitList={props.unitList} />
                </Row>
            </Container>
        </div>
    );
}
