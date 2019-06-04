import React from 'react';


export default (props)=>(
    <React.Fragment>
        <Row>
            <Col>
                <h2>Proptery Summary</h2>
            </Col>
        </Row>
        <Row>
            <Col>
                <div>{props.propertyDetail.image}</div>
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
                    
                </Row>
            </Container>
        </Row>
    </React.Fragment>
);