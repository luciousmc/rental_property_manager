import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class PropertyDetail{
    constructor(props){
        super(props);
        this.state = {
            property: null
        }
    }
    render(){
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
                            
                        </Row>
                    </Container>
                </Row>
            </React.Fragment>
        );
    }
}