import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function PropertyDetails(props){
    return(
        <React.Fragment>
            <Row>
                <Col>
                    <h1>23002 El Toro Road</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Proptery Summary</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>image</div>
                </Col>
                <Col>
                    <h2>Property summary detilas</h2>
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
                        {/* <UnitDetails /> */}blah blah
                    </Row>
                </Container>
            </Row>
        </React.Fragment>
    );
}

export default PropertyDetails;