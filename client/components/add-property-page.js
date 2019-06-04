import React from 'react';
import { Container, Row } from 'reactstrap';
import AddProperty from './addProperty';

export default ()=>(
<React.Fragment>
    <Row>
        <Container>
            <div className="form-container col-8 offset-2">
                <AddProperty />
            </div>
        </Container>
    </Row>
</React.Fragment>
);