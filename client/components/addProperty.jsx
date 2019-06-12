import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
import {Link} from 'react-router-dom';
import AddUnit from './addUnit';

export default class AddProperty extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            propertyName: "",
            propertyType: {
              multi: "Multi Unit",
              single: "Single Unit"
            },
            managerContact: "",
            managerPhone: "",
            streetAddress: "",
            city: "",
            state: "",
            zip: "",
            parking: "",
            sqft: "",

      };
      this.handleChange = this.handleChange.bind(this);
      // this.handleClick = this.handleClick.bind(this);
      this.addProperty = this.addProperty.bind(this);
      this.handlePropName = this.handlePropName.bind(this);
      this.handlePropType = this.handlePropType.bind(this);
      this.handleMgrContact = this.handleMgrContact.bind(this);
      this.handleMgrPhone = this.handleMgrPhone.bind(this);
      this.handleAddress = this.handleAddress.bind(this);
      this.handleCity = this.handleCity.bind(this);
      this.handleState = this.handleState.bind(this);
      this.handleZip = this.handleZip.bind(this);
      this.handleParking = this.handleParking.bind(this);
      this.handleSqft = this.handleSqft.bind(this);

    }
    handlePropName(e){
      this.setState({ propertyName: e.target.value })
    }
    handlePropType(e){
      this.setState({ propertyType: e.target.value })
    }
    handleMgrContact(e){
      this.setState({ managerContact: e.target.value })
    }
    handleMgrPhone(e){
      this.setState({ managerPhone: e.target.value })
    }
    handleAddress(e){
      this.setState({ streetAddress: e.target.value })
    }
    handleCity(e){
      this.setState({ city: e.target.value })
    }
    handleState(e){
      this.setState({ state: e.target.value })
    }
    handleZip(e){
      this.setState({ zip: e.target.value })
    }
    handleParking(e){
      this.setState({ parking: e.target.value })
    }
    handleSqft(e){
      this.setState({ sqft: e.target.value })
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    // handleClick(e){
    //     alert('a new property was added');
    //     e.preventDefault();
    // }
    addProperty(e){
      debugger;
      e.preventDefault();

        let data = {
            property_name: this.state.propertyName,
            street_address: this.state.streetAddress,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            sqft: this.state.sqft,
            property_type: this.state.propertyType,
            manager_contact: this.state.managerContact,
            manager_phone: this.state.managerPhone,
            parking_spaces: this.state.parking
        }
      fetch('/api/property/add_property.php',{
        method: 'POST',
        headers: {'content-type': 'applications/json'},
        body: JSON.stringify(data), 
      })
      .then(res => res.json());
      }
      
    

    render() {
    return (
      <Form onSubmit={this.addProperty}>
        <Row>
        <h1 className="mx-auto mb-4">Add Property</h1>
        </Row>
        <Row form>
          <Col md={8}>
            <FormGroup>
              <Label for="property">Property Name</Label>
              <Input type="text" name="property_name" id="property_name" placeholder="Moore Properties" value={this.state.propertyName} onChange={this.handlePropName} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="select">Property Type</Label>
              <Input type="select" name="property_type" id="property_type" value={this.state.propertyType} onChange={this.handlePropType}>
                <option>Choose One</option>
                <option>Multi Unit</option>
                <option>Single Unit</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={8}>
            <FormGroup>
            <Label for="businessName">Manager Name</Label>
              <Input type="text" name="manager_contact" id="manager_contact" placeholder="First and Last Name" value={this.state.managerContact} onChange={this.handleMgrContact}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
            <Label for="BusinessPhone">Phone</Label>
              <Input type="tel" name="manager_phone" id="manager_phone" placeholder="" value={this.state.managerPhone} onChange={this.handleMgrPhone}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="address">Street Address</Label>
              <Input type="text" name="street_address" id="street_address" placeholder="123 main st" value={this.state.streetAddress} onChange={this.handleAddress}/>
            </FormGroup>
          </Col>
          </Row>
          <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="City" value={this.state.city} onChange={this.handleCity}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="State" value={this.state.state} onChange={this.handleState}/>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input type="text" name="zip" id="Zip" value={this.state.zip} onChange={this.handleZip}/>
            </FormGroup>  
          </Col>
        </Row>
        <Row form>
          <Col md={4}>
            <FormGroup>
              <Label for="parking">Parking Spaces</Label>
              <Input type="text" name="parking_spaces" id="parking_spaces" placeholder="# of spots available" value={this.state.parking} onChange={this.handleParking}/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="units">Sq ft.</Label>
              <Input type="text" name="sqft" id="sqft" placeholder="" value={this.state.sqft} onChange={this.handleSqft}/>
            </FormGroup>
          </Col>
          </Row>
            <Button className="mr-2" color="primary">
              <Link to="/manager-main" style={{color: "white"}}>Go Back</Link>
            </Button>
            <Button  onClick={this.addProperty}  color="info">
              <Link to={"/manager-main"} style={{color: "white"}}>Submit</Link>
              
            </Button>
            
        </Form>
    );
    
  };

}