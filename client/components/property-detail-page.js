import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyDetails from './property_detail';

export default class PropertyDetailPage{
    constructor(props){
        super(props);
        this.state = {
            property: null
        }
    }
    componentDidMount(){
        this.getPropertyDetails();
    }
    getPropertyDetails(id){
        fetch('/api/property/property_details.php')
            .then(response=>response.json())
            .then(propertyDetailsAll=>{
                console.log('the full property details are as follows: ', propertyDetailsAll);
            })
    }
    render(){
        return(
            <React.Fragment>
                <Row>
                    <PropertyDetails propertyDetail={this.state.property} />
                </Row>                    
            </React.Fragment>
        );
    }
}
                