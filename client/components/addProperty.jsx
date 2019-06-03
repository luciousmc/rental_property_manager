import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input} from 'reactstrap';

export default class AddProperty extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
    return (
      <Form>
        <Row>
        <h1 className="mx-auto mb-4">Add Property</h1>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="first" id="first" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="last" id="last" placeholder="Last Name" />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="email address" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="businessName">Property Name</Label>
              <Input type="text" name="business" id="business" placeholder="" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="BusinessPhone">Business Phone</Label>
              <Input type="text" name="phone" id="phone" placeholder="" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="address2">Address 2</Label>
              <Input type="text" name="first" id="first" placeholder="Apartment, suite, floor" />
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label for="units">Sq ft.</Label>
              <Input type="text" name="units" id="units" />
            </FormGroup>
          </Col>
          <Col md={3}>
          <FormGroup>
              <Label for="select">Unit Type</Label>
              <Input type="select" name="select" id="select">
                <option>Choose One</option>
                <option>Multi-Unit</option>
                <option>Single Unit</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" name="city" id="City"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="state">State</Label>
              <Input type="text" name="state" id="State"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="zip">Zip</Label>
              <Input type="text" name="zip" id="Zip"/>
            </FormGroup>  
          </Col>
        </Row>
        <Button color="primary" href="#" onClick={()=>this.props.setView('manager-main', {})}>Go Back</Button>
        <Button color="info" href="#" onClick={()=>this.props.setView('add-unit', {})}>Add Unit</Button>
      </Form>
    );
  }
}