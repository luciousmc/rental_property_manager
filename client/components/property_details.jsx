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
                <Col>
                    <Nav pills>
                        <NavItem>
                            <NavLink href="#" active>Property Summary</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Unit Info</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Maintenece Providers</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Repair Requests</NavLink>
                        </NavItem>
                    </Nav>
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
                <Col>
                    <h1 className="text-center">Unit Details</h1>
                </Col>
            </Row>
            <Container>
                <Row>
                    <UnitItems unitList={props.unitList} />
                </Row>
            </Container>
        </div>
    );
}
