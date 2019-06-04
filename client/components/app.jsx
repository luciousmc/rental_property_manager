import React from 'react';
import Header from './header';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './landing-page';
import ManagerMain from './manager-main-page';
import PropertyDetails from './property-detail-page';
import  AddProperty  from './add-property-page';
// import  TenantMain from './tenant-main';
import AddUnit from './addUnit';

export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            properties: {}
        }
    }
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Header/> 
                </Row>
                <Router>
                    <Switch>
                        <Route exact path="/" component={LandingPage} />
                        <Route path="/manager-main" component={ManagerMain} />
                        <Route path="/property/:id" component ={PropertyDetails} />
                        <Route path="/add-property" component ={AddProperty} />
                        <Route path="/addUnit" component ={AddUnit} />
                        {/* <Route path="/tenant/main" component ={TenantMain} />                     */}
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}