import React from 'react';
import Header from './header';
import { Container, Row, Col, Card, CardBody, CardTitle, CardImg, Button } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './landing-page';
import ManagerMain from './manager-main-page';
import  AddProperty  from './add-property-page';
// import  TenantMain from './tenant-main';
// import PropertyDetails from '../page/PropertyDetails';
import PropertyList from './property_list';
import AddUnit from './addUnit';


export default class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            view:{
                name: 'landing',
                params: {},
            },
            properties: {}
        }
    }
    setView( view, obj ){
        this.setState({ view:{ name: view, params: obj} });
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
                        {/* <Route path="/manager/property-details" component ={PropertyDetails} /> */}
                        <Route path="/add-property" component ={AddProperty} />
                        {/* <Route path="/tenant/main" component ={TenantMain} />                     */}
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}