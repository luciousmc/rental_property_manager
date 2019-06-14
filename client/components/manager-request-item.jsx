import React from 'react';
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap';

function ManagerListItem(props){
    if (props.managerList.length < 1){
        return(
            <Container>
                <Row>
                    <h3>There are Zero repair requests in your inbox.</h3>
                </Row>
            </Container>
        );
    }
    const outputList = props.managerList.map(request=>{
        return(
            <Container className="mb-3">
                <Card className="property-card" key={request.unit_id} >
                    <Row>
                        <Col sm="12">
                            <CardBody>
                                <CardTitle tag="h3">{request.street_address}, Unit {request.unit_number}</CardTitle>
                                <Row>
                                    <Col>
                                        <h5 className="text-muted"><b>Tenant Phone: </b>{request.tenant_phone}</h5>
                                    </Col>
                                    <Col>
                                        <h5 className="text-muted"><b>Repair Request: </b>{request.repair_request}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <h5 className="text-muted"><b>Tenant Email: </b>{request.tenant_email}</h5>
                                    </Col>
                                    {/*<Col>*/}
                                    {/*    <button className='btn btn-success'>Approve </button>*/}
                                    {/*    <button className='btn btn-danger'> Reject </button>*/}
                                    {/*</Col>*/}
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </Container>
        );
    })
    return outputList;
}

export default ManagerListItem;