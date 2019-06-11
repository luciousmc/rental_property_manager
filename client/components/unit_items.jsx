import React from 'react';
import { Container, Row, Col, ToastBody, Toast, ToastHeader, NavLink } from 'reactstrap';

function UnitItems(props){
    if(props.unitList === undefined) return <h1>Loading...</h1>

    const list = props.unitList.map(unit=>{
        console.log('unit.status is: ', unit);
        if (unit.status === 'Vacant'){
            return (
                <Col sm="4" className="mb-2">
                    <Toast key={unit.tenants.id} className="toast-unit">
                        <ToastHeader>
                            Unit {unit.unitNumber}
                        </ToastHeader>
                        <ToastBody>
                            <p className="vacant text-muted">Vacant</p>
                            <p className="text-center"><a style={{ fontSize: 15 }} href={`/property/${props.propertyID}/unit/${unit.unit_id}/add-tenant`}>+ Add Tenant</a></p>
                        </ToastBody>
                    </Toast>
                </Col>
            );
        }
        return (
        <Col sm="4" className="mb-2">
            <Toast key={unit.tenants.id} className="toast-unit">
                <ToastHeader>
                    Unit {unit.unitNumber}
                </ToastHeader>
                <ToastBody>
                    <p>Business: {unit.tenants.business_name ? unit.tenants.business_name : ''}</p>
                    <p>Business Contact: {unit.tenants.contact_name ? unit.tenants.contact_name : ''}</p>
                    <p>Contact Number: {unit.tenants.tenant_phone ? unit.tenants.tenant_phone : ''}</p>
                    <p>Rent: ${Math.ceil(unit.rent).toFixed(2)}</p>
                </ToastBody>
            </Toast>
        </Col>
    )})
    return list;
};

export default UnitItems;