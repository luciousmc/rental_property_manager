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

    render(){
        console.log(this.props.match.params.id);
        return(
            <React.Fragment>
                <Row>
                    <h1 className="mx-auto mb-4">Your Repair Requests</h1>
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
                    <ManagerListItem managerList={this.state.requests} setView={this.props.setView}/>
                </Row>
            </React.Fragment>
        );
    }
}
