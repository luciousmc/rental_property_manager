import React from 'react';
import { Card, CardImg, Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

export const LandingPage = ()=>(
    <React.Fragment>
        <Row style={{marginBottom: '60px'}}>
            <Col className="col-sm-auto offset-sm-1">
                <Card className="mr-auto" style={{ width: '18rem' }}>
                    <CardImg width="100%" src="images/manager_icon.png" />
                </Card>
            </Col>
            <Col className="col-sm-auto offset-sm-1 ">
                <h2>Property Managers</h2>
                <h6 style={{marginBottom: '35px'}}>The benefits of using the Property Manager Portal will significantly help organize your investment properties, <br />locate/contact delinquent tenant payments, and measure your overall monthly and annual revenue with maintenance reports.</h6>
                <Button size='lg' className='col-5 offset-3' color="danger">
                    <Link to="/manager-main" style={{color: 'white'}}>
                        Manager Portal
                    </Link>
                </Button>
            </Col>
            </Row>
            <Row style={{marginBottom: '200px'}}>
            <Col className="col-sm-auto offset-sm-1 ">
                <h2>Tenants</h2>
                <h6 style={{marginBottom: '35px'}}>The Tenant Portal helps to manage your current living situation and make your life a lot easier when it comes to contacting the owner.<br /> You can use this portal to view your housing details, request maintenance repairs on the property, and contact the owner when needed.</h6>
                <Button size='lg' className='col-5 offset-3' color="danger">
                    <Link to="/tenant-main" style={{color: 'white'}} >
                        Tenant Portal
                    </Link>
                </Button>
            </Col>
            <Col className="col-sm-auto offset-sm-1 ">
                <Card className="mr-auto" style={{ width: '18rem' }}>
                    <CardImg width="100%" src="images/tenant_icon.png" />
                </Card>
            </Col>
        </Row>
    </React.Fragment>
);