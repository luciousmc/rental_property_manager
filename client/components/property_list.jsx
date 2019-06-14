import React from 'react';
import { Row, Container, Nav, NavItem, NavLink, Button } from 'reactstrap';
import PropertyListItem from './property_list_item';
import {Link} from 'react-router-dom';

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
        fetch('/api/property/property_list.php')
        .then(response=>response.json())
        .then(propertyList=>{
            this.setState({ properties: propertyList });
        })
    }

    render(){
        return(
            <div>
                <Row>
                    <h1 className="mx-auto mb-4">Your Properties</h1>
                </Row>
                <Row>
                    <Container>
                        <Row className="col-8 offset-3">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink href="/add-property">Add Property</NavLink>
                                </NavItem>
                            </Nav>
                        </Row>
                        <Row className='my-5'>
                            <PropertyListItem propertyList={this.state.properties} setView={this.props.setView} />
                        </Row>
                    </Container>
                </Row>
            </div>
        );
    }
}

export default PropertyList;
