import React from 'react';
import { Container, Row, Col, ToastBody, Toast, ToastHeader } from 'reactstrap';
import AddModal from './add-modal';

function UnitItems(props){
    if(!props.unitList) return <h1>Loading...</h1>
    const list = props.unitList.map(unit=> {
        return (
            <Col sm="4" className="mb-2">
                <Toast key={unit.tenants.id}>
                    <ToastHeader>
                        Unit {unit.unitNumber}
                    </ToastHeader>
                    <ToastBody onClick={AddModal}>
                        <p>Business: {unit.tenants.business_name ? unit.tenants.business_name : ''}</p> 
                        <p>Business Contact: {unit.tenants.contact_name ? unit.tenants.contact_name : ''}</p>
                        <p>Contact Number: {unit.tenants.tenant_phone ? unit.tenants.tenant_phone : ''}</p>
                        <p>Rent: ${Math.ceil(unit.rent).toFixed(2)}</p>
                    </ToastBody>
                </Toast>
            </Col>
        )
    })
    return list;
};

export default UnitItems;