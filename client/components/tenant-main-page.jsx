import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class TenantMain extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tenantInfo: []
        };
        this.getTenantInfo = this.getTenantInfo.bind(this);
    }
    componentDidMount(){
        this.getTenantInfo();
    }
    getTenantInfo(){
        // const dummyList = {
        //     "id": 1,
        //     "unit_id": 1,
        //     "business_name": "Nick Inc.",
        //     "contact_name": "Mike Gordon",
        //     "tenant_phone": 5555555555,
        //     "tenant_email": "mike@nickinc.com",
        //     "move_in_date": "03/01/19",
        //     "lease_end_date": "03/04/20",
        //     "rent_due_date": "04/01/19"
        // }
        //   this.setState({ tenantInfo: dummyList });

        fetch('/api/tenants/tenant-info.php')
        .then(response=>response.json())
        .then(tenantList=>{
            this.setState({ tenantInfo: tenantList });
        })
    }
    render(){
        return(
            <div>
                <Container className="mb-3">
                    <Row>
                        <Button size="sm" color="primary">
                            <Link to="/" style={{color: "white"}}>Back to Main Page</Link>
                        </Button>
                    </Row>
                    </Container>
                    <Row>
                        <h1 className="mx-auto mb-4">Your Tenant Info</h1>
                    </Row>
                
                <Row>
                    <Container>
                        <Row className="col-8 offset-2">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink className='active' href="#">Property Summary</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Unit Info</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Maintenance Providers</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Request Repairs</NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        <Row className='col-4 offset-2'><h4>Contact Information: </h4></Row>
                        <Row className='col-4 offset-4'>
                            <div className='col-sm-auto'>
                                <b>Business Name:</b> {this.state.tenantInfo.business_name}
                            </div>
                            <div className='col-sm-auto'>
                                <b>Contact Name: </b> {this.state.tenantInfo.contact_name}
                            </div>
                            <div className='col-sm-auto'>
                                <b>Tenant Phone: </b> {this.state.tenantInfo.tenant_phone}
                            </div>
                            <div className='col-sm-auto'>
                                <b>Tenant Email: </b> {this.state.tenantInfo.tenant_email}
                            </div>
                        </Row>
                        <Row className='col-4 offset-2'><h4>Important Dates: </h4></Row>
                        <Row className='col-4 offset-4'>
                            <div className='col-auto'>
                                <b>Move in Date: </b> {this.state.tenantInfo.move_in_date}
                            </div>
                            <div className='col-auto'>
                                <b>Lease End Date: </b> {this.state.tenantInfo.lease_end_date}
                            </div>
                            <div className='col-auto'>
                                <b>Rent Due Date: </b> {this.state.tenantInfo.rent_due_date}
                            </div>
                        </Row>
                        <Row className='col-4 offset-2'><h4>Home Information: </h4></Row>
                        <Row className='col-4 offset-4'>
                            <div className='col-auto'>
                                <b>Monthly Rent: </b> ${this.state.tenantInfo.rent}
                            </div>
                            <div className='col-auto'>
                                <b>Unit Number: </b> {this.state.tenantInfo.unit_number}
                            </div>
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}
