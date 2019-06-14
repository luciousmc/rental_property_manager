import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Col } from 'reactstrap';

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
        fetch('/api/tenants/tenant-info.php')
        .then(response=>response.json())
        .then(tenantList=>{
            this.setState({ tenantInfo: tenantList });
        })
    }
    render(){
        return(
            <div>
                <Row>
                    <Col className="header-background">
                        <h1 className="property-detail-header text-center display-3">{this.state.tenantInfo.business_name} Portal</h1>
                        <h3 className="property-detail-header text-center display-5">{this.state.tenantInfo.street_address}, Unit: {this.state.tenantInfo.unit_number}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="details-header text-center py-2">
                <Container>
                <Nav pills >
                    <Col>
                        <NavItem>
                            <NavLink className='active' href="/tenant-main">Tenant Summary</NavLink>
                        </NavItem>
                    </Col>
                    <Col>
                        <NavItem>
                            <NavLink style={{color: "white"}} href="/tenant-owner">Property Information</NavLink>
                        </NavItem>
                    </Col>
                    <Col>
                        <NavItem>
                            <NavLink style={{color: "white"}} href="/tenant-request">Request Repairs</NavLink>
                        </NavItem>
                    </Col>
                </Nav>
                </Container>
                </Col>
                </Row>
                <Container className='my-5'>
                <Row className='col-4 offset-2'><h4>Home Information: </h4></Row>
                    <Row className='col-4 offset-4'>
                        <div className='col-auto'>
                            <b>Monthly Rent: </b> ${this.state.tenantInfo.rent}
                        </div>
                        <div className='col-auto'>
                            <b>Unit Number: </b> {this.state.tenantInfo.unit_number}
                        </div>
                    </Row>
                    <Row className='col-4 offset-2'><h4>Contact Information: </h4></Row>
                    <Row className='col-4 offset-4'>
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
                </Container>
            </div>
        );
    }
}
