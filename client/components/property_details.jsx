import React from 'react';
import {Container, Row, Col, Nav, CardImg} from 'reactstrap';
import UnitItems from './unit_items';
import AddImage from './addImage';

export default (props)=> {
    let image = null;
    if (!props.propertyDetail.image){
       image = <AddImage propId={props.propertyDetail.id}/>;
    } else {
        image = (
            <Col>
                <CardImg src={props.propertyDetail.image}/>
            </Col>);
    }

    return (
        <div>
            <Row>
                <Col className="header-background">
                    <h1 className="property-detail-header text-center display-3">{props.propertyDetail.property_name}</h1>
                    <h1 className="property-detail-header text-center display-5">{props.propertyDetail.street_address}</h1>
                </Col> 
            </Row>
            <Row>
            <Col className="details-header text-center py-2">
                <Container>
                    <Nav pills>
                        <Col>
                            <a className="detail-link p-2 my-1" href="/manager-main">Property Summary</a>
                        </Col>
                        <Col>
                            <a className="detail-link p-2 my-1" href={`/property/${props.propertyDetail.id}/add-unit`}>Add Unit</a>
                        </Col>
                        <Col>
                            <a className="detail-link p-2 my-1" href={`/property/${props.propertyDetail.id}/manager-review`}>Repair Requests</a>
                        </Col>
                    </Nav>
                </Container>
            </Col>
            </Row>
            <Row>
                {image}

                <Col className="p-5">

                    <Row>
                        <h5>Property: {props.propertyDetail.property_name}</h5>
                    </Row>
                    <Row>
                        <h5>Address: {props.propertyDetail.street_address} {props.propertyDetail.city}, {props.propertyDetail.state} {props.propertyDetail.zip}</h5>
                    </Row>
                    <Row>
                        <h5>Property Type: {props.propertyDetail.property_type}</h5>
                    </Row>
                    <Row>
                        <h5>Units: {props.propertyDetail.units ? props.propertyDetail.units.length : ''}</h5>
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
                    <h1 className="text-center details-header">Unit Details</h1>

                </Col>
            </Row>
            <Container>
                <Col>
                <Row >
                    <h5 className="mr-5">
                        <a style={{color: 'white', textShadow: 20 }} href={`/property/${props.propertyDetail.id}/add-unit`}>+ Add Unit</a>
                    </h5>
                </Row>
                </Col>
            </Container>
            <Container>
                <Row>
                    <UnitItems unitList={props.unitList} propertyID={props.propertyDetail.id} />
                </Row>
            </Container>
        </div>
    );
}
