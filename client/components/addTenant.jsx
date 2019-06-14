import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddTenant extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            unitsAvailable: [],
            business_name: '',
            contact_name: '',
            tenant_phone: '',
            tenant_email: '',
            move_in_date: '',
            lease_end_date: '',
            rent_due_date: '',
            unit_ID: '',
            
        };
        this.createTenant = this.createTenant.bind(this);
    }

    componentDidMount() {
        const { propertyID } = this.props;
        this.getPropertyDetails(propertyID);
    }

    getPropertyDetails(id){
        fetch(`/api/property/property_details.php?id=${id}`)
            .then(response=>response.json())
            .then(propertyDetailsAll=>{
                this.setState({ unitsAvailable: propertyDetailsAll.units })
            })
    }

    handleBusName(e){
        this.setState({ business_name: e.target.value});
    }
    handleConName(e){
        this.setState({ contact_name: e.target.value});
    }
    handleTenPhone(e){
        this.setState({ tenant_phone: e.target.value});
    }
    handleTenEmail(e){
        this.setState({ tenant_email: e.target.value});
    }
    handleMoveIn(e){
        this.setState({ move_in_date: e.target.value});
    }
    handleLeaseEnd(e){
        this.setState({ lease_end_date: e.target.value});
    }
    handleRentDue(e){
        this.setState({ rent_due_date: e.target.value});
    }
    handleUnitID(e){
        this.setState({ unit_ID: e.target.value});
    }
    createTenant(e){
        // e.preventDefault();
        let tenantData = {
            business_name: this.state.business_name,
            contact_name: this.state.contact_name,
            tenant_phone: this.state.tenant_phone,
            tenant_email: this.state.tenant_email,
            move_in_date: this.state.move_in_date,
            lease_end_date: this.state.lease_end_date,
            rent_due_date: this.state.rent_due_date,
            unit_ID: this.state.unit_ID,
        }
        fetch('/api/unit/add_tenant.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tenantData)
        })

        .then(res => res.json());
    }

    generateAvailableUnits() {
        const vacantUnits = this.state.unitsAvailable.filter((unit) => {
            return unit.status === 'Vacant';
        });

        const unitSelections = vacantUnits.map((unit, index) => {
            return <option key={index} value={unit.unit_id}>{unit.unitNumber}</option>
        });

        return (
            unitSelections
        )
    }

    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col className="header-background">
                        <h1 className="property-detail-header text-center" style={{'margin-top':'5%'}}>Add Tenant</h1>
                    </Col>
                </Row>
                <div className="form-container col-8 offset-2">
                    <Form className='my-5'>
                        <Row form>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="busName">Business Name</Label>
                                    <Input type="text" name="busName" id="business_name"  value={this.state.business_name} onChange={this.handleBusName.bind(this)} placeholder="ex. Ricks Auto Parts" />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="conName">Contact Name</Label>
                                    <Input type="text" name="conName" id="contact_name" value={this.state.contact_name} onChange={this.handleConName.bind(this)} placeholder="ex. Ricky Bobby" />
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row form>
                        <Col md={6}>
                                <FormGroup>
                                    <Label for="tenPhone">Phone</Label>
                                    <Input type="number" name="tenPhone" id="tenant_phone" value={this.state.tenant_phone} onChange={this.handleTenPhone.bind(this)} placeholder="Contact Phone" />
                                </FormGroup>
                        </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="tenEmail">Email</Label>
                                    <Input type="email" name="tenEmail" id="tenant_email" value={this.state.tenant_email} onChange={this.handleTenEmail.bind(this)} placeholder="Email"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                        <Col md={4}>
                                <FormGroup>
                                    <Label for="unitNum">Unit #</Label>
                                    <Input type="select" name="unit_number" id="unit_number" onChange={this.handleUnitID.bind(this)} placeholder="" >
                                        <option value={'select one'}>Select One</option>
                                        { this.generateAvailableUnits() }
                                    </Input>
                                </FormGroup>
                        </Col>
                        <Col md={4}>
                                <FormGroup>
                                    <Label for="moveIn">Move In Date</Label>
                                    <Input type="date" name="MoveIn" id="move_in_date" value={this.state.move_in_date} onChange={this.handleMoveIn.bind(this)} placeholder="" />
                                </FormGroup>
                        </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="leaseEnd">End of Lease</Label>
                                    <Input type="date" name="leaseEnd" id="lease_end_date" value={this.state.lease_end_date} onChange={this.handleLeaseEnd.bind(this)} placeholder=""/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Label for="rentDue">Rent Due</Label>
                                    <Input type="date" name="rentDate" id="rent_due_date" value={this.state.rent_due_date} onChange={this.handleRentDue.bind(this)} placeholder=""/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Link to={{pathname:"/property/"+ this.props.propertyID}} style={{color: "white"}}>
                            <Button className="mr-2" color="primary">Back</Button>
                        </Link>
                        <Link to="/manager-main" style={{color: "white"}} >
                            <Button onClick={this.createTenant} color="info">
                                Submit
                            </Button>
                        </Link>

                    </Form>
                </div>
                <div className='tempHeight'></div>
            </React.Fragment>
        );
    }
}