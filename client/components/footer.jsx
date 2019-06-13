import React from 'react';
import { Container, Row, Col, Button} from 'reactstrap';


export default class Footer extends React.Component{
    
      render() {
        return (
            <footer id="myFooter">
            <Container >
                <Row>
                    <Col className="col-sm-12 col-md-4">
                        <h2 className="logo"><a href="#"> Moore Properties </a></h2>
                    </Col>
                    <Col className="col-sm-6 col-md-3">
                        <h5>Get started</h5>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/manager-main">Property Manager Portal</a></li>
                            <li><a href="/tenant-main">Tenant Portal</a></li>
                        </ul>
                    </Col>
                    <Col className="col-sm-6 col-md-2">
                        <h5>About us</h5>
                        <ul>
                            <li><a href="#">Meet the Team!</a></li>
                        </ul>
                    </Col>
                    <Col className="col-md-3">
                        <Button className="btn btn-danger">Contact us</Button>
                    </Col>
                </Row>
            </Container>
            <div color="dark" className="footer-copyright">
                <p>© 2019 Moore Properties </p>
            </div>
        </footer>
        );
      }
    }
