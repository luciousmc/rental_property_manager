import React from 'react';
import { CardBody, Card, CardImg, CardTitle, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export const LandingPage = ()=>(
    <React.Fragment>
        <Container>
            <Row className="col-8 offset-2">
                <Col className="mr-auto">
                    <Card style={{ width: '18rem' }}>
                        <CardImg  width="100%" src="images/manager_icon.png" />
                        <CardBody>
                            <CardTitle>Property Manager</CardTitle>
<<<<<<< HEAD
                           <Button className="btn btn-secondary">
                                <Link to="/manager-main">
=======
                            {/* <Button onClick={()=>this.setView('manager-main', {})}>Go to Portal</Button> */}
                           <Button color="info">
                                <Link to="/manager-main" style={{color: 'white'}}>
>>>>>>> dev
                                    Go to Portal
                                </Link>
                           </Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col width="50%">
                <Card className="mr-auto" style={{ width: '18rem' }}>
                        <CardImg width="100%" src="images/tenant_icon.png" />
                        <CardBody>
                            <CardTitle>Tenant</CardTitle>
                            <Button color="info">Go to Portal</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </React.Fragment>
);