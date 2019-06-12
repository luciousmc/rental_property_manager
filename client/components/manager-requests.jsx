import React from 'react';
import { Row, Container, Button } from 'reactstrap';
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
        return(
            <div>
                <Container>
                <Row>
                <Link to="/manager-main" style={{color: "white"}}>
                    <Button size="md" color="primary" style={{marginTop: '20px'}}>
                        Back 
                    </Button>
                </Link>
                </Row>
                <Row>
                    <h1 className="mx-auto mb-4">Your Repair Requests</h1>
                </Row>
                <Row>
                    <Container>
                        <Row>
                            <ManagerListItem managerList={this.state.requests} setView={this.props.setView}/>
                        </Row>
                    </Container>
                </Row>
                </Container>
            </div>
        );
    }
}
