import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyList from './property_list';

export default ()=>(
    <React.Fragment>
        <Container>
            <Row>
                <Col className="col-8 offset-2">
                    <PropertyList setView={this.setView} />
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);