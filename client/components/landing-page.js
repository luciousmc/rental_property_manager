import React from 'react';
import { Card, CardImg, Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

export const LandingPage = ()=>(
    <React.Fragment>
            <Jumbotron className="manager-hero">
                <Container>
                    <Row style={{marginBottom: '40px'}}>
                        <Col>
                            <Card className="mr-auto" style={{ width: '18rem' }}>
                                <CardImg width="100%" src="images/manager_icon.png" />
                            </Card>
                        </Col>
                        <Col>
                            <h2 className="display-4">Property Managers</h2>
                            <p className="lead">The benefits of using the Property Manager Portal will significantly help organize your investment properties, locate/contact delinquent tenant payments, and measure your overall monthly and annual revenue with maintenance reports.</p>
                            <Link to="/manager-main" style={{color: 'white'}}>
                                <Button size='lg' className='col-5 offset-3' color="danger">
                                Manager Portal
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            <Jumbotron className="tenant-hero">
                <Container>
                    <Row >
                        <Col>
                            <h2 className="display-4">Tenants</h2>
                            <p className="lead">The Tenant Portal helps to manage your current living situation and make your life a lot easier when it comes to contacting the owner. You can use this portal to view your housing details, request maintenance repairs on the property, and contact the owner when needed.</p>
                            <Link to="/tenant-main" style={{color: 'white'}}>
                                <Button size='lg' className='col-5 offset-3' color="danger">
                                Tenant Portal
                                </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Card className="ml-auto" style={{ width: '18rem' }}>
                                <CardImg width="100%" src="images/tenant_icon.png" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
            {/* <Row style={{marginBottom: '40px'}}>
                <Col>
                    <Card className="mr-auto" style={{ width: '18rem' }}>
                        <CardImg width="100%" src="images/manager_icon.png" />
                    </Card>
                </Col>
                <Col>
                    <h2>Property Managers</h2>
                    <h6 style={{marginBottom: '35px'}}>The benefits of using the Property Manager Portal will significantly help organize your investment properties, <br />locate/contact delinquent tenant payments, and measure your overall monthly and annual revenue with maintenance reports.</h6>
                    <Link to="/manager-main" style={{color: 'white'}}>
                        <Button size='lg' className='col-5 offset-3' color="danger">
                        Manager Portal
                        </Button>
                    </Link>
                </Col>
                </Row>
            <Row >
                <Col>
                    <h2>Tenants</h2>
                    <h6 style={{marginBottom: '35px'}}>The Tenant Portal helps to manage your current living situation and make your life a lot easier when it comes to contacting the owner.<br /> You can use this portal to view your housing details, request maintenance repairs on the property, and contact the owner when needed.</h6>
                    <Link to="/tenant-main" style={{color: 'white'}}>
                        <Button size='lg' className='col-5 offset-3' color="danger">
                        Tenant Portal
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Card className="mr-auto" style={{ width: '18rem' }}>
                        <CardImg width="100%" src="images/tenant_icon.png" />
                    </Card>
                </Col>
            </Row> */}
    </React.Fragment>
);