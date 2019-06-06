import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function UnitItems(props){
    if(!props.unitList) return <h1>Loading...</h1>
    const list = props.unitList.map(unit=>(
        <Row>
            <Card key={unit.id} >
                <Row>
                    <div className="blocker"></div>
                </Row>
                <CardBody>
                    <CardTitle>Unit #{unit.unitNumber}</CardTitle>
                    <CardTitle>Business: {unit.tenants.business_name}</CardTitle>
                    <CardTitle>Business Contact: {unit.tenants.contact_name}</CardTitle>
                    <CardTitle>Contact Number: {unit.tenants.tenant_phone}</CardTitle>
                    <CardTitle>Rent: ${Math.ceil(unit.rent / 100).toFixed(2)}</CardTitle>
                </CardBody>
            </Card>
        </Row>
    ))
    return list;
};

export default UnitItems;