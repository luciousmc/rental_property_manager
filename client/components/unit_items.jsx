import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, ToastBody, Toast, ToastHeader } from 'reactstrap';

function UnitItems(props){
    if(!props.unitList) return <h1>Loading...</h1>
    const list = props.unitList.map(unit=>(
        <Col sm="4" className="mb-2">
            {/* <Card key={unit.id}>
                <CardImg src="" />
                <CardBody>
                    <CardTitle>Unit #{unit.unitNumber}</CardTitle>
                    <CardTitle>Business: {unit.tenants.business_name}</CardTitle>
                    <CardTitle>Business Contact: {unit.tenants.contact_name}</CardTitle>
                    <CardTitle>Contact Number: {unit.tenants.tenant_phone}</CardTitle>
                    <CardTitle>Rent: ${Math.ceil(unit.rent / 100).toFixed(2)}</CardTitle>
                </CardBody>
            </Card> */}
            <Toast key={unit.tenants.id}>
                <ToastHeader>
                    Unit {unit.unitNumber}
                </ToastHeader>
                <ToastBody>
                    <p>Business: {unit.tenants.business_name}</p>
                    <p>Business Contact: {unit.tenants.contact_name}</p>
                    <p>Contact Number: {unit.tenants.tenant_phone}</p>
                    <p>Rent: ${Math.ceil(unit.rent / 100).toFixed(2)}</p>
                </ToastBody>
            </Toast>
        </Col>
    ))
    return list;
};

export default UnitItems;