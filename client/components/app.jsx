import React from 'react';
import Header from './header';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import PropertyList from './property_list';
import PropertyDetails from './property_details';
import AddProperty from './addProperty';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view:{
                name: 'manager-main',
                params: {},
            },
            properties: {}
        }
        this.setView = this.setView.bind(this);
    }
    setView( view, obj ){
        this.setState({ view:{ name: view, params: obj} });
    }
    render(){
        if (this.state.view.name === 'landing'){
            return(
                <React.Fragment>
                    <Row>
                        <Header/> 
                    </Row>
                    <Container>
                        <Row className="col-8 offset-2">
                            <Col className="mr-auto">
                                <Card style={{ width: '18rem' }}>
                                    <CardImg  width="100%" src="images/manager_icon.png" />
                                    <CardBody>
                                        <CardTitle>Property Manager</CardTitle>
                                        <Button onClick={()=>this.setView('manager-main', {})}>Go to Portal</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col width="50%">
                            <Card className="mr-auto" style={{ width: '18rem' }}>
                                    <CardImg width="100%" src="images/tenant_icon.png" />
                                    <CardBody>
                                        <CardTitle>Tenant</CardTitle>
                                        <Button>Go to Portal</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        } else if (this.state.view.name === 'manager-main'){
            return(
                <React.Fragment>
                    <Row>
                        <Header/> 
                    </Row>
                    <Container>
                        <Row>
                            <Col className="col-8 offset-2">
                                <PropertyList setView={this.setView} />
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        } else if (this.state.view.name === 'add-property'){
            return(
                <React.Fragment>
                    <Row>                            
                        <Header/> 
                    </Row>
                    <Row>
                        <Container>
                            <div className="form-container col-8 offset-2">
                                <AddProperty />
                            </div>
                        </Container>
                    </Row>
                </React.Fragment>
            );
        } else if (this.state.view.name === 'property-details'){
            return(
                <React.Fragment>
                    <Row>
                        <Header/> 
                    </Row>
                    <Container>
                        <Row>
                            <Col className="col-8 offset-2">
                                <PropertyDetails />
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        }
    }
}