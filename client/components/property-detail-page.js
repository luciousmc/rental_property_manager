import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyDetails from './property_detail';

export default class PropertyDetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            property: null
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.getPropertyDetails(id);
    }
    getPropertyDetails(id){
        fetch("/api/property/property_details.php?id=$id")
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
            