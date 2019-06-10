import React from 'react';
import Header from './header';
import Footer from './footer'
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage } from './landing-page';
import ManagerMain from './manager-main-page';
import PropertyDetailPage from './property-detail-page';
import  AddProperty  from './add-property-page';
import  TenantMain from './tenant-main-page';
import TenantOwner from './tenant-owner-page';
import AddUnit from './add-unit-page';
import AddTenant from './add-tenants-page';
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
                        <Route path="/property/:id" component ={PropertyDetailPage} />
                        <Route path="/add-property" component ={AddProperty} />
                        <Route path="/tenant-main" component ={TenantMain} />                    
                        <Route path="/add-unit/:id" component ={AddUnit} />
                        <Route path="/tenant-owner" component ={TenantOwner} />
                        <Route path="/add-tenant" component ={AddTenant} />

                    </Switch>
                </Router>
                <Row>
                    <Footer />
                </Row>
            </React.Fragment>
        );
    }
}