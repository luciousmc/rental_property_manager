import React from 'react';
import {Row, Container, Nav, NavItem, NavLink, Button, Col} from 'reactstrap';
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
        }).catch(err => {
            console.log({err});
        })
    }

    render(){
        return(
            <div>
                <Row>
                    <Col className="header-background">
                        <h1 className="text-center property-detail-header display-3 mt-5">Your Properties</h1>
                    </Col>
                </Row>
                <Row className="col-8 offset-2">
                    <Container>
                        <Row className='my-5'>
                            <PropertyListItem propertyList={this.state.properties} setView={this.props.setView} />
                            <Link to="/add-property" style={{color: 'white', margin:'auto'}}>
                                <Button size='lg' color="info">Add Property</Button>
                            </Link>
                        </Row>

                    </Container>
                </Row>
            </div>
        );
    }
}

export default PropertyList;
