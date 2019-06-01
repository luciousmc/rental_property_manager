import React from 'react';
import Header from './header';
import AddProperty from './addProperty';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view:{
                name: 'landing',
                params: {},
            }
        }
        this.setView = this.setView.bind(this);
    }
    setView( view, obj ){
        this.setState({ view, obj });
    }
    render(){
        if (this.state.view.name === 'landing'){
            return(
              <Container>
                    <Row>
                        <header className="col">
                            <Header/> 
                        </header>
                    </Row>
                    {/* ***Testing out the form component */}
                <body>
                  <AddProperty/>
                </body>
                {/* ************ */}
                    {/* <body>
                    
                        <Row md={{size: 8, offset: 2}}>
                            <Col className="mr-auto">
                                <Card style={{ width: '18rem' }}>
                                    <CardImg  width="100%" src="images/manager_icon.png" fluid/>
                                    <CardBody>
                                        <CardTitle>Property Manager</CardTitle>
                                        <Button href="./form.jsx">Go to Portal</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col width="50%">
                            <Card className="mr-auto" style={{width: '18rem' }}>
                                    <CardImg width="100%" src="images/manager_icon.png" fluid />
                                    <CardBody>
                                        <CardTitle>Tenant</CardTitle>
                                        <Button>Go to Portal</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                      </Row>
                    </body> */}
                    </Container>
            );
        }
        
    }
}