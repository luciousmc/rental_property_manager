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
        const dummyDB = [
            {
              "id": 1,
              "streetAddress": "23002 El Toro Road",
              "city": "irvine",
              "state": "ca",
              "zip": 91101,
              "image": "url.com",
              "type": "multi",
              "units": 4,
              "vacancies": 2
            },
            {
              "id": 2,
              "streetAddress": "23002 El Toro Road",
              "city": "irvine",
              "state": "ca",
              "zip": 91101,
              "image": "url.com",
              "type": "multi",
              "units": 4,
              "vacancies": 2
            }
        ];
        this.setState({ properties: dummyDB });
    }
    render(){
        return(
            <Row>
                <h1>Your Properties</h1>
            </Row>
            <Row>
                <Container>
                    <Row>
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
                        </nav>
                    </Row>
                    <Row>
                        <ProductListItem properties={this.state.properties} />
                    </Row>
                </Container>
            </Row>
        );
    }
}

export default PropertyList;