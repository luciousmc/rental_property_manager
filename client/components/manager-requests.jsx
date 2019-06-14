import React from 'react';
import {Row, Container, Button, Col, Nav} from 'reactstrap';
import ManagerListItem from './manager-request-item';
import {Link} from 'react-router-dom';

export default class ManagerReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            requests: []
        };
        this.statusRequestChange = this.statusRequestChange.bind(this);
    }
    componentDidMount(){
        this.getRequests();
    }
    
    getRequests(){
        fetch('/api/property/manager_repair_requests.php')
            .then(response=>response.json())
            .then(requestList=>{
                this.setState({ requests: requestList });
            })
    }

    statusRequestChange(id, status){
        let requestData = {
            status: status,
            request_id: id
        }
        fetch('/api/tenants/repair_request_status.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestData)
        })
        .then(res => {
            this.setState({requests: this.state.requests.filter((request)=> request.request_id != id)})
        });

    }

    render(){
        // console.log(this.props);
        return(
            <React.Fragment>
                <Row>
                    <Col className="header-background">
                        <h1 className="property-detail-header text-center" style={{'margin-top':'5%'}}>Your Repair Requests</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className="details-header text-center py-2">
                        <Nav pills>
                            <Col>
                                <a className="detail-link p-2 my-1" href={`/property/${this.props.match.params.id}`}>Property Summary</a>
                            </Col>
                            <Col>
                                <a className="detail-link p-2 my-1" href={`/property/${this.props.match.params.id}/add-unit`}>Add Unit</a>
                            </Col>
                            <Col>
                                <a className="detail-link p-2 my-1" href={`/property/${this.props.match.params.id}/manager-review`}>Repair Requests</a>
                            </Col>
                        </Nav>
                    </Col>
                </Row>
                <Row className='my-5'>
                    <ManagerListItem managerList={this.state.requests} setView={this.props.setView} setStatus={this.statusRequestChange}/>
                </Row>
            </React.Fragment>
        );
    }
}
