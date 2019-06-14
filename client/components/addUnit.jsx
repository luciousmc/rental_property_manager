import React from 'react';
import {Col, Row, Button, Form, FormGroup, Label, Input, Nav} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddUnit extends React.Component{
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
        // event.preventDefault();
        
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
            <React.Fragment>
                <Row>
                    <Col className="header-background">
                        <h1 className="text-center property-detail-header display-3 mt-5">Add Unit</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="details-header text-center py-2">
                            <Nav pills>
                                <Col>
                                    <a className="detail-link p-2 my-1" href={`/property/${this.props.propertyID}`}>Property Summary</a>
                                </Col>
                                <Col>
                                    <a className="detail-link p-2 my-1" href={`/property/${this.props.propertyID}/add-unit`}>Add Unit</a>
                                </Col>
                                <Col>
                                    <a className="detail-link p-2 my-1" href={`/property/${this.props.propertyID}/manager-review`}>Repair Requests</a>
                                </Col>
                            </Nav>
                    </Col>
                </Row>
                <div className="form-container col-8 offset-2">
                <Form className='my-5'>
                    <Row form>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="unitNum">Unit Number</Label>
                                <Input type="text" name="unit" id="unit_id"  value={this.state.unit_number} onChange={this.handleUnitChange.bind(this)} placeholder="" />
                            </FormGroup>
                        </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="units">Sq ft.</Label>
                                <Input type="text" name="units" id="units" value={this.state.sqft} onChange={this.handleSqftChange.bind(this)} placeholder="" />
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row form>
                    <Col md={4}>
                            <FormGroup>
                                <Label for="rent">Monthly Rent</Label>
                                <Input type="text" name="rent" id="rentAmount" value={this.state.rent} onChange={this.handleRentChange.bind(this)} placeholder="$" />
                            </FormGroup>
                    </Col>
                        <Col md={4}>
                            <FormGroup>
                                <Label for="rent">Due Date</Label>
                                <Input type="date" name="rent" id="rentDate" placeholder="" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Link to={{pathname:"/property/"+ this.props.propertyID}} style={{color: "white"}}>
                        <Button className="mr-2" color="primary">Back</Button>
                    </Link>
                    <Link to={{pathname:"/property/"+ this.props.propertyID}} style={{color: "white"}}>
                        <Button onClick={this.createUnit} color="info">Submit</Button>
                    </Link>

                </Form>
                </div>
            </React.Fragment>
        );
    }
}