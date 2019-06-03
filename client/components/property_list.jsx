import React from 'react';
import { Row, Container, Nav, NavItem, NavLink } from 'reactstrap';
import PropertyListItem from './property_list_item';

class PropertyList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            properties: []
        };
    }
    componentDidMount(){
        this.getProperties();
    }
    getProperties(){
        const dummyList = [
            {
            "id": 1,
            "streetAddress": "23002 El Toro Road",
            "city": "irvine",
            "state": "ca",
            "zip": 91101,
            "image": "images/business_default_image.jpg",
            "type": "multi-unit",
            "units": 4,
            "vacancies": 2
            },
            {
            "id": 2,
            "streetAddress": "9200 Irvine Center Drive",
            "city": "irvine",
            "state": "ca",
            "zip": 91101,
            "image": "images/business_default_image.jpg",
            "type": "multi-unit",
            "units": 6,
            "vacancies": 0
            }
        ];
        this.setState({ properties: dummyList });
    }
    render(){
        return(
            <div>
                <Row>
                    <h1 className="mx-auto mb-4">Your Properties</h1>
                </Row>
                <Row>
                    <Container>
                        <Row className="col-8 offset-2">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="#" onClick={()=>this.props.setView('add-property', {})}>Add Property</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Remove Property</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Manage Property</NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        <Row>
                            <PropertyListItem propertyList={this.state.properties} setView={this.props.setView} />
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}

export default PropertyList;