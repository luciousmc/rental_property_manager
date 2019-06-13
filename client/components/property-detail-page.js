import React from 'react';
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
                this.setState({ property: propertyDetailsAll, units: propertyDetailsAll.units, tenants: propertyDetailsAll })
            })
    }
    render(){
        return(
            <React.Fragment>
                <PropertyDetails propertyDetail={this.state.property} unitList={this.state.units} />
            </React.Fragment>
        );
    }
}
            