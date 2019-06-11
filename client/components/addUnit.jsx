import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class AddUnit extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            property_id: '',
            unit_number: '',
            sqft: '',
            rent: '',
            status: ''
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
            <Form>
                <Row>
                <h1 className="mx-auto mb-4">Add Unit</h1>
                </Row>
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
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="status">Unit Status</Label>
                            <Input type="select" name="status" id="status" onChange={this.handleStatusChange.bind(this)}>
                                <option value={'Vacant'}>Vacant</option>
                                <option value={'Occupied'}>Occupied</option>
                                <option value={'Pending'}>Pending</option>
                            </Input>
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="mr-2" color="primary">
                    <Link to="/manager-main" style={{color: "white"}}>Back</Link>
                </Button>
                <Button onClick={this.createUnit} color="info">
                    <Link to="/manager-main" style={{color: "white"}} >Submit</Link>
                    </Button>
                
            </Form>
        );
    }
}