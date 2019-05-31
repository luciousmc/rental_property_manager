import React from 'react';
import Header from './header';
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
                            <Header /> 
                        </header>
                    </Row>
                    <Row>
                        <Row md={{size: 8, offset: 2}}>
                            <Col>
                                <Card>
                                    <CardImg top width="100%" src="images/manager_icon.png" />
                                    <CardBody>
                                        <CardTitle>Property Manager</CardTitle>
                                        <Button>Go to Portal</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Row>
                </Container>
            );
        }
        
    }
}