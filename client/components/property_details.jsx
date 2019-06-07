import React from 'react';
import {Container, Row, Col, NavItem, Nav, NavLink, CardImg, FormGroup, CustomInput, Label, Card} from 'reactstrap';
import UnitItems from './unit_items';

export default (props)=> {
    let image = null;
    if (!props.propertyDetail.image){
       image = (
           <form>
               <Col className="col-sm-auto offset-sm-1">
                       <Card className="mr-auto" style={{ width: '18rem' }}>
                           <CardImg width="100%" src="https://bolde.in/uploads/business_images/default_business.jpg"/>
                       </Card>
               </Col>
               <Col md={5}>
                   <FormGroup>
                       <Label for="image_upload">Add Property Image</Label>
                       <CustomInput type="file" name="image_file" id="image_upload" />
                   </FormGroup>
               </Col>
           </form>
    );
    } else {
        image = (
            <Col>
                <CardImg src={props.propertyDetail.image}/>
            </Col>);
    }

    return (
        <div>
            <Row>
                <h1 className="property-detail-header mx-auto">{props.propertyDetail.street_address}</h1>
            </Row>
            <Row>
            <Col className="details-header danger text-center py-2">
                <Container>
                    <Nav pills>
                        <Col>
                            <a className="detail-link p-2 my-1" href="#">Property Summary</a>
                        </Col>
                        <Col>
                            <a className="detail-link p-2 my-1" href="#">Unit Info</a>
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
                {image}
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
