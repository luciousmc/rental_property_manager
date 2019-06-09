import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class TenantRequest extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            property_id: '',
            unit_number: '',
            sqft: '',
            rent: '',
            status: 'Vacant'
        };
        this.createUnit = this.createUnit.bind(this);
    }

    handleUnitChange(e){
        this.setState({ unit_number: e.target.value });
    }
    handleSqftChange(e){
        this.setState({ sqft: e.target.value });
    }
    handleRentChange(e){
        this.setState({ rent: e.target.value });
    }
    handleStatusChange(e){
        this.setState({ status: e.target.value });
    }

    createUnit(event){
        event.preventDefault();
        let data = {
            property_id: this.props.propertyID,
            unit_number: this.state.unit_number,
            sqft: this.state.sqft,
            rent: this.state.rent,
            status: this.state.status
            };
        fetch('/api/unit/add_unit.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

            .then(res => res.json());
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
                    <NavItem>
                        <NavLink href="#">Message Center</NavLink>
                    </NavItem>
                </Nav>
            </Row>
            <Container>
            <Form>
                <Row>
                <h1 className="mx-auto mb-4">Submit Maintenance Request</h1>
                </Row>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="propertyName">Property Name</Label>
                            <Input type="text" name="property" id="property_id" />
                            
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="unitNum">Unit Number</Label>
                            <Input type="text" name="unit" id="unit_id"   />
                        </FormGroup>
                    </Col>
                    
                </Row>
                <Row form>
                <Col md={4}>
                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input type="text" name="phone"  />
                        </FormGroup>
                </Col>
                <Col md={4}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" name="email"  />
                        </FormGroup>
                </Col>
                </Row>
                <Row>
                <Col md={8}>
                        <FormGroup>
                            <Label for="rent">Repair Request</Label>
                            <Input type="textarea" name="request"  />
                        </FormGroup>
                </Col>
                </Row>
                <Button className="mr-2" color="primary">
                    <Link to="manager-main" style={{color: "white"}}>Back</Link>
                </Button>
                <Button onClick={this.createUnit} color="info">
                    <Link to="manager-main"style={{color: "white"}} >Submit</Link>
                    </Button>
            </Form>
            </Container>

            </div>
        );
    }
}