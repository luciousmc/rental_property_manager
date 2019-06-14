import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TenantRequest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tenant_phone: '',
            tenant_email: '',
            tenant_id: 1,
            repair_request: '',
            tenantInfo: []
        };
        this.createRepairRequest = this.createRepairRequest.bind(this);
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

    handleTenantPhone(e){
        this.setState({ tenant_phone: e.target.value });
    }
    handleTenantEmail(e){
        this.setState({ tenant_email: e.target.value });
    }
    handleRepairRequest(e){
        this.setState({ repair_request: e.target.value });
    }
    handleClearButton(){
        this.setState({ 
            tenant_phone: '',
            tenant_email: '',
            repair_request: '' 
        });
    }
    
    createRepairRequest(event){
        event.preventDefault();
        let data = {
            tenant_phone: this.state.tenant_phone,
            tenant_email: this.state.tenant_email,
            repair_request: this.state.repair_request,
            tenant_id: this.state.tenant_id
            };
        fetch('/api/tenants/tenant-repair-request.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }

    render(){
        return(
            <div>
                <Row>
                    <Col className="header-background">
                        <h3 className="property-detail-header text-center display-3">Request Repairs </h3>
                        <h3 className="property-detail-header text-center display-5">{this.state.tenantInfo.street_address}, Unit: {this.state.tenantInfo.unit_number}</h3>
                    </Col>
                </Row>
            <Row>
            <Col className="details-header text-center py-2">
            <Container>
            <Nav pills>
                <Col>
                    <NavItem>
                        <NavLink style={{color: "white"}} href="/tenant-main">Tenant Summary</NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <NavLink style={{color: "white"}} href="/tenant-owner">Property Information</NavLink>
                    </NavItem>
                </Col>
                <Col>
                    <NavItem>
                        <NavLink className='active' href="/tenant-request">Request Repairs</NavLink>
                    </NavItem>
                </Col>
            </Nav>
            </Container>
            </Col>
            </Row>
            <Container>
            <Form className='col-8 offset-2 my-5'>
                <Row form>
                <Col md={6}>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input type="text" value={this.state.tenant_phone} onChange={this.handleTenantPhone.bind(this)} placeholder="i.e. 800-444-3032" />
                        </FormGroup>
                </Col>
                <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" value={this.state.tenant_email} onChange={this.handleTenantEmail.bind(this)} placeholder="i.e. Howie@propmanagement.com" />
                        </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={12}>
                        <FormGroup>
                            <Label for="repair">Repair Request</Label>
                            <Input type="textarea" value={this.state.repair_request} onChange={this.handleRepairRequest.bind(this)} placeholder="i.e. Ceiling Fan Does Not Work." />
                        </FormGroup>
                </Col>
                </Row>
                <Button className="mr-2" color="primary" onChange={this.handleClearButton} style={{color: "white"}}>
                    Cancel
                </Button>
                <Link to="tenant-main"style={{color: "white"}} >
                    <Button onClick={this.createRepairRequest} color="info">
                        Submit
                    </Button>
                </Link>
            </Form>
            </Container>
            </div>
        );
    }
}