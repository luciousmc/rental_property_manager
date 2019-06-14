import React from 'react';
import { Container, Row } from 'reactstrap';
import AddProperty from './addProperty';


export default ()=>(
<React.Fragment>
    <Row>
        <div className="col">
            <AddProperty/>
        </div>
    </Row>
</React.Fragment>
);