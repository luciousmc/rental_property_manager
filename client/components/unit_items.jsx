import React from 'react';
import { Container, Row, Spinner, Col, ToastBody, Toast, ToastHeader, Button, Modal, ModalHeader, ModalFooter, ModalBody } from 'reactstrap';

class UnitItems extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modal: false,
            unit: {}
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        }
    render(){
        if(this.props.unitList === undefined) return <h1 className="text-center"><Spinner color="danger" /></h1>

        const list = this.props.unitList.map(unit=>{
            console.log('unit.status is: ', unit);
            if (unit.status === 'Vacant'){
                return (
                    <Col sm="4" className="mb-2">
                        <Toast key={unit.tenants.id} className="toast-unit">
                            <ToastHeader>
                            <h4 className="text-center">Unit {unit.unitNumber}</h4>
                            </ToastHeader>
                            <ToastBody>
                                <p className="vacant text-muted">Vacant</p>
                                <p className="text-center"><a style={{ fontSize: 15 }} href={`/property/${this.props.propertyID}/add-tenant`}>+ Add Tenant</a></p>
                            </ToastBody>
                        </Toast>
                    </Col>
                );
            }
            return (
            <Col sm="4" className="mb-2">
                <Toast key={unit.tenants.id} className="toast-unit">
                    <ToastHeader>
                        <h4 className="unit-link" onClick={this.toggle}>Unit {unit.unitNumber}</h4>
                    </ToastHeader>
                    <ToastBody>
                        <p>Business: {unit.tenants.business_name ? unit.tenants.business_name : ''}</p>
                        <p>Business Contact: {unit.tenants.contact_name ? unit.tenants.contact_name : ''}</p>
                        <p>Contact Number: {unit.tenants.tenant_phone ? unit.tenants.tenant_phone : ''}</p>
                        <p>Rent: ${Math.ceil(unit.rent).toFixed(2)}</p>
                    </ToastBody>
                </Toast>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className="unit-details-modal">
                    <ModalHeader toggle={this.toggle}>Unit {unit.unitNumber} - {unit.tenants.business_name}</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col>
                                <p><em>Business Owner:</em> {unit.tenants.contact_name}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p><em>Business Number:</em> {unit.tenants.tenant_phone}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p><em>Lease End Date:</em> {unit.tenants.lease_end_date}</p>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
            </Col>
        )})
        return list;
    };
}

export default UnitItems;