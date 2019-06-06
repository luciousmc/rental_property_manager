import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyDetails from './property_details';

export default class PropertyDetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            property: {}
        }
    }
    componentDidMount(){
        const { id } = this.props.match.params;
        this.getPropertyDetails(id);
    }
    getPropertyDetails(id){
        fetch(`/api/property/property_details.php?id=${id}`)
            .then(response=>response.json())
            .then(propertyDetailsAll=>{
                console.log('the full property details are as follows: ', propertyDetailsAll);
                this.setState({ property: propertyDetailsAll }, console.log('property details after setstate ', propertyDetailsAll))
            })
    }
    render(){
        console.log('the unitlist is : ', this.state.property);
        return(
            <React.Fragment>
                <PropertyDetails propertyDetail={this.state.property} />
            </React.Fragment>
        );
    }
}
            