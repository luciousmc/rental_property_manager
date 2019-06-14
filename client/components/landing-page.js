import React from 'react';
import { Card, CardImg, Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';

export const LandingPage = ()=>(
    <React.Fragment>
        <Container fluid className='corners'> 
        <Jumbotron fluid>
            <div className="display-2 text-center mb-5">
                Moore Properties
            </div>
            <Container>
                <div className="lead landing-intro">
                Moore Property Management, Inc. is a professional real estate company committed to offering the best in property management services to our community. Our success will be measured by our ability to maximize our owner clients return on their investment while providing safe quality housing for our resident clients. We will at the same time strive to provide the best in customer service, business ethics, and innovation, in a superior work atmosphere.xs
                </div>
            </Container>
        </Jumbotron>
        </Container> 
        <Container fluid className="background"></Container>
        <Container fluid className='corners'>

        <Jumbotron className="manager-hero">
                <Row style={{marginBottom: '40px'}}>
                    <Col>
                        <Card className="mr-auto">
                            <CardImg width="100%" src="images/skyscraper1.jpg" />
                        </Card>
                    </Col>
                    <Col style={{ color: 'white' }}>
                        <h2 color="white" className="display-4 mb-5 landing-text-head">Property Managers</h2>
                        <p className="lead landing-text mb-5">The benefits of using the Property Manager Portal will significantly help organize your investment properties, locate/contact delinquent tenant payments, and measure your overall monthly and annual revenue with maintenance reports.</p>
                        <Link to="/manager-main" style={{color: 'white'}}>
                            <Button size='lg' className='col-4 offset-3' color="danger">
                            Manager Portal
                            </Button>
                        </Link>
                    </Col>
                </Row>
        </Jumbotron>
        </Container>
        <Container fluid className="background"></Container>

        <Container fluid className='corners'> 
        <Jumbotron className="tenant-hero">
            <Row >
                <Col style={{ color: 'white' }}>
                    <h2 className="display-4 mb-5 text-right landing-text-head">Tenants</h2>
                    <p className="lead landing-text mb-5">The Tenant Portal helps to manage your current living situation and make your life a lot easier when it comes to contacting the owner. You can use this portal to view your housing details, request maintenance repairs on the property, and contact the owner when needed.</p>
                    <Link to="/tenant-main" style={{color: 'white'}}>
                        <Button size='lg' className='col-4 offset-3' color="danger">
                        Tenant Portal
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <Card className="ml-auto">
                        <CardImg width="100%" src="/images/Office_Building.jpg" />
                    </Card>
                </Col>
            </Row>
        </Jumbotron>
        </Container>
        <Container fluid className="background"></Container>

    </React.Fragment>
);