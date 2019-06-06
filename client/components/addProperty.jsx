import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AddProperty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          propertyName: "",
          propertyType: {
            multi: "multi-unit",
            single: "single unit"
          },
          managerContact: "",
          managerPhone: null,
          address: {
            streetAddress: "",
            city: "",
            state: "",
            zip: null
          },
          parking: null,
          size: null,
        }
    }
    changeHandler(e){
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val})
    }
    render() {
    return (
      <Form>
        <Row>
        <h1 className="mx-auto mb-4">Add Property</h1>
        </Row>
        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label for="property">Property Name</Label>
              <Input type="text" name="propertyName" id="property_name" placeholder="Moore Properties" onChange={this.changeHandler} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="select">Property Type</Label>
              <Input type="select" name="propertyType" id="property_type" onChange={this.changeHandler}>
                <option>Choose One</option>
                <option>Multi-Unit</option>
                <option>Single Unit</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <FormGroup>
            <Label for="businessName">Manager Name</Label>
              <Input type="text" name="managerContact" id="manager_contact" placeholder="First and Last Name" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="BusinessPhone">Phone</Label>
              <Input type="tel" name="managerPhone" id="manager_phone" placeholder="" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="address">Street Address</Label>
              <Input type="text" name="streetAddress" id="street_address" placeholder="123 main st" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          </Row>
          <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="City" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="State" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input type="text" name="zip" id="Zip" onChange={this.changeHandler}/>
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="parking">Parking Spaces</Label>
              <Input type="text" name="parking" id="parking_spaces" placeholder="# of spots available" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="units">Sq ft.</Label>
              <Input type="text" name="size" id="sqft" placeholder="" onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          </Row>
            <Button className="mr-2" color="primary">
              <Link to="/manager-main" style={{color: "white"}}>Go Back</Link>
            </Button>
            <Button color="info">
              <Link to={"/add-unit-page"} style={{color: "white"}}>Add Units</Link>
            </Button>
        </Form>
    );
  }
}