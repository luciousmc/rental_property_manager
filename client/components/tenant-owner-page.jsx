import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class TenantOwner extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ownerInfo: []
        };
        this.getOwnerInfo = this.getOwnerInfo.bind(this);
    }
    componentDidMount(){
        this.getOwnerInfo();
    }
    getOwnerInfo(){
        fetch('/api/tenants/tenant-owner.php')
        .then(response=>response.json())
        .then(tenantList=>{
            this.setState({ ownerInfo: tenantList });
        })
    }
    render(){
        return(
            <div>
                <Container>
                    <Row className="col-8 offset-2">
                        <Button size="sm" color="primary">
                            <Link to="/" style={{color: "white"}}>Back to Main Page</Link>
                        </Button>
                    </Row>
                </Container>
                    <Row className="col-7 offset-4">
                        <h1>Your Tenant Info</h1>
                    </Row>
                
                <Row>
                    <Container>
                        <Row className="col-8 offset-2">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="/tenant-main">Tenant Summary</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='active' href="/tenant-owner">Property Information</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/tenant-request">Request Repairs</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Message Center</NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        <Row className='col-4 offset-2'><h4>Contact Information: </h4></Row>
                        <Row className='col-4 offset-4'>
                            <div className='col-sm-auto'>
                                <b>Property Name:</b> {this.state.ownerInfo.property_name}
                            </div>
                            <div className='col-sm-auto'>
                                <b>Manager Contact: </b> {this.state.ownerInfo.manager_contact}
                            </div>
                            <div className='col-sm-auto'>
                                <b>Manager Phone: </b> {this.state.ownerInfo.manager_phone}
                            </div>
                            <div className='col-sm-auto'>
                                <b>Manager Email: </b> {this.state.ownerInfo.manager_email ? this.state.ownerInfo.manager_email : 'N/A'}
                            </div>
                        </Row>
                        <Row className='col-4 offset-2'><h4>Property Info: </h4></Row>
                        <Row className='col-4 offset-4'>
                            <div className='col-auto'>
                                <b>Street Address: </b> {this.state.ownerInfo.street_address}
                            </div>
                            <div className='col-auto'>
                                <b>City: </b> {this.state.ownerInfo.city}
                            </div>
                            <div className='col-auto'>
                                <b>State: </b> {this.state.ownerInfo.state}
                            </div>
                            <div className='col-auto'>
                                <b>Zip: </b> {this.state.ownerInfo.zip}
                            </div>
                        </Row>
                        <Row className='col-4 offset-2'><h4>Additional Info: </h4></Row>
                        <Row className='col-4 offset-4'>
                            <div className='col-auto'>
                                <b>Parking Spaces: </b> {this.state.ownerInfo.parking_spaces}
                            </div>
                            <div className='col-auto'>
                                <b>Square Footage: </b> {this.state.ownerInfo.sqft}
                            </div>
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}
