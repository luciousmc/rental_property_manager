import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class AddProperty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          newProperty: [{
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
            }]
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);

    }
    handleChange(e){
        this.setState({newProperty: e.target.newProperty})
    }
    handleClick(e){
        alert('a new property was added' + this.state.value);
        event.preventDefault();
    }
    addProperty(){
      fetch('c319_rental_property/server/public/api/property/add_property.php',{
        method: 'post',
        headers: {'content-type': 'applications/json'},
        body: JSON.stringify(data), 
      })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response;
            // console.log(response);
          } else {
            console.log('Somthing happened wrong');
          }
      }).catch(err => err);
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
              <Input type="text" name="property_name" id="property_name" placeholder="Moore Properties" value={this.state.value} onChange={this.handleChange} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="select">Property Type</Label>
              <Input type="select" name="property_type" id="property_type" value={this.state.value} onChange={this.handleChange}>
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
              <Input type="text" name="manager_contact" id="manager_contact" placeholder="First and Last Name" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="BusinessPhone">Phone</Label>
              <Input type="tel" name="manager_phone" id="manager_phone" placeholder="" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="address">Street Address</Label>
              <Input type="text" name="street_address" id="street_address" placeholder="123 main st" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          </Row>
          <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="City" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="State" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input type="text" name="zip" id="Zip" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="parking">Parking Spaces</Label>
              <Input type="text" name="parking_spaces" id="parking_spaces" placeholder="# of spots available" value={this.state.value} onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="units">Sq ft.</Label>
              <Input type="text" name="size" id="sqft" placeholder=""onChange={this.changeHandler}/>
            </FormGroup>
          </Col>
          </Row>
            <Button className="mr-2" color="primary">
              <Link onClick={this.handleClick} to="/manager-main" style={{color: "white"}}>Go Back</Link>
            </Button>
            <Button color="info">
              <Link onClick={this.handleClick} to={"/add-unit-page"} style={{color: "white"}}>Add Units</Link>
            </Button>
        </Form>
    );
    
  };

}