import React from 'react';
import { Container, Row, Col, Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function PropertyListItem(props){
    if (props.propertyList.length < 1){
        return(
            <Container>
                <Row>
                    <h3>No properties to display</h3>
                    <h3>Click "Add" above to add a property</h3>
                </Row>
            </Container>
        );
    }
    const outputList = props.propertyList.map(property=>{
        return(
            <Container className="mb-3">
                <Card  key={property.id} >
                    <Row>
                        <Col sm="4">
                            <CardImg src={property.image} className="property-img" />
                        </Col>
                        <Col sm="8">
                            <CardBody>
                                <CardTitle tag="h3">{property.streetAddress}</CardTitle>
                                <Row>
                                    <Col>
                                        <p className="text-muted">Type: {property.type}</p>
                                    </Col>
                                    <Col>
                                        <p className="text-muted">Units: {property.units}</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <p className="text-muted">Vacancies: {property.vacancies}</p>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    })
    return outputList;
}

export default PropertyListItem;