import React from 'react';
import { Container, Row } from 'reactstrap';
import AddUnit from './addUnit';

export default ()=>(
<React.Fragment>
    <Row>
        <Container>
            <div className="form-container col-8 offset-2">
                <AddUnit/>
            </div>
        </Container>
    </Row>
</React.Fragment>
);