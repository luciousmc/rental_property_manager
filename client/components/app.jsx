import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Button, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
// import Header from './header';

export default class App extends React.Component{
    constructor(props){
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
                            im a header
                            {/* <Header /> */}
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
                // <div className="container col-12">
                //     <header className="row">
                //         {/* <Header /> */}
                //     </header>
                //     <main>
                //         <div className="content-container row col-8 align-items-center">
                //             <div className="col manager-container">
                //                 <div className="card text-center">
                //                     <img className="manager-icon" src="images/manager_icon.png" alt="manager icon"/>
                //                     <div className="card-body">
                //                         <h2 className="card-title">Property Manager</h2>
                //                         <button className="btn btn-primary">Go to Portal</button>
                //                     </div>
                //                 </div>
                //             </div>
                //             <div className="col tenants-container">
                //                 <div className="card text-center">
                //                     <img className="tenant-icon" src="images/tenant_icon.png" alt="tenant icon"/>
                //                     <div className="card-body">
                //                         <h2 className="card-title">Tenant</h2>
                //                         <button className="btn btn-primary">Go to Portal</button>
                //                     </div>
                //                 </div>
                //             </div>
                //         </div>
                //     </main>
                // </div>
            );
        }
        
    }
}