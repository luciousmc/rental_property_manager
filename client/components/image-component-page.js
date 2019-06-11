import React from 'react';
import { Container, Row } from 'reactstrap';
import AddImage from './imageComponent';

export default (props)=>(
    <React.Fragment>
    <Row>
    <Container>
    <div className="form-container col-8 offset-2">
    <AddImage />
</div>
</Container>
</Row>
</React.Fragment>
);