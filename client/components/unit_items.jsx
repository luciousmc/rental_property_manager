import React from 'react';
import { Container, Row, Col, ToastBody, Toast, ToastHeader } from 'reactstrap';

function UnitItems(props){
    if(!props.unitList) return <h1>Loading...</h1>
    const list = props.unitList.map(unit=>(
        <Col sm="4" className="mb-2">
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