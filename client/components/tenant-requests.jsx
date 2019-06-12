import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TenantRequest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            tenant_phone: '',
            tenant_email: '',
            tenant_id: 13,
            repair_request: ''
        };
        this.createRepairRequest = this.createRepairRequest.bind(this);
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
            <Container>
                <Row className="col-8 offset-2">
                    <Link to="/" style={{color: "white"}}>
                        <Button size="sm" color="primary">
                            Back to Main Page
                        </Button>
                    </Link>
                </Row>
            </Container>
                <Row className="col-7 offset-4">
                    <h1>Your Tenant Info</h1>
                </Row>
                <Row className="col-8 offset-2">
                <Nav tabs>
                    <NavItem>
                        <NavLink href="/tenant-main">Tenant Summary</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/tenant-owner">Property Information</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='active' href="/tenant-request">Request Repairs</NavLink>
                    </NavItem>
                </Nav>
            </Row>
            <Row>
            <Container>
            <Container>
            <Form>
                <Row form>
                <Col md={4}>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input type="text" value={this.state.tenant_phone} onChange={this.handleTenantPhone.bind(this)} placeholder="i.e. 800-444-3032" />
                        </FormGroup>
                </Col>
                <Col md={4}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" value={this.state.tenant_email} onChange={this.handleTenantEmail.bind(this)} placeholder="i.e. Howie@propmanagement.com" />
                        </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={8}>
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
            </Container>
            </Row>
            </div>
        );
    }
}