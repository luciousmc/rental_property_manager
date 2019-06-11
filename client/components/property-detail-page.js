import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropertyDetails from './property_details';

export default class PropertyDetailPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            property: {},
            units: [],
            tenants: []
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
                this.setState({ property: propertyDetailsAll, units: propertyDetailsAll.units, tenants: propertyDetailsAll }, console.log('property units after setstate ', this.state))
            })
    }
    render(){
        console.log('the unitlist is : ', this.state.property.units);
        return(
            <React.Fragment>
                <PropertyDetails propertyDetail={this.state.property} unitList={this.state.units} />
            </React.Fragment>
        );
    }
}
            